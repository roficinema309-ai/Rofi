ROFI STUDIO — MASTER PROJECT SPECIFICATION

1. هوية المشروع

اسم المنصة الرسمي:

ROFI Studio

منصة احترافية لإنشاء محتوى فيديو بالذكاء الاصطناعي، موجهة لصناعة:

1. ROFI Ads — صناعة الإعلانات التجارية الاحترافية.
2. ROFI Cinema — صناعة القصص والأفلام والمسلسلات والفيديوهات السينمائية والدرامية.

المنصة يجب أن تبدو كمنتج SaaS عالمي احترافي، وليس كواجهة AI بسيطة.

الهوية البصرية:

- Premium
- Cinematic
- Modern
- Institutional
- Elegant
- Dark luxury interface
- واجهة عربية وإنجليزية
- دعم RTL بشكل كامل
- تجربة استخدام سهلة رغم قوة الأدوات
- عدم إغراق المستخدم بعشرات الخيارات غير الضرورية
- التركيز على جودة النتيجة النهائية

---

2. القاعدة الأساسية للمشروع

لا تقم بإعادة بناء المشروع من الصفر إذا كان هناك كود أو مكونات أو صفحات موجودة بالفعل.

يجب:

- الحفاظ على كل ما تم بناؤه.
- الحفاظ على الحسابات.
- الحفاظ على المشاريع.
- الحفاظ على Credits.
- الحفاظ على إعدادات Owner.
- الحفاظ على الـDashboard.
- الحفاظ على ROFI Director.
- الحفاظ على ROFI Image Engine.
- الحفاظ على ROFI Islamic Content Guard.
- الحفاظ على أي نظام موجود حاليًا.
- إضافة الميزات الجديدة بطريقة Modular.
- عدم حذف ميزة موجودة إلا إذا كان هناك سبب تقني واضح وموافقة صريحة.

أي تعديل يجب أن يكون Incremental وليس destructive.

---

3. بنية المنصة الرئيسية

بعد تسجيل الدخول يظهر للمستخدم:

ROFI Studio Dashboard

يتكون النظام الأساسي من:

A — ROFI Ads

قسم صناعة الإعلانات.

B — ROFI Cinema

قسم صناعة الفيديوهات السينمائية والقصص والمسلسلات.

C — ROFI Image Engine

مولد الصور والمراجع البصرية.

D — ROFI Director

العقل الإبداعي الذي يساعد المستخدم على تحويل الفكرة إلى مشروع فيديو كامل.

E — Projects

جميع المشاريع السابقة.

F — Assets

الصور والفيديوهات والصوتيات والملفات المستخدمة.

G — Credits

رصيد المستخدم واستهلاكه.

H — Settings

الإعدادات والحساب واللغة وغيرها.

I — Owner/Admin

قسم خاص بالمالك فقط.

---

4. أهم قاعدة مالية

المالك يجب أن يستطيع استخدام المنصة داخليًا بشكل مجاني.

Owner:

- لا يحتاج Subscription.
- لا يحتاج شراء Credits.
- يمتلك صلاحيات واسعة.
- يستطيع تجربة جميع أجزاء النظام.
- يستطيع إنشاء عدد كبير من المشاريع حسب حدود البنية التقنية.
- يستطيع اختبار جميع المحركات.

لكن هذا لا يعني أن API الخارجية مجانية.

يجب فصل:

OWNER ACCESS

عن

API COST

بحيث تكون تجربة المالك مجانية من ناحية نظام الاشتراك الداخلي، بينما تكاليف خدمات الذكاء الاصطناعي يتم التحكم بها من الـBackend.

لا يتم تفعيل أي API مدفوع أو خدمة خارجية أو اشتراك مدفوع تلقائيًا.

أي Integration مدفوع يجب أن يكون:

- Configurable
- Disabled by default إذا لم تتم إضافة المفاتيح
- موضحًا داخل إعدادات Owner
- قابلًا للتشغيل أو الإيقاف

---

5. ROFI ADS

الهدف

إنشاء إعلانات تجارية احترافية من البداية حتى الفيديو النهائي.

المستخدم يستطيع اختيار:

نوع الإعلان

