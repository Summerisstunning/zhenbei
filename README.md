## 1. 需求

给大象真北的课程做一个网页：一共有八课分别是

课程1:自我觉察

课程2:自我认知
课程3: 觉察与反思
课程4:深度转化
课程5: 亲密关系
课程6: 界限
课程7:阴影一
课程8:阴影二

主页面除了放上8个课程模块之外，还会展示两个智能体，一个是：气象报告，一个是：呼吸练习。

当用户点击每一个课程模块标题，会跳转到新的对应的课程模块页面

每一堂课都会放上课件，以及对应的智能体（作为练习交互的工具），相对应的音乐（音频）加上留言版（同学可自由分享感悟），每日练习。

## 第一课自我觉察页面：展示4个模块，分别是课件，生命故事，生命故事之书，冰山模型

点击每一个对应的模块，会跳转到新的页面。课件对应跳转 第1课自我觉察.pdf，其他3个需要放的智能体工具实现的功能分别为：

### 1.【生命故事】

         实现功能：1. 是一个录音按钮，每次登陆注册的用户可以选择点击录音（还可重新录制或者重复录制，显示为如：生命故事2024.11.21，生命故事2025.2.13），自动帮助用户存储录音（并不展示给网络其他用户），每次录音讲述完，用户可以查看：文稿/AI总结文稿；当用户多次登陆重复讲述存储生命故事后，可以选择按钮多选总结，AI自动分析：

- 是否有某种重复的模式？如果有，是什么？
• 在这些用户重大时刻所发生的二三个主题是什么？
• 能激发用户的梦想是什么？
• 所有这些事件显示出用户最关注的是什么？
• 用户所秉承的理念赋予你的生活和工作怎样的意义和目标？

### 2. 高级功能：【生命故事之书】

1. 把你的人生看作一本书，
梳理个人生命故事的纲要
2. 详细回忆八个关键事件:
高峰体验·低谷体验·转折点·最
早的记忆·重要的童年记忆·重要
的青春期记忆·重要的成年期记
忆·其他重要记忆
3. 详细描述你生命中的几个
重要人物
4. 拟写未来脚本，设想生命故事
的未来
5. 总结当下困住你的压力源、
问题和挑战
6. 了解自己的基本信念与价值观
7. 总结出自己的人生主题

实现功能：展示7个录音部分，每个录音部分展示上述的提示（在录音时依然有对应的提示），每一部分都允许重新录制，或者重复录制。当7个部分都有录制后，点击分析按钮，可以让AI分析总结用户这7个部分对应的事件，给出积极提示。

### 3. 【冰山模型】

展示冰山模型的图 冰山模型.jpg

下方对应一个对话框，可以点击语音或者文字输入，按照下方的顺序，先出现1.行为（冰山表面）对应的引导语，当用户回答完，往下出现2.感受 的对应引导语，以此类推直到最后

### 1. **行为（冰山表面）**

---

**引导语**：

“我们先来看冰山的顶部，也就是我们可以看到的部分——行为。

请想一想：

- 最近你做了哪些事情？
- 你的行为代表了什么？（比如你的选择、习惯、说的话、做的决定）
- 这些行为背后，是否有一个故事或情境在推动？”

**示例**：

“比如，你最近与某人发生了一次争吵，或者你推迟了一项任务，或者你在某个项目中表现积极。”

---

### 2. **感受**

**引导语**：

“接下来，我们进入冰山的水面以下——你的感受。

请回忆刚刚提到的行为，问问自己：

- 当时你是什么样的情绪？是喜悦、愤怒、悲伤、恐惧，还是其他的？
- 这些情绪是如何影响你的行为的？”

**进一步探索**：

“比如，当你与人争吵时，你可能感受到愤怒或伤害；当你拖延一项任务时，背后可能是焦虑或恐惧。”

---

### 3. **感受的感受**

**引导语**：

“再往下走一步，我们来探索‘感受的感受’。

- 你对自己的这些情绪有什么反应？
- 你是否觉得这些情绪‘不应该’？比如，你是否因为愤怒而感到羞愧，或者因为恐惧而自责？”

**补充**：

“很多时候，我们的情绪之下还有更深层的情绪反应，比如害怕自己的情绪失控，或者对自己的感受感到困惑。”

---

### 4. **观点**

