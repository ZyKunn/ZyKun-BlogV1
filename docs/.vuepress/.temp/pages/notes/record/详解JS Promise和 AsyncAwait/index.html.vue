<template><div><h1 id="详解js-promise和-async-await" tabindex="-1"><a class="header-anchor" href="#详解js-promise和-async-await" aria-hidden="true">#</a> 详解JS Promise和 Async/Await</h1>
<p>原文：<a href="https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/" target="_blank" rel="noopener noreferrer">How to Learn JavaScript Promises and Async/Await in 20 Minutes<ExternalLinkIcon/></a>，作者：<a href="https://www.freecodecamp.org/news/author/thu/" target="_blank" rel="noopener noreferrer">Thu Nghiem<ExternalLinkIcon/></a></p>
<p>网络上的很多事情都比较耗时——比如，查询API时，可能需要等一段时间才能获得响应。因此，异步编程对于开发者来说是一项基本技能。</p>
<p>在JavaScript中处理异步操作时，我们经常会听到 &quot;Promise &quot;这个概念。但它的工作原理及使用方法可能会比较抽象和难以理解。</p>
<p>本文与与许多干巴巴的教程不同，将通过实践的方式，帮助你更快速地理解它们的概念和用法。我们将从以下四个示例开始：</p>
<ul>
<li>示例1：用生日解释Promise的基础知识</li>
<li>示例2：一个猜数字的游戏</li>
<li>示例3：从Web API中获取国家信息</li>
<li>示例4：从Web API中获取一个国家的周边国家列表</li>
</ul>
<h2 id="示例1-用生日解释promise基础知识" tabindex="-1"><a class="header-anchor" href="#示例1-用生日解释promise基础知识" aria-hidden="true">#</a> 示例1：用生日解释Promise基础知识</h2>
<p>首先，我们先来看看Promise的基本形态是什么样的。</p>
<p>Promise执行时分三个状态：pending（执行中）、fulfilled（成功）、rejected（失败）。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>new Promise(function(resolve, reject) {
    if (/* 异步操作成功 */) {
        resolve(value); //将Promise的状态由padding改为fulfilled
    } else {
        reject(error); //将Promise的状态由padding改为rejected
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现时有三个原型方法then、catch、finally</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>promise
.then((result) =&gt; {
	//promise被接收或拒绝继续执行的情况
})
.catch((error) =&gt; {
	//promise被拒绝的情况
})
.finally (() =&gt; {
	//promise完成时，无论如何都会执行的情况
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本形态介绍完成了，那么我们下面开始看看下面的示例吧。</p>
<p>用户故事：我的朋友Kayo答应在两周后在我的生日Party上为我做一个蛋糕。</p>
<p>如果一切顺利且Kayo没有生病的话，我们就会获得一定数量的蛋糕，但如果Kayo生病了，我们就没有蛋糕了。但不论有没有蛋糕，我们仍然会开一个生日Party。</p>
<p>所以对于这个示例，我们将如上的背景故事翻译成JS代码，首先让我们先创建一个返回Promise的函数。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const onMyBirthday = (isKayoSick) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      if (!isKayoSick) {
        resolve(2);
      } else {
        reject(new Error(&quot;I am sad&quot;));
      }
    }, 2000);
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在JavaScript中，我们可以使用new Promise()创建一个新的Promise，它接受一个参数为：(resolve，reject)=&gt;{} 的函数。</p>
<p>在此函数中，resolve和reject是默认提供的回调函数。让我们仔细看看上面的代码。</p>
<p>当我们运行onMyBirthday函数2000ms后。</p>
<ul>
<li>如果Kayo没有生病，那么我们就以2为参数执行resolve函数</li>
<li>如果Kayo生病了，那么我们用new Error(&quot;I am sad&quot;)作为参数执行reject。尽管您可以将任何要拒绝的内容作为参数传递，但建议将其传递给Error对象。</li>
</ul>
<p>现在，因为onMyBirthday()返回的是一个Promise，我们可以访问then、catch和finally方法。我们还可以访问早些时候在then和catch中使用传递给resolve和reject的参数。</p>
<p>让我们通过如下代码来理解概念</p>
<p>如果Kayo没有生病</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>onMyBirthday(false)
  .then((result) =&gt; {
    console.log(`I have ${result} cakes`); // 控制台打印“I have 2 cakes”  
  })
  .catch((error) =&gt; {
    console.log(error); // 不执行
  })
  .finally(() =&gt; {
    console.log(&quot;Party&quot;); // 控制台打印“Party”
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果Kayo生病</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>onMyBirthday(true)
  .then((result) =&gt; {
    console.log(`I have ${result} cakes`); // 不执行 
  })
  .catch((error) =&gt; {
    console.log(error); // 控制台打印“我很难过”
  })
  .finally(() =&gt; {
    console.log(&quot;Party&quot;); // 控制台打印“Party”
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相信通过这个例子你能了解Promise的基本概念。</p>
<p>下面我们开始示例2</p>
<h2 id="示例2-一个猜数字的游戏" tabindex="-1"><a class="header-anchor" href="#示例2-一个猜数字的游戏" aria-hidden="true">#</a> 示例2：一个猜数字的游戏</h2>
<p>基本需求：</p>
<ul>
<li>用户可以输入任意数字</li>
<li>系统从1到6中随机生成一个数字</li>
<li>如果用户输入数字等于系统随机数，则给用户2分</li>
<li>如果用户输入数字与系统随机数相差1，给用户1分，否则，给用户0分</li>
<li>用户想玩多久就玩多久</li>
</ul>
<p>对于上面的需求，我们首先创建一个enterNumber函数并返回一个Promise：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const enterNumber = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    // 从这开始编码
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们要做的第一件事是向用户索要一个数字，并在1到6之间随机选择一个数字：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const enterNumber = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    const userNumber = Number(window.prompt(&quot;Enter a number (1 - 6):&quot;)); // 向用户索要一个数字
    const randomNumber = Math.floor(Math.random() * 6 + 1); // 选择一个从1到6的随机数
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户输入一个不是数字的值。这种情况下，我们调用reject函数，并抛出错误：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const enterNumber = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    const userNumber = Number(window.prompt(&quot;Enter a number (1 - 6):&quot;)); // 向用户索要一个数字
    const randomNumber = Math.floor(Math.random() * 6 + 1); //选择一个从1到6的随机数

    if (isNaN(userNumber)) {
      reject(new Error(&quot;Wrong Input Type&quot;)); // 当用户输入的值非数字，抛出异常并调用reject函数
    }
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面，我们需要检查userNumber是否等于RanomNumber，如果相等，我们给用户2分，然后我们可以执行resolve函数来传递一个object { points: 2, randomNumber } 对象。</p>
<p>如果userNumber与randomNumber相差1，那么我们给用户1分。否则，我们给用户0分。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>return new Promise((resolve, reject) =&gt; {
  const userNumber = Number(window.prompt(&quot;Enter a number (1 - 6):&quot;)); // 向用户索要一个数字
  const randomNumber = Math.floor(Math.random() * 6 + 1); // 选择一个从1到6的随机数

  if (isNaN(userNumber)) {
    reject(new Error(&quot;Wrong Input Type&quot;)); // 当用户输入的值非数字，抛出异常并调用reject函数
  }

  if (userNumber === randomNumber) {
    // 如果相等，我们给用户2分
    resolve({
      points: 2,
      randomNumber,
    });
  } else if (
    userNumber === randomNumber - 1 ||
    userNumber === randomNumber + 1
  ) {
    // 如果userNumber与randomNumber相差1，那么我们给用户1分
    resolve({
      points: 1,
      randomNumber,
    });
  } else {
    // 否则用户得0分
    resolve({
      points: 0,
      randomNumber,
    });
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面，让我们再创建一个函数来询问用户是否想继续游戏：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const continueGame = () =&gt; {
  return new Promise((resolve) =&gt; {
    if (window.confirm(&quot;Do you want to continue?&quot;)) { // 向用户询问是否要继续游戏
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了不使游戏强制结束，我们创建的Promise没有使用Reject回调。</p>
<p>下面，我们创建一个函数来处理猜数字逻辑：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const handleGuess = () =&gt; {
  enterNumber() // 返回一个Promise对象
    .then((result) =&gt; {
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`); // 当resolve运行时，我们得到用户得分和随机数 
      
      // 向用户询问是否要继续游戏
      continueGame().then((result) =&gt; {
        if (result) {
          handleGuess(); // If yes, 游戏继续
        } else {
          alert(&quot;Game ends&quot;); // If no, 弹出游戏结束框
        }
      });
    })
    .catch((error) =&gt; alert(error));
};

handleGuess(); // 执行handleGuess 函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这当我们调用handleGuess函数时，enterNumber()返回一个Promise对象。</p>
<p>如果Promise状态为resolved，我们就调用then方法，向用户告知竞猜结果与得分，并向用户询问是否要继续游戏。</p>
<p>如果Promise状态为rejected，我们将显示一条用户输入错误的信息。</p>
<p>不过，这样的代码虽然能解决问题，但读起来还是有点困难。让我们后面将使用async/await 对hanldeGuess进行重构。</p>
<p>网上对于 async/await 的解释已经很多了，在这我想用一个简单概括的说法来解释：<strong>async/await就是可以把复杂难懂的异步代码变成类同步语法的语法糖</strong>。</p>
<p>下面开始看重构后代码吧：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const handleGuess = async () =&gt; {
  try {
    const result = await enterNumber(); // 代替then方法，我们只需将await放在promise前，就可以直接获得结果

    alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      handleGuess();
    } else {
      alert(&quot;Game ends&quot;);
    }
  } catch (error) { // catch 方法可以由try, catch函数来替代
    alert(error);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过在函数前使用async关键字，我们创建了一个异步函数，在函数内的使用方法较之前有如下不同：</p>
<ul>
<li>和then函数不同，我们只需将await关键字放在Promise前，就可以直接获得结果。</li>
<li>我们可以使用try, catch语法来代替promise中的catch方法。</li>
</ul>
<p>下面是我们重构后的完整代码，供参考：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const enterNumber = () =&gt; {
  return new Promise((resolve, reject) =&gt; {
    const userNumber = Number(window.prompt(&quot;Enter a number (1 - 6):&quot;)); // 向用户索要一个数字
    const randomNumber = Math.floor(Math.random() * 6 + 1); // 系统随机选取一个1-6的数字

    if (isNaN(userNumber)) {
      reject(new Error(&quot;Wrong Input Type&quot;)); // 如果用户输入非数字抛出错误
    }

    if (userNumber === randomNumber) { // 如果用户猜数字正确，给用户2分
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) { // 如果userNumber与randomNumber相差1，那么我们给用户1分
      resolve({
        points: 1,
        randomNumber,
      });
    } else { // 不正确，得0分
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
};

const continueGame = () =&gt; {
  return new Promise((resolve) =&gt; {
    if (window.confirm(&quot;Do you want to continue?&quot;)) { // 向用户询问是否要继续游戏
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGuess = async () =&gt; {
  try {
    const result = await enterNumber(); // await替代了then函数

    alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);

    const isContinuing = await continueGame();

    if (isContinuing) {
      handleGuess();
    } else {
      alert(&quot;Game ends&quot;);
    }
  } catch (error) { // catch 方法可以由try, catch函数来替代
    alert(error);
  }
};

handleGuess(); // 执行handleGuess 函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们已经完成了第二个示例，接下来让我们开始看看第三个示例。</p>
<h2 id="示例3-从web-api中获取国家信息" tabindex="-1"><a class="header-anchor" href="#示例3-从web-api中获取国家信息" aria-hidden="true">#</a> 示例3：从Web API中获取国家信息</h2>
<p>一般当从API中获取数据时，开发人员会经常使用Promises。如果在新窗口打开https://restcountries.com/v2/alpha/cn，你会看到JSON格式的国家数据。</p>
<p>通过使用<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener noreferrer">Fetch API<ExternalLinkIcon/></a>，我们可以很轻松的获得数据，以下是代码：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const fetchData = async () =&gt; {
  const res = await fetch(&quot;https://restcountries.com/v2/alpha/cn&quot;); // Fetch()返回一个promise，所以我们需要等待它

  const country = await res.json(); // res现在只是一个HTTP响应，所以我们需要调用res.json()

  console.log(country); // 中国的数据将被记录到开发控制台
};

fetchData();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们获得了所需的国家/地区数据，让我们转到最后一项任务。</p>
<h2 id="示例4-从web-api中获取一个国家的周边国家列表" tabindex="-1"><a class="header-anchor" href="#示例4-从web-api中获取一个国家的周边国家列表" aria-hidden="true">#</a> 示例4：从Web API中获取一个国家的周边国家列表</h2>
<p>下面的fetchCountry函数从示例3中的api获得国家信息，其中的参数alpha3Code 是代指该国家的国家代码，以下是代码</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>// Task 4: 获得中国周边的邻国信息
const fetchCountry = async (alpha3Code) =&gt; {
  try {
    const res = await fetch(
     `https://restcountries.com/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面让我们创建一个fetchCountryAndNeighbors函数，通过传递cn作为alpha3code来获取中国的信息。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const fetchCountryAndNeighbors = async () =&gt; {
  const china= await fetchCountry(&quot;cn&quot;);

  console.log(china);
};

fetchCountryAndNeighbors();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台中，我们看看对象内容：</p>
<p><img src="@source/notes/record/详解JS Promise和 AsyncAwait/C:/Users/Administrator/Desktop/assets/image-20240718134615550.png" alt="image-20240718134615550"></p>
<p>在对象中，有一个border属性，它是中国周边邻国的alpha3codes列表。</p>
<p>现在，如果我们尝试通过以下方式获取邻国信息。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const neighbors = 
    china.borders.map((border) =&gt; fetchCountry(border));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>neighbors是一个Promise对象的数组。</p>
<p>当处理一个数组的Promise时，我们需要使用Promise.all。</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const fetchCountryAndNeigbors = async () =&gt; {
  const china = await fetchCountry(&quot;cn&quot;);

  const neighbors = await Promise.all(
    china.borders.map((border) =&gt; fetchCountry(border))
  );

  console.log(neighbors);
};

fetchCountryAndNeigbors();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台中，我们应该能够看到国家/地区对象列表。</p>
<p><img src="@source/notes/record/详解JS Promise和 AsyncAwait/C:/Users/Administrator/Desktop/assets/image-20240718134720663.png" alt="image-20240718134720663"></p>
<p>以下是示例4的所有代码，供您参考：</p>
<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre v-pre class="language-JavaScript"><code>const fetchCountry = async (alpha3Code) =&gt; {
  try {
    const res = await fetch(
      `https://restcountries.com/v2/alpha/${alpha3Code}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeigbors = async () =&gt; {
  const china = await fetchCountry(&quot;cn&quot;);
  const neighbors = await Promise.all(
    china.borders.map((border) =&gt; fetchCountry(border))
  );
  console.log(neighbors);
};

fetchCountryAndNeigbors();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