- Product Advertisement
- Brand Advertisement
- Social Media Ad
- UGC-style Ad
- Cinematic Commercial
- Luxury Commercial
- Fashion Commercial
- Food Commercial
- Technology Commercial
- Automotive Commercial
- Real Estate Commercial
- App Promotion
- Service Advertisement
- Short Promotional Video
- Story-based Advertisement

---

6. طرق إنشاء الإعلان

يجب توفير ثلاثة أوضاع:

AUTO MODE

المستخدم يدخل:

- المنتج
- اسم العلامة
- وصف بسيط
- الجمهور المستهدف
- المنصة

والنظام يتولى:

Concept
→ Creative Direction
→ Script
→ Scenes
→ Shot List
→ Camera Directions
→ Visual Style
→ Voice
→ Music Direction
→ Final Video

---

DIRECTOR MODE

وضع احترافي للمستخدم الذي يريد التحكم الإبداعي.

ROFI Director يقوم بإنشاء:

- Creative Concept
- Story
- Script
- Scene Breakdown
- Shot List
- Camera Movement
- Lens Suggestions
- Lighting
- Environment
- Character Direction
- Product Placement
- Transition
- Sound Design
- Voice-over
- Music Direction

ثم يستطيع المستخدم تعديل كل مرحلة قبل الانتقال للمرحلة التالية.

---

PROMPT MODE

المستخدم يكتب Prompt مباشر.

النظام يحوله إلى Prompt احترافي Production-ready.

يجب تحسين الـPrompt تلقائيًا مع الحفاظ على نية المستخدم.

---

7. ROFI CINEMA

هذا قسم مستقل وليس مجرد نسخة من قسم الإعلانات.

الهدف:

إنشاء:

- أفلام قصيرة
- قصص قصيرة
- مسلسلات
- حلقات
- مشاهد درامية
- أفلام سينمائية قصيرة
- أفلام رعب
- أفلام غموض
- أكشن
- دراما
- Fantasy
- Sci-Fi
- Thriller
- Historical Fiction
- Adventure
- Social Drama
- Inspirational Stories

---

8. ROFI CINEMA — Creative Workflow

يجب أن يكون النظام قادرًا على تحويل:

IDEA

إلى:

CONCEPT
↓
CHARACTERS
↓
WORLD BUILDING
↓
STORY
↓
EPISODE STRUCTURE
↓
SCREENPLAY
↓
SCENES
↓
SHOT LIST
↓
STORYBOARD
↓
IMAGE REFERENCES
↓
VIDEO GENERATION
↓
VOICE
↓
SOUND DESIGN
↓
MUSIC
↓
EDIT
↓
FINAL CINEMATIC VIDEO

---

9. STORY GENERATOR

يستطيع المستخدم كتابة فكرة بسيطة مثل:

"شاب يعود إلى مدينته بعد سنوات ويكتشف سرًا غامضًا."

ROFI Director يجب أن يستطيع تحويلها إلى مشروع كامل.

يقوم بإنشاء:

- Title
- Logline
- Genre
- Theme
- Characters
- Character Profiles
- Locations
- Time Period
- Story Arc
- Beginning
- Conflict
- Climax
- Resolution
- Scene List
- Dialogue
- Cinematic Direction

---

10. SERIES MODE

يجب دعم إنشاء مسلسل.

المستخدم يحدد:

- اسم المسلسل
- النوع
- عدد الحلقات
- مدة الحلقة
- الشخصيات
- الأسلوب البصري

ثم يقوم النظام بإنشاء:

Season
→ Episodes
→ Episode Story
→ Scenes
→ Shots

مع الحفاظ على:

Character Consistency

الشخصية يجب أن تحافظ على:

- الشكل
- الملابس
- العمر التقريبي
- الشعر
- الألوان
- السمات البصرية

عبر المشاهد والحلقات.

---

11. CINEMATIC SCENE BUILDER

كل مشهد يجب أن يحتوي على:

Scene Number

Location

Time

Characters

Action

Dialogue

Emotion

Camera Shot

Camera Movement

Lens / Framing

Lighting

Environment

Atmosphere

Sound

Music

Transition

Negative Prompt / Constraints

---

12. VIDEO GENERATION

يجب بناء Video Engine بطريقة Modular.