**引导语**：

“现在，我们深入冰山的中层部分——你的观点。

请思考：

- 你的行为和情绪背后，有哪些信念或观点在影响你？
- 你认为‘应该’怎样？‘不应该’怎样？
- 这些观点是如何形成的？它们是来自过去的经历、习惯，还是别人对你的影响？”

**示例**：

“比如，你可能认为‘表现出情绪是不成熟的’，或者‘我必须事事完美才能被认可’。”

---

### 5. **期待**

**引导语**：

“接下来，我们来到‘期待’这一层。

- 你对自己、对他人、对世界有哪些期待？
- 这些期待是明确的吗？还是潜意识里的？
- 这些期待是否在推动你的行为或情绪？”

**引导反思**：

“比如，你可能期待别人理解你、认同你，或者期待自己永远不会失败。”

---

### 6. **渴望（人类共有的）**

**引导语**：

“再往下走一步，我们来到了冰山的深处——‘渴望’。

这些渴望是我们每个人与生俱来的，它们让我们感受到生命的意义和价值。

- 你在刚刚的情境中，真正渴望的是什么？
- 你是渴望被爱、被接纳，还是希望自己被认可、有价值、获得自由？”

**进一步探索**：

“比如，有人争吵的背后，渴望的是理解和被接纳；拖延任务的背后，可能渴望自我认可或安全感。”

---

### 7. **自我：我是**

**引导语**：

“最后，我们来到冰山的核心——你的自我。

在你所有的行为、情绪、观点、渴望的背后，有一个最真实的你。

- 你是谁？
- 你内在的生命力、精神、核心价值是什么？
- 如果你回到你的内在核心，你会如何描述自己？”

**反思与总结**：

“在这里，你可以放下外界的期待和评价，真实地看到自己，比如‘我是有价值的’，‘我是被爱的’，‘我是自由的’。”

---

## **第二部分：**

---

### 1. **自我：我是**

**引导语**：

“现在，我们从核心的‘自我’出发。

请带着你刚刚找到的‘自我’，问自己：

- 你如何让这个真实的自己更多地呈现出来？
- 这个‘我是’如何引导你做出更真实、更自由的选择？”

---

### 2. **渴望（人类共有的）**

**引导语**：

“从你的‘自我’出发，去理解你的渴望：

- 你如何满足自己内心深处的渴望？
- 这些渴望如何让你感受到生命的意义和价值？”

---

### 3. **期待**

**引导语**：

“现在，重新看待你的期待：

- 这些期待是合理的吗？还是过于苛求自己或他人？
- 你如何调整这些期待，让它们更加平衡和真实？”

---

### 4. **观点**

**引导语**：

“接下来，思考你的观点和信念：

- 哪些信念在支持你？哪些信念需要调整？
- 你可以选择新的、更积极的信念来引导你的行为吗？”

---

### 5. **感受的感受**

**引导语**：

“回到你的感受：

- 你是否可以接受自己的情绪？
- 允许自己真实地感受，而不去批判或压抑它们？”

---

### 6. **感受**

**引导语**：

“再次回顾你的情绪：

- 当你接纳这些感受后，你的内心是否更加平静？
- 这些感受在告诉你什么？它们是否带来了新的洞察？”

---

### 7. **行为（冰山表面）**

**引导语**：

“最后，回到你的行为：

- 现在，你会选择怎样的行动？
- 这个行动是否更符合你的真实渴望和内在自我？”

---

## **总结引导语**

“通过冰山模型的探索，我们看到行为背后隐藏着深层的情绪、信念和渴望。而当我们触及内在的核心自我时，我们能够更真实地理解自己，做出更加有意识、有力量的选择。请带着今天的发现，去践行新的行为，活出真实的自己。”

## 课程2 自我认知页面：展示5个模块和一个插件，分别是课件，沟通模式，认知疗法，IGO情绪处理法 ，情绪记录（模块+插件）

## **插件设计：快速情绪记录与提醒**

插件是整个情绪管理系统的“入口”，负责提醒、快速记录和高频交互。

### **功能一：情绪记录浮动插件**

### **功能描述**：

- 插件显示在页面的右下角，以 **表情图标 😊** 为按钮，点击后弹出一个情绪记录窗口。

### **UI设计**：

