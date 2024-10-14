# ✨SpringBoot异步线程间传递上下文

<hr/>

[[toc]]

## 需求

SpringBoot项目中，经常使用 **@Async** 来开启一个子线程来完成异步操作。主线程中的用户信息需要传递给子线程

## 实现

### 启用异步功能

在启动类里加上@EnableAsync注解

```java
@EnableAsync
@SpringBootApplication
public class Application {}
```

### 配置异步

新建一个配置类，实现`AsyncConfigurer`接口，并重写`getAsyncExecutor`方法

```java
@Configuration
public class AsyncConfig implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);
        executor.setMaxPoolSize(50);
        executor.setThreadNamePrefix("async-pool-");
        // 这一步是关键，异步Task装饰器
        executor.setTaskDecorator(new MyContextDecorator());
        executor.initialize();
        return executor;
    }
}
```

### 配置任务装饰器

新建一个异步任务装饰器，实现`TaskDecorator`接口，并重写`decorate`方法

```java
public class MyContextDecorator implements TaskDecorator {
    @Override
    @Nonnull
    public Runnable decorate(@Nonnull Runnable runnable) {

		// 获取主线程中的请求信息（我们的用户信息也放在里面）
       RequestAttributes attributes = RequestContextHolder.getRequestAttributes();
        return () -> {
            try {
              	// 将主线程的请求信息，设置到子线程中
              	RequestContextHolder.setRequestAttributes(attributes);
             	// 执行子线程，这一步不要忘了
                runnable.run();
            } finally {
            	// 线程结束，清空这些信息，否则可能造成内存泄漏
                RequestContextHolder.resetRequestAttributes();
            }
        };
    }
```

补充：RequestContextHolder内部是基于ThreadLocal实现的，因此在使用set
get时，都是和当前线程绑定的。当然，使用者的用户信息不一定放在了RequestContextHolder里面，读者可以自行扩展。

### 完工

到此，通过 **@Async** 开启的子线程，就可以正常拿到父线程中的Request信息了。