لا تربط المنصة بمحرك واحد بشكل Hard-coded.

استخدم:

MODEL ROUTER

بحيث يمكن مستقبلاً إضافة:

Video Provider A
Video Provider B
Video Provider C

بدون إعادة بناء المنصة.

الـBackend هو المسؤول عن اختيار المحرك.

الواجهة لا تحتوي على API Keys.

---

13. مدة الفيديو

يجب دعم الفيديوهات القصيرة والطويلة حسب قدرة المحرك المستخدم.

الواجهة تدعم خيارات مثل:

5 sec
10 sec
15 sec
30 sec
60 sec

وعند إنتاج مشروع سينمائي طويل يتم تقسيمه تلقائيًا إلى Shots/Clips ثم تجميعها.

---

14. VIDEO FORMATS

دعم:

9:16

16:9

1:1

4:5

وغيرها حسب الحاجة.

Preset:

TikTok
Instagram Reels
YouTube Shorts
YouTube
Facebook
Instagram Feed
Cinema
Custom

---

15. CINEMATIC CONTROLS

يجب توفير تحكم احترافي في:

Camera

- Wide Shot
- Medium Shot
- Close Up
- Extreme Close Up
- Over Shoulder
- POV
- Tracking
- Dolly
- Crane
- Pan
- Tilt
- Push In
- Pull Out
- Orbit

Lighting

- Soft
- Hard
- Dramatic
- Golden Hour
- Night
- Neon
- Studio
- High Contrast
- Low Key

Visual Style

- Cinematic
- Photorealistic
- Film
- TV Drama
- Documentary
- Luxury
- Dark
- Warm
- Cold
- Epic

---

16. CHARACTER SYSTEM

يجب إنشاء Character Reference System.

عند إنشاء شخصية:

Character ID

ويتم حفظ:

- Reference Image
- Description
- Clothing
- Physical appearance
- Hair
- Accessories
- Personality
- Voice profile
- Style

ثم تستخدم الشخصية في جميع المشاهد.

الهدف الأساسي:

CONSISTENCY.

---

17. PRODUCT REFERENCE SYSTEM

في ROFI Ads يستطيع المستخدم رفع:

- Product Image
- Logo
- Brand Image
- Reference Image

ويجب الحفاظ على شكل المنتج وعدم تغييره بشكل غير مقصود.

---

18. IMAGE ENGINE

ROFI Image Engine يجب أن يستطيع إنشاء:

- Product shots
- Characters
- Locations
- Storyboards
- Posters
- Thumbnails
- Cinematic Frames
- Concept Art

مع دعم Reference Images.

---

19. STORYBOARD

قبل إنشاء الفيديو النهائي، يجب توفير Storyboard.

كل Shot يظهر كـCard:

Shot 01
Shot 02
Shot 03
...

مع:

Image
Duration
Camera
Action
Dialogue
Sound

ويمكن للمستخدم:

- Edit
- Regenerate
- Delete
- Reorder

---

20. VIDEO TIMELINE

يجب إنشاء Timeline احترافي قدر الإمكان.

المستخدم يستطيع:

- ترتيب المشاهد
- قص المقاطع
- تغيير المدة
- إضافة Voice
- إضافة Music
- إضافة SFX
- إضافة Text
- إضافة Transitions

---

21. VOICE SYSTEM

دعم:

- Male
- Female
- Narrator
- Character voices

مع إمكانية اختيار اللغة واللهجة حسب الخدمات المتاحة.

لا يتم تشغيل خدمة صوت مدفوعة دون API Key/configuration من Owner.

---

22. SOUND DESIGN

دعم:

- Background Music
- Ambient Sound
- Sound Effects
- Cinematic Hits
- Whoosh
- Footsteps
- Environment

مع إمكانية التحكم في مستويات الصوت.

---

23. EXPORT

يجب أن يستطيع المستخدم:

Preview

ثم:

Export

حسب الإمكانيات المتاحة.

يجب إظهار:

Rendering
Processing
Completed
Failed

مع معالجة الأخطاء بشكل واضح.

---

24. ROFI ISLAMIC CONTENT GUARD

يجب الحفاظ على:

ROFI Islamic Content Guard

وظيفته فحص المحتوى قبل التوليد.