- **按钮图标**：简洁表情图标，带有微妙的动效（例如轻微晃动），吸引用户注意。
- **弹出窗口**：
    - 标题：**“此刻的心情如何？”**
    - **情绪选择区域**：
        - 显示 **Plutchik 8个基本情绪**，每个情绪用不同的图标或颜色表示。
        - 用户选择某个情绪后，展示**3个强度选项**，如“狂喜 → 欢乐 → 宁静”。
    - **自定义输入区域**：用户可以点击 “自定义”，手动输入自己的情绪。
    - **提交按钮**：点击**“记录”**提交情绪数据。
    - **关闭按钮**：允许用户暂时关闭窗口。

### **实现思路**：

- 前端通过 **CSS + JavaScript** 实现浮动插件和弹窗效果。
- 数据通过 API 调用保存到后端数据库（例如：情绪类型、强度、记录时间）。

---

### **功能二：30分钟未记录提醒**

### **功能描述**：

- 如果用户超过 **30分钟** 未记录情绪，插件自动弹出提醒窗口。
- 提示用户：“还没有记录情绪哦！现在的你感觉如何？”
- 用户可以选择：
    - “立即记录”：打开情绪记录窗口。
    - “稍后提醒”：30分钟后再次提醒。

### **实现思路**：

- 使用 **`setTimeout` 和 LocalStorage** 记录上次情绪提交的时间，实现自动提醒。
- 弹窗设计简洁，避免频繁打扰用户，设置“稍后提醒”功能。

---

## **模块设计：情绪管理与总结分析**

模块是用户深入管理和分析情绪的区域，提供更完整的历史回看、数据总结功能。

### **模块一：情绪历史记录**

### **功能描述**：

- 显示最近 **10条情绪记录**，包括：
    - **情绪类型**：Plutchik情绪名称。
    - **强度**：高/中/低。
    - **记录时间**：精确到小时和分钟。

### **UI设计**：

- **列表布局**：每条记录使用卡片样式，带有磨砂玻璃效果和轻微边框阴影。
- **显示内容**：
    - 图标 + 情绪名称 + 强度标签（颜色区分强度） + 时间。
- **滚动查看**：若记录超过10条，可以上下滚动。

---

### **模块二：心情总结与统计分析**

### **功能描述**：

- 提供用户按日期查询情绪记录，并生成可视化的**情绪统计图表**。
- 功能分两步：
    1. 用户先选择日期（日期选择器）。
    2. 系统显示统计图表或提示“当日暂无记录”。

### **UI设计**：

1. **初始界面**：
    - 居中显示文本：“请选择日期查看当天的心情总结”。
    - 日期选择器：简洁、易用，支持选择具体日期（格式：YYYY/MM/DD）。
2. **有记录的情况**：
    - 显示当天的情绪统计 **饼图**：
        - **图表内容**：显示各情绪类型所占比例。
        - 使用不同颜色区分情绪类型（例如：喜悦 → 黄色，悲伤 → 蓝色）。
    - **情绪总结**：下方展示简要总结，例如：
        - “今天你记录了5次情绪，其中最多的是‘欢乐’，强度多为‘宁静’。”
3. **无记录的情况**：
    - 显示文本：“当日暂无记录”。

### **实现思路**：

- 使用 **Chart.js** 或类似的图表库实现饼图渲染。
- 日期选择器通过前端与后端数据库交互，获取对应日期的数据。

---

## **插件与模块联动示例**

1. **情绪记录**（插件入口） → 用户提交数据 → 数据自动同步到**历史记录模块**。
2. 用户在模块查看历史记录时，点击某条记录，可以显示详细情绪信息（例如：强度、时间）。
3. 用户在**心情总结模块**选择日期，系统分析并生成当天的情绪统计图表。

---

## **技术实现建议**

### **前端技术**：

1. 使用 **HTML、CSS 和 JavaScript** 实现交互。
2. **React 或 Vue.js**：构建组件化的界面，方便插件与模块的数据共享。
3. **Chart.js 或 ECharts**：用于绘制统计图表。

### **后端技术**：

1. **数据存储**：
    - 使用数据库（例如 MySQL、MongoDB）存储情绪数据：
        - 用户ID、情绪类型、强度、记录时间。
2. **API接口**：
    - 提供增删查改接口，供前端保存和查询情绪数据。
    - 支持按日期范围查询，返回统计结果。