يجب منع أو تحذير المستخدم من المحتوى غير المناسب وفق قواعد المنصة، خصوصًا:

- المحتوى الإباحي
- العري
- المحتوى الجنسي الصريح
- المحتوى الفاضح
- المحتوى المخالف للآداب
- المحتوى غير الملائم للأطفال
- أي محتوى محظور وفق سياسة المنصة

يجب أن يعمل النظام قبل إرسال الطلب إلى محرك التوليد قدر الإمكان.

ويجب أن يكون القرار واضحًا للمستخدم.

---

25. OWNER DASHBOARD

يجب أن يحتوي Owner Dashboard على:

Users

Subscriptions

Credits

Projects

Generations

API Providers

API Usage

Errors

System Health

Moderation

Content Guard

Settings

Feature Flags

---

26. API MANAGEMENT

يجب عدم وضع API Keys في Frontend.

يجب استخدام:

Backend / Server-side functions

وEnvironment Variables.

أمثلة:

VIDEO_API_KEY

IMAGE_API_KEY

VOICE_API_KEY

DATABASE_URL

AUTH_SECRET

---

27. SECURITY

يجب:

- حماية API Keys.
- عدم إرسال Secrets إلى Frontend.
- التحقق من صلاحيات المستخدم Server-side.
- التحقق من Owner Role Server-side.
- حماية Routes.
- Rate Limiting.
- Input Validation.
- File Validation.
- حماية Uploads.
- حماية API Endpoints.

---

28. CREDITS SYSTEM

يجب وجود Credits.

كل Generation يمكن أن يستهلك Credits حسب:

Video duration
Resolution
Model
Voice
Image
Other services

يجب تسجيل:

Generation ID
User ID
Provider
Model
Duration
Cost
Credits Used
Status
Created At

---

29. OWNER CREDIT EXEMPTION

إذا كان المستخدم:

OWNER

فلا يتم خصم Credits منه بالطريقة المعتادة.

لكن يجب تسجيل الاستخدام الداخلي لأغراض:

Analytics
Cost Tracking
Monitoring

---

30. SUBSCRIPTION ARCHITECTURE

المستخدم العادي:

Free / Paid Plans

لكن لا يتم ربط المنصة بمزود دفع محدد بطريقة يصعب تغييرها.

استخدم Payment Abstraction Layer.

حتى يمكن إضافة مزود دفع مستقبلًا.

---

31. UI / UX

الواجهة يجب أن تكون:

Premium.

التصميم:

Dark luxury

مع لمسات ذهبية راقية بدون مبالغة.

Sidebar

Dashboard

Cards

Project Workspace

Professional Editor

Responsive Design.

---

32. MOBILE

يجب أن تعمل المنصة جيدًا على:

Android

Tablet

Chromebook

Desktop

لا تفترض أن المستخدم لديه PC قوي.

---

33. ARABIC / ENGLISH

دعم كامل:

Arabic RTL

English LTR

يجب ألا تكون الترجمة مجرد ترجمة نصوص.

يجب أن يتغير Layout direction بشكل صحيح.

---

34. PROJECT MANAGEMENT

كل مشروع يحتوي على:

Project ID

Owner

Type

Ads / Cinema

Title

Status

Created At

Updated At

Assets

Scenes

Generations

Exports

---

35. AUTOSAVE

كل تعديل مهم يجب حفظه تلقائيًا.

يجب منع فقدان المشروع عند:

Refresh
Browser Close
Network Error

قدر الإمكان.

---

36. ERROR HANDLING

لا تعرض للمستخدم:

Raw API Errors
Stack traces
Internal secrets

بدلًا من ذلك:

"تعذر إنشاء الفيديو حاليًا. حاول مرة أخرى."

مع تسجيل التفاصيل في Server Logs.

---

37. MODEL ROUTER

يجب أن تكون البنية:

ROFI UI
↓
ROFI Backend
↓
Model Router
↓
Selected Provider
↓
Generation
↓
Storage
↓
Project

بدل:

Frontend
↓
Provider API

---

38. PROVIDER ABSTRACTION

يجب أن يكون لكل مزود Adapter مستقل.

مثال:

/providers/video/providerA
/providers/video/providerB
/providers/image/providerA
/providers/voice/providerA

وبذلك يمكن تبديل المحرك دون تغيير الـUI.

---

39. DATABASE

استخدم Database Architecture مناسبة للمشروع.

يجب تصميم الجداول/collections بشكل واضح لـ:

users

profiles

projects

scenes

shots

characters

assets

generations

credits

subscriptions

providers

usage_logs

settings

moderation_logs

---

40. FILE STORAGE

الملفات الكبيرة يجب ألا يتم تخزينها داخل GitHub.

GitHub يستخدم للكود.

Storage يستخدم للـ:

Images
Videos
Audio
Project Assets

---

41. GITHUB

يجب أن يكون المشروع:

Clean Repository

مع:

README.md

.env.example

.gitignore

Documentation

Clear folder structure

No secrets

No API keys

No unnecessary generated files

---

42. VERCEL

يجب أن يكون المشروع متوافقًا مع Vercel.

يجب عدم الاعتماد على:

Local filesystem persistence

أو أي شيء غير مناسب للـserverless architecture.

استخدم الخدمات الخارجية المناسبة للتخزين وقاعدة البيانات عند الحاجة.

Environment Variables يتم ضبطها من Vercel Project Settings.

---

43. DEVELOPMENT WORKFLOW

قبل إضافة أي Feature:

1. Inspect existing code.
2. Identify reusable components.
3. Do not duplicate systems.
4. Implement feature.
5. Run lint.
6. Run type check.
7. Run build.
8. Fix all errors.
9. Test affected pages.
10. Commit changes.

---

44. IMPORTANT — DO NOT BREAK EXISTING FEATURES

قبل أي تعديل:

راجع:

- Authentication
- Owner system
- Credits
- Projects
- Dashboard
- ROFI Director
- ROFI Image Engine
- Islamic Content Guard
- Existing UI
- Existing database
- Existing integrations

ثم أضف التعديل.

---

45. NO PLACEHOLDER PRODUCT

لا أريد:

Fake buttons
Fake generation
Fake API calls
Fake success messages

إذا كانت خدمة غير موصلة بعد:

يجب أن تكون الحالة واضحة:

"Provider not configured"

وليس:

"Video generated"

---

46. FREE OWNER EXPERIENCE

يجب أن يكون Owner قادرًا على الدخول وتجربة:

ROFI Ads

ROFI Cinema

ROFI Director

ROFI Image Engine

Storyboard

Characters

Projects

Editor

كل ذلك من خلال Owner Mode بدون اشتراك داخلي.

---

47. OWNER CONTROL CENTER

إضافة:

Provider Enable/Disable

Model Selection

Default Model

Credit Cost

Maximum Duration

Allowed Resolutions

Content Guard

Maintenance Mode

Feature Flags

---

48. FEATURE FLAGS

استخدم Feature Flags حتى يمكن تشغيل وإيقاف:

Ads

Cinema

Image Engine

Video Engine

Voice

Music

Cinema Series

Character Consistency

Islamic Guard

---

49. PERFORMANCE

يجب:

- Lazy load للمكونات الثقيلة.
- ضغط الصور.
- Pagination.
- عدم تحميل جميع المشاريع مرة واحدة.
- Cache عند الحاجة.
- Background jobs للعمليات الطويلة.
- Polling/WebSocket مناسب لحالة Rendering.

---

50. RESPONSIVE DASHBOARD

Desktop:

Sidebar + Workspace

Tablet:

Collapsible Sidebar

Mobile:

Bottom Navigation أو Sidebar Drawer

---

51. MAIN USER EXPERIENCE

عند دخول المستخدم:

Welcome to ROFI Studio

ثم:

"What do you want to create?"

خيارات كبيرة:

🎬 Create Cinema
📢 Create Ad
🧠 ROFI Director
🖼 Create Image

---

52. ADS WORKFLOW UI

Create Ad

↓

Choose Mode

Auto
Director
Prompt

↓

Upload Product

↓

Choose Platform

↓

Choose Format

↓

Choose Duration

↓

Generate Concept

↓

Approve

↓

Generate Script

↓

Approve

↓

Generate Storyboard

↓

Approve

↓

Generate Video

↓

Edit

↓

Export