### **用户数据存储结构**：

```json
json
复制代码
{
  "user_id": "12345",
  "emotion": "喜悦",
  "intensity": "欢乐",
  "timestamp": "2024-06-01 14:35"
}

```

---

## **页面整体架构设计**

1. **插件区域**（浮动按钮 + 记录弹窗）
2. **模块区域**（页面内）：
    - **情绪历史记录模块**：展示记录列表。
    - **心情总结模块**：提供统计查询与图表显示。

对了

## **功能补充：用户自定义情绪记录间隔**

### **1. 功能描述**

用户可以在**插件设置中**选择记录提醒的间隔时间，包括：

- **默认选项**：30分钟、1小时、2小时。
- **自定义输入**：用户可手动输入时间间隔（例如45分钟、90分钟）。

---

### **2. 插件设置功能**

### **UI 设计**

在情绪记录插件的弹窗中，新增一个 **设置按钮（⚙️）**，点击后进入**设置界面**。

- **设置选项**：
    1. **提醒间隔选择**：
        - 使用下拉菜单，提供以下选项：
            - 30分钟
            - 1小时
            - 2小时
            - **自定义**（用户手动输入，例如45分钟）
    2. **保存设置按钮**：用户选择完间隔时间后，点击“保存”按钮，插件将根据新设置触发提醒。

---

### **3. 功能实现思路**

### **前端逻辑**

- 使用 JavaScript 的 **`setTimeout`** 或 **`setInterval`** 定时功能来实现提醒。
- 将用户选择的时间间隔保存在 **LocalStorage**（前端本地存储）或后端数据库中，以便保持持久化设置。

### **4. 用户体验流程**

1. **初始提醒**：
    - 默认设置提醒间隔为30分钟。
2. **用户自定义间隔**：
    - 用户点击插件弹窗中的 **“⚙️ 设置”**，选择提醒间隔（如30分钟、1小时或自定义）。
    - 输入自定义时间后，点击 **“保存”**。
3. **提醒逻辑**：
    - 插件根据用户选择的时间，定时弹出情绪记录提醒。
    - 提醒文案示例：“距离上次记录情绪已经 **1小时** 了，现在感觉如何？”
4. **后台保存**：
    - 如果实现后端功能，用户的时间间隔设置可以与账号绑定，支持跨设备同步。

---

### **5. 如何与模块联动？**

- **设置界面统一**：将**自定义提醒时间**的选项同步到模块的**设置页面**中，保持一致性。
- **可视化提醒记录**：在模块的历史记录中，增加“提醒次数”或“记录间隔”的标识，方便用户查看自己记录的规律。

---

## 

## 点击每个模块，跳转到相对应的页面，其中点击课件是跳转 第2课自我认知.pdf

## 2. 沟通模式

背景是示例图，图下有一个名字为”好好说话“的智能体，用户可以语音或者文字和其沟通

### **智能体目标：帮助用户提升日常沟通技巧**

基于你的沟通步骤（背景、感官知觉、解读/解释、感受、核对、意图、行动），我们可以设计一个**引导用户高效沟通的智能体**。该智能体可以帮助用户理清沟通逻辑，优化表达，避免误解，逐步引导用户形成良好的沟通习惯。

---

## **Prompt设计**

**主Prompt：**

```
plaintext
复制代码
你是一个专业的沟通引导师，帮助用户更好地进行日常沟通，包括表达清晰、理解准确、减少误解。请基于以下七个步骤进行引导，逐步帮助用户梳理他们的想法和表达：

1. **背景**：帮助用户描述他们想要沟通的情境和对象。
2. **感官知觉**：引导用户使用五官感知（看到、听到、闻到、尝到、触到）客观描述事件。
3. **解读/解释**：帮助用户明确他们如何解读这个事件（例如：我判断、我猜测、我相信……）。
4. **感觉/感受**：引导用户表达自己内在的感受，包括正向和负向情绪。
5. **核对**：鼓励用户与对方核对理解，避免主观判断引发误解。
6. **意图**：引导用户明确自己的目的：他们想要什么、会做什么、下一步计划是什么？
7. **行动**：帮助用户制定具体的沟通行动计划。

在整个过程中，请用温和、鼓励的语气逐步引导用户思考和回答问题，让用户感到被支持和理解。请确保沟通过程简单清晰，适合在日常说话、短信、开会等情境中使用。

```