---

53. CINEMA WORKFLOW UI

Create Cinema

↓

Choose:

Short Film
Series
Episode
Scene

↓

Idea

↓

ROFI Director

↓

Characters

↓

World

↓

Story

↓

Script

↓

Scenes

↓

Storyboard

↓

Generate Shots

↓

Assemble

↓

Voice + Music + SFX

↓

Edit

↓

Final Cinematic Video

---

54. CONTINUITY ENGINE

ROFI Cinema يجب أن يحافظ على continuity:

Character

Location

Props

Lighting

Time

Costume

Camera style

Color treatment

Story state

---

55. REGENERATION

إذا لم تعجب المستخدم نتيجة Shot:

Regenerate Shot

وليس:

Regenerate Entire Project.

---

56. VERSIONING

يجب حفظ:

Version 1
Version 2
Version 3

حتى يستطيع المستخدم الرجوع إلى نسخة سابقة.

---

57. PROJECT DUPLICATION

زر:

Duplicate Project

لإنشاء نسخة مستقلة من المشروع.

---

58. BRAND KIT

ROFI Ads يجب أن يدعم:

Logo

Brand Colors

Fonts

Product Images

Brand Voice

Style

ثم تستخدم تلقائيًا في المشاريع.

---

59. SOCIAL MEDIA PRESETS

إضافة Presets جاهزة:

TikTok

Instagram Reels

YouTube Shorts

Facebook

Instagram

YouTube

---

60. QUALITY PRIORITY

الأولوية:

1. جودة الفيديو.
2. ثبات الشخصيات والمنتجات.
3. جودة السيناريو.
4. جودة الـStoryboard.
5. جودة الإخراج السينمائي.
6. سرعة مناسبة.
7. تجربة المستخدم.

لا تضحي بالجودة لمجرد تقليل عدد الخيارات.

---

61. FINAL ARCHITECTURE

ROFI STUDIO

├── Dashboard
│
├── ROFI ADS
│   ├── Auto
│   ├── Director
│   ├── Prompt
│   ├── Product
│   ├── Script
│   ├── Storyboard
│   ├── Video
│   └── Editor
│
├── ROFI CINEMA
│   ├── Short Film
│   ├── Series
│   ├── Episodes
│   ├── Characters
│   ├── World Building
│   ├── Script
│   ├── Scenes
│   ├── Storyboard
│   ├── Shots
│   ├── Video
│   └── Editor
│
├── ROFI DIRECTOR
│
├── ROFI IMAGE ENGINE
│
├── PROJECTS
│
├── ASSETS
│
├── CREDITS
│
├── SUBSCRIPTION
│
├── SETTINGS
│
└── OWNER CONTROL CENTER

---

62. MOST IMPORTANT DEVELOPMENT RULE

Do not implement everything in one giant change.

Build incrementally.

First:

Audit existing project.

Second:

Fix architecture.

Third:

Complete ROFI Ads.

Fourth:

Build ROFI Cinema.

Fifth:

Connect Video Engine.

Sixth:

Connect Image Engine.

Seventh:

Connect Voice/Music.

Eighth:

Complete Editor.

Ninth:

Security.

Tenth:

Testing.

Eleventh:

Production deployment.

---

63. CURRENT TASK

The current task is NOT to redesign the entire project blindly.

First inspect the existing GitHub codebase.

Determine:

- Framework
- Folder structure
- Existing pages
- Existing components
- Authentication
- Database
- Storage
- APIs
- Existing Owner system
- Existing Credits system
- Existing ROFI Director
- Existing Image Engine
- Existing Islamic Content Guard

Then produce a concise implementation plan.

After the audit, implement the next missing feature without breaking existing functionality.

---

64. FINAL PRINCIPLE

ROFI Studio يجب أن يشعر للمستخدم وكأنه:

"AI Creative Studio"

وليس:

"AI Generator Website".

المنصة يجب أن تكون قابلة للتوسع مستقبلًا إلى:

Advertising Studio
Cinema Studio
AI Film Production
AI Series Production
AI Creative Agency Platform

مع الحفاظ على بنية تقنية Modular وقابلة لإضافة نماذج ومزودين جدد بدون إعادة بناء المشروع بالكامل.