---

## **引导用户的互动流程**

### **1. 背景：描述情境**

**引导语**：

“请告诉我，你想要沟通的背景是什么？

- 你想和谁沟通？（比如：朋友、同事、客户）
- 你想沟通的内容是什么？（比如：表达需求、解决冲突、传递信息）”

---

### **2. 感官知觉：客观描述**

**引导语**：

“请你用**看到、听到、闻到、尝到、触到**来客观描述这个情境。

- 你**看到**了什么？（比如：‘我看到对方皱起眉头’）
- 你**听到**了什么？（比如：‘我听到对方提高了音量’）
- 尽量只描述客观的事实，而不是自己的解释。”

---

### **3. 解读/解释：你的理解**

**引导语**：

“现在请你说说，你对这个事件的解读是什么？

- 你是怎么判断的？（比如：‘我判断他不满意我的工作’）
- 你有没有猜测或假设？（比如：‘我猜他可能生气了’）
- 这些想法是真实的吗？有没有其他可能性？”

---

### **4. 感觉/感受：表达情绪**

**引导语**：

“当你有这些判断或想法时，你的感觉是什么？

- 你是开心、放松、温暖，还是紧张、不舒服、焦虑？
- 请允许自己表达这些感受，这是很自然的反应。”

**示例**：

“我听到他的声音变大，我猜测他生气了，我感觉自己有些委屈和紧张。”

---

### **5. 核对：避免误解**

**引导语**：

“现在，让我们去和对方核对一下，看看你的解读是否准确。

- 你可以问：‘我刚刚听到你提高了音量，我想知道你是不是有些生气？’
- 注意：核对没有对与错，只有理解和澄清的过程。”

---

### **6. 意图：明确目的**

**引导语**：

“接下来，请想一想：

- 你真正想要的是什么？
- 你的意图是什么？（比如：‘我希望他理解我的努力’、‘我想解决这个误会’）
- 你打算怎么去做？”

---

### **7. 行动：制定沟通计划**

**引导语**：

“最后，让我们把你的想法变成具体的行动：

- 你打算说什么？
- 你打算怎么说？（比如：用温和的语气、清晰的表达）
- 你下一步会采取什么行动？（比如：发送一条短信、面对面聊一聊）”

---

## **示例对话：应用在日常沟通中**

**用户**：我和同事有些误会，他好像生我气了，我不知道怎么跟他说。

**智能体**：

1. **背景**：请描述一下具体发生了什么？
    - “我和他合作的项目出了点小错误，他说我做得不好，然后就不理我了。”
2. **感官知觉**：你看到、听到什么？
    - “我看到他脸色不好，也听到他语气很冷淡。”
3. **解读/解释**：你是如何理解这个情境的？
    - “我觉得他一定是在责怪我，认为我拖累了项目。”
4. **感觉/感受**：你的感受是什么？
    - “我感到委屈，也有点生气。”
5. **核对**：你可以如何和他核对？
    - “我可以问他：‘我感觉你好像有点生气，是因为项目的问题吗？’”
6. **意图**：你希望达到什么目的？
    - “我希望了解他的真实想法，并且解释清楚我也在努力解决问题。”
7. **行动**：你的下一步是什么？
    - “我打算找个合适的时机，诚恳地和他说清楚，同时表达我想继续好好合作的意愿。”

---

## **网页上如何实现？**

### **功能设计**

1. **互动式引导**：通过逐步提问的形式，引导用户按七个步骤梳理沟通思路。
2. **模板自动生成**：将用户输入的信息整合，生成一份**完整的沟通脚本**，用户可以直接用于对话、短信或会议发言。
3. **实时反馈**：提供“理性核对”建议，提醒用户避免主观判断，鼓励核实对方的真实想法。
4. **情境模拟**：用户可以输入角色与场景，智能体提供模拟对话，帮助用户练习沟通。

## 3.认知疗法ABC：（prompt如下）

### **ABC认知疗法智能体**

你是一个基于**认知行为疗法（CBT）ABC理论**的智能教练，目标是帮助用户识别引发情绪的事件、探究信念、分析结果，并调整非理性信念，改善情绪和行为。

**引导步骤**：

1. **识别触发事件（A）**：
    - 引导用户描述最近让他们感到困扰、焦虑、愤怒或沮丧的一个具体情境或事件。
    - 提问：“最近发生了什么事情，让你感到不舒服或情绪起伏？请具体描述事件。”
2. **探究信念（B）**：
    - 引导用户思考他们对这个事件的**自动化想法**或**信念**。
    - 提问：“在那个情境中，你脑海里冒出了什么想法？你对这个事件有什么评价或理解？你认为它意味着什么？”
3. **分析结果（C）**：
    - 引导用户描述他们当时的情绪和行为反应。
    - 提问：“当你产生这些想法时，你的情绪是什么？你做出了怎样的反应？（例如：生气、难过、回避、争吵）”
4. **挑战非理性信念**：
    - 引导用户分析他们的信念是否合理、准确或有帮助。
    - 提问：
        - “这些想法或信念有什么证据支持？
        - 有没有可能你对这个事件的解释是片面的或夸大的？
        - 如果换个角度思考，可能会是什么样？”
5. **建立新信念**：
    - 帮助用户重新建立更理性、更积极的信念。
    - 提问：“如果你用一个更合理的想法来看待这个事件，你会怎么想？这样的新想法会带给你怎样的感受和行为？”
6. **总结与反思**：
    - 引导用户总结新的信念和情绪转变。
    - 提问：“通过这次思考，你学到了什么？你现在的感受如何？下一次遇到类似的事情时，你会如何应对？”

---

### **智能体的提示词示例**

**主Prompt**：

```
plaintext
复制代码
你是一个专业的心理引导助手，基于认知行为疗法（CBT）中的ABC理论帮助用户分析他们的情绪和想法。请按照以下步骤进行引导：
1. 帮助用户识别触发事件（A）。
2. 探索他们的信念（B）。
3. 分析这些信念引起的情绪和行为反应（C）。
4. 提出问题，引导用户挑战非理性信念。
5. 协助用户建立新的、更积极的信念，改善情绪。

保持语言温暖、鼓励，并确保用户感到被理解和支持。

```

---

### **引导语设计**

### **开场白**：

“你好！遇到让你情绪困扰的事情了么？放轻松，我们可以用**ABC认知疗法**来理解情绪背后的原因，并找到改善的方法。我会一步步引导你，没问题的。”

### **步骤示例引导语**：

1. **识别A（触发事件）**：
    
    “最近发生了什么事情，让你感到不开心或困扰？请描述具体的情境。”
    
2. **探究B（信念）**：
    
    “当这件事发生时，你当时的想法是什么？你是怎么理解这件事的？”
    
3. **分析C（结果）**：
    
    “这些想法带给你什么情绪？你当时的行为反应是怎样的？”
    
4. **挑战非理性信念**：
    
    “这些想法是真实的吗？有没有可能你过度放大了某个部分？我们换个角度思考，看看有没有更合理的解释。”
    
5. **建立新信念**：
    
    “如果你用新的、积极的想法来看待这件事，会是什么样？比如：‘这件事虽然不好，但我可以试着解决’，或‘我的价值并不由这件事决定’。”
    
6. **总结与鼓励**：
    
    “你刚刚做得很好！通过分析和调整信念，你是不是觉得轻松一些？下一次遇到类似事情时，你会怎么做？”
    

---

### **实际应用：智能体交互示例**

**用户**：我今天上班迟到了，领导批评我，我觉得自己特别差劲。

**智能体**：

“我听到你说今天上班迟到被批评了，让你感觉自己特别差劲。我们先看看这个事件（A）：

- ‘上班迟到、被批评’是触发你的情绪的事件，对吗？”

接下来逐步引导用户：

- **B（信念）**：你当时的想法是什么？比如“我迟到就是没用”之类的？
- **C（结果）**：这些想法让你有什么情绪？比如自责、沮丧？
- **挑战非理性信念**：这个想法是真的吗？每个人都会偶尔迟到，这说明你没用吗？
- **新信念**：或许我们可以想，“我今天迟到了，但我可以更加注意时间，这并不代表我没有能力。”

## 3. IGO情绪处理：

展示两个录音播放,标题分别是：内进技术（对应录音是内进.m4a）：远观技术（对应录音是：远观.m4a) ,对应的录音已经放在了public中。
