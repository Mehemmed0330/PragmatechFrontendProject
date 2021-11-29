# Araşdırma 1

## Suallar və cavablar

1. h1-h6,div,a,button,ul,li,section,img,span default css properties hansı default xüsusiyyətləri var?

- (h1-h6 tag) h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }
  h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold
  }
  h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }
  h4 {
  display: block;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }
  h5 {
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }
  h6 {
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }
- (div tag) display: block;

- (a tag) CSS-də display: block kimi təmsil olunan axın elementləri və ya hər hansı digər elementləri ehtiva edən bir <a> elementə üslub tətbiq edirsinizsə, <a> özünü blok və ya inline blok kimi uyğun bir blok konteyner tipinə təyin etməlisiniz. planının nəzərdə tutulduğu kimi işləməsi üçün.

- (button tag) type = submit|button|reset [CI]
- Bu xüsusiyyət düymənin növünü bildirir.Göndər düyməsini yaradır. Varsayılan dəyər budur.

- (ul tag) display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;

- (li tag) display: list-item;

- (section tag) dispay: blog;

- (img tag) display: inline-block;

- (span tag) .None

2.  CSS ölçüləndirmə vahidləri hansılardır? İstifadə yerləri nələrdir?

- em - Elementin şrift ölçüsünə nisbəti (2em cari şriftin 2 dəfə böyüklüyü deməkdir) paraqraf sətirləri arasında məsafə
- cm - santimetr
- in -inches (1in = 96px = 2.54cm)
- mm -millimetr
- pc -picas (1pc = 12 pt)
- pt -points (1pt = 1/72 of 1in)
- px -pixels (1px = 1/96th of 1in)

# JavaScript Interview Question and Answer

## 1. Typescript nədir?

Typescript 2012-ci ildə Microsoft tərəfindən qurulmuş və dəstəklən proqramlaşdırma dilidir.Paradigma göstəriciləri: Functional,Object Orianted,Imperative - olmasıdır.
Typescriptdə olan kod sintaksisi Javascriptlə eynidir və daha da artığığır.Proqramlaşdırma zamanı Typescriptdə yazılan kodlar .![Javascriptə çevrilir](https://www.tnado.com/includes/medias/2018/11/tnado-seo-cms-blog-typescript-javascript.png).
Javascript -ə aid olan özəlliklər Typescript -də var.Ancaq Typescript -ə aid olan özəlliklər Javascript -də yoxdu.Typescript Javascript -in genişləndirilmiş versionudu.Və hər Javascrit kodu bir Typescript kodudur.Ancaq o kodlar yığılıb işlədilməyi müddətdə Javascript kodu yox Typescript kodudur.Typescript -i asanlıqla yazmaq üçün Javascript -i bilmək vacibdir.
TypeScript Javascript -in bütün kitabxanalarında , framework -lərində işləyir.
Javascript interpreted bir dildir yəni kodda yanlış hissə olduqda kodun yoxlanılmasını dayandırır və ümumi kodda düzgün hissə də olsa belə o hissəni göstərmir.Ancaq Typescript kodu işə salmadan səhvi yoxlayır və o səhv üçün bir həll yolu verir.![Şəkilə baxsaq](https://i.stack.imgur.com/j0LJT.png).
Typescript yuxarıda da yazdığımız kimi obyekt yönlü dildir və bu bizə proqramlaşdırmada mirasalma, modulyar və.s kimi özəlliklərlə işləməyə imkan verir.Əksər obyekt yönümlü dillər kimi, TypeScript-də də istifadəçilərə öz növlərini təyin etməyə imkan verən interfeyslər var. İnterfeyslər obyektin malik olduğu xassələri, o xassələrlə əlaqəli tipləri təyin edir. TypeScript interfeysləri əlavə xüsusiyyətlərə malik ola bilər.
Typescript types.
Bu proqramlaşdırma dilində Javascript -ə uyğun olaraq type yaxınlığı var ancaq fərqliliklər də var:Numbers,String,Boolean,Array,Object,Enum,Any-dir.
Javascript-dən fərqli olaraq Enum və Any dəyişən var.
Enum -C#-ın dəyişəninə bənzəyən bu növ rəqəmsal dəyərlər ardıcıllığına insan tərəfindən oxuna bilən adlar təyin etməyə imkan verir.
Any -dəyərlə başa çatacağını əvvəlcədən bilmirik - o, öz dəyərlərini, məsələn, istifadəçi girişindən və ya üçüncü tərəf kitabxanasından götürə bilər.
TypeScript class
Obyekt yönümlü proqramlaşdırmada class funksionallığı miras alır və öz növbəsində obyektlərin tikinti blokları rolunu oynayır. 2015 -ci ilə qədər Javascript class məntiqindən istifadə etmirdi.Ancaq EcmaScript2015 -də olunan yenilikdən sonra artıq class məntiqi Javascriptdə istifadə olunmağa başladı.Artıq class məntiqi həm Javascript -in həm də Typescript -in bir hissəsi olmuşdu və demək olar ki Javascriptlə Typescript eyni sintaksisi istifadə edirdi.TypeScript kompilyatorunun üstünlüklərindən biri də odur ki, o, JavaScript class -lar ilə kodu 2015-ci ildən əvvəlki standartlara uyğun gələn köhnə JavaScript koduna çevirə bilir.
TypeScript date
Date obyekti əsasən tarixləri illəri ayları günləri və millisaniyələrə qədər anı təmsil edən bütün dəyərləri bildirir.Və Javascript-dədə olduğu kimi konstruktora heç bir arqument ötürməsək avtomatik kompüterin məlumatlarından istifadə edib tarixi ekrana çap edəcək.

## 2.Array içərisindən maksimum və minimum dəyərləri necə tapa bilərik?

Min və Max dəyərlər nədir?
Hər bir proqramçının olmazsa olmaz alışqanlıqların biri alqoritmik probleri həll etmək,bununla kifayətlənməyib hansı ki tapılan həll üsulunu daha da sadələşdirmək o həlli daha qısa üsullara qədər ixtisar etməkdir.Və bizim alqoritmik məsələlərdə əksərən istifadə etdiyimiz məntiqlərdən biri array içində elementlərdən minimumu və maksimumu necə tapılırdır.
Bu mövzuda biz Math.max() və Math.min() -dən danışacağıq.Onların funksiyası array -dəki elementləri detekt edib hansı elementin kiçik ya da böyük olduğunu çap etməkdir.Ancaq array-in içərisində string ya da rəqəmdən fərqli bir dəyişən olarsa nəticədə bizə NaN olaraq çıxaçaq.Yəni bu bir rəqəm deyildir.
Təsviri(Yazılma qaydası və niyə)
Yuxarıda kiçik introdaction verdikdən sonra bir az daha dərinə gedək və nə üçün bu formada yazıldığına baxaq.Göründüyü kimi max() Riyaziyyatın statik metodu olduğundan,biz onu Math.max() kimi istifadə etməliyik.
Funksiya içərisində istifadə olunduqda
Əgər verilən bu dəyərlər function-un içərisində parametr olaraq icra olunursa artıq icra fərqli cür olur.Məsələn:
Bu formada baş verir.Biz artıq function-da parametr kimi verilən arr parametrinin qarşısına Math.(max) içərisində işlətdikdə qarşısına 3 nöqtə qoyuruq.
Method istifadə etmədən ən böyük və ən kiçik elementin tapılması.
Sadə olaraq loop və şərt operatorlarından istifadə edərək ilk öncə döngü içərisinə salırıq daha sonra şərtdə array -in içərisindəki elementlərin şərti olaraq verdiyimiz max -dan böyük olduğunu göstərib bunun əsasında da çıxacaq nəticənin həmin array -in içərisindən bir dəyər olduğunu göstəririk.
Ancaq isbatlanmışdır ki əgər array daxilində milyon element olarsa və hansı üsulla yazılarsa hesablama daha sürətli baş verər deyə yoxlama aparılmışdır.Nəticələr isə çox maraqlıdır.Deməli Es6 ilə proqramlaşdırdıqda 2.214 saniyə müddətində tamamlanır(İlk şəkildəki kimi) və təbii ki başqa yollarla da sınanıb və demək olar ki nəticə olub.Ancaq bir yer istisna.
Burdan belə nəticəyə gəlirik ki massivdəki elementi nə qədər artırsaq hesablama bir o qədər yavaşlayır və bu da nəticə.

## What is the difference between java and javascript?

Həm proqramlaşdırmaya giriş etmək istəyən insanlar həm də ümumiyyətlə texologiyadan uzaq olan insanlar həmişə Java və Javascript -i qarışıq salırlar.Ya da eyni proqramlaşdırma dili zənn edirlər.Yeri gəlmişkən buna misal olaraq GetContact -da mənim adımı "Məhəmməd Java" olaraq qeyd ediblər.Halbuki mən Javascript ilə məşğulam)).İndi isə gəlin fərqləri araşdıraq.Xüsusiyyətlərinə keçməmişdən əvvəl ümumi məlumat verim.

### Javascript

İnternetin ilk 1995-ci ildə Netscape şirkəti tərəfindən, Sun şirkətinin dəstəyi ilə hazırlanmış NN24-də istifadə olunan AD bundan sonra JavaScript adlandırılması ilə açıqlanma verildi. Buna qədər isə bu alqoritmik dil LiveScript adlandırılırdı. Bu gözlənilməz addım kifayət qədər problemlər yaratdı. Beləki, Sun şirkətinin JAVA AD-nə heç bir aiddiyyatı olmayan JavaScript-i JAVA-nın alt-çoxluğu kimi qəbul edənlərin sayı çoxaldı.JavaScript - HTML səhifəyə inteqrasiya olunaraq, bu səhifə ilə istifadəçi arasındakı interfeysə əlavə funksional imkanlar verən alqoritmik dildir.
Təbii ki bir çox framework(Jquery) və library(React.js, Angular.js, Node.js, React Native.js və.s) kimi bir çox növləri vardır.

### Java

Java ilk dəfə olaraq Sun Microsystems tərəfindən 1995-ci ildə proqramlaşdırma dili kimi istifadəyə verilmişdir.Java -nın mahiyyəti çox böyükdür.Belə ki Java yükləmədiyimiz təqdirdə işlədə bilməyəcəyimiz proqramlar çoxdur və bunun sayı hər il getdikcə daha da artır.Java sürətli, təhlükəsiz və güvənilən bir proqramlaşdırma dilidir.Diz üstü kompüterlərdə data bazayada, ən sürətli oyun kompöterlərində, telefonlardan internetə qədər Java demək olar ki hər yerdədir.

### Fərqləri nələrdir?

İlk öncə işlənmə yerlərinə görə baxsaq Java kredit kartı proqramlanması mağazalarda malın qiymətinin hesablanması sisteminin proqramlanması kompüterlər də bir çox proqramlarda və daha çox yerdə istifadə olunur.Javascript web proqramlaşdırma da daha çox istifadə olunur.HTML -də animasya, dinamiklik qurur.Java compiled dildir ancaq Javascript Interpreted.Əsasən Java backend -də istfadə olunur ancaq Javascript frontend -də.Java static Javascript isə dinamkik xüsusiyyətə malikdir.Java müxtəlif proqramlar üçün Javascript isə Web proqramlar üçün nəzərdə tutulmuşdur.

## How do you create an infinite loop?

Proqramlaşdırmanın olmazsa-olmaz parçalarından biri Loop(Döngülər)-dir.Adətən təkrarçılıqdan quratarır, əllə sıralamanı ortadan qaldırır, ümumi olaraq massiv içərisindəki elementləri ortaya çıxarır, onlar üzərində sürətli şəkildə əməliyyat icra etməyə imkan verir və.s . Ancaq bəzən biz loop -dan istifadə etdikdə kiçik yanlışlıq ucbatından döngünü sonsuzluğa salırıq və rəqəmlər sonsuz olaraq artaraq irəliləyir.Bu artım isə kompüterin yavaşlamasına, browserin və kompüterin donmasına gətirib çıxarır.Bu halların qarşısını almaq üçün isə loop -laran xəbərdar olmaq vacibdir.
Sonsuz döngə nə deməkdir?
Sonsuz döngə dayandırma şərtinə tabe olmayan sonsuz olaraq işləməyə davam edən kod parçasıdır.
Sonsuz döngülər necə yaranır onlara nəzər yetirək.
Ən çox yayılmış sonsuz döngələrdən biri while ifadəsinin şərtinin doğru olaraq təyin edilməsidir. Aşağıda əbədi işləyəcək kod nümunəsi verilmişdir.

Sual — 1. Typescript nədir?

Typescript 2012-ci ildə Microsoft tərəfindən qurulmuş və dəstəklən proqramlaşdırma dilidir.Paradigma göstəriciləri: Functional,Object Orianted,Imperative — olmasıdır.
Typescriptdə olan kod sintaksisi Javascriptlə eynidir və daha da artığığır.Proqramlaşdırma zamanı Typescriptdə yazılan kodlar Javascriptə çevrilir.

Javascript -ə aid olan özəlliklər Typescript -də var.Ancaq Typescript -ə aid olan özəlliklər Javascript -də yoxdu.Typescript Javascript -in genişləndirilmiş versionudu.Və hər Javascrit kodu bir Typescript kodudur.Ancaq o kodlar yığılıb işlədilməyi müddətdə Javascript kodu yox Typescript kodudur.Typescript -i asanlıqla yazmaq üçün Javascript -i bilmək vacibdir.
TypeScript Javascript -in bütün kitabxanalarında , framework -lərində işləyir.
Javascript interpreted bir dildir yəni kodda yanlış hissə olduqda kodun yoxlanılmasını dayandırır və ümumi kodda düzgün hissə də olsa belə o hissəni göstərmir.Ancaq Typescript səhvi yoxlayır və o səhv üçün bir həll yolu verir.

Typescript yuxarıda da yazdığımız kimi obyekt yönlü dildir və bu bizə proqramlaşdırmada mirasalma, modulyar və.s kimi özəlliklərlə işləməyə imkan verir.Əksər obyekt yönümlü dillər kimi, TypeScript-də də istifadəçilərə öz növlərini təyin etməyə imkan verən interfeyslər var. İnterfeyslər obyektin malik olduğu xassələri, o xassələrlə əlaqəli tipləri təyin edir. TypeScript interfeysləri əlavə xüsusiyyətlərə malik ola bilər.
Typescript types.
Bu proqramlaşdırma dilində Javascript -ə uyğun olaraq type yaxınlığı var ancaq fərqliliklər də var:Numbers, String, Boolean , Array, Object , Enum, Any-dir.
Javascript-dən fərqli olaraq Enum və Any dəyişən var.
Enum -C#-ın dəyişəninə bənzəyən bu növ rəqəmsal dəyərlər ardıcıllığına insan tərəfindən oxuna bilən adlar təyin etməyə imkan verir.

Any -dəyərlə başa çatacağını əvvəlcədən bilmirik — o, öz dəyərlərini, məsələn, istifadəçi girişindən və ya üçüncü tərəf kitabxanasından götürə bilər.

TypeScript class
Obyekt yönümlü proqramlaşdırmada class funksionallığı miras alır və öz növbəsində obyektlərin tikinti blokları rolunu oynayır. 2015 -ci ilə qədər Javascript class məntiqindən istifadə etmirdi.Ancaq EcmaScript2015 -də olunan yenilikdən sonra artıq class məntiqi Javascriptdə istifadə olunmağa başladı.Artıq class məntiqi həm Javascript -in həm də Typescript -in bir hissəsi olmuşdu və demək olar ki Javascriptlə Typescript eyni sintaksisi istifadə edirdi.TypeScript kompilyatorunun üstünlüklərindən biri də odur ki, o, JavaScript class -lar ilə kodu 2015-ci ildən əvvəlki standartlara uyğun gələn köhnə JavaScript koduna çevirə bilir.
TypeScript date
Date obyekti əsasən tarixləri illəri ayları günləri və millisaniyələrə qədər anı təmsil edən bütün dəyərləri bildirir.Və Javascript-dədə olduğu kimi konstruktora heç bir arqument ötürməsək avtomatik kompüterin məlumatlarından istifadə edib tarixi ekrana çap edəcək.

Sual — 2. Array içərisindəki elementlərin ən böyük və ən kiçik qiymətləri necə tapılır?

Min və Max dəyərlər nədir?
Hər bir proqramçının olmazsa olmaz alışqanlıqların biri alqoritmik probleri həll etmək,bununla kifayətlənməyib hansı ki tapılan həll üsulunu daha da sadələşdirmək o həlli daha qısa üsullara qədər ixtisar etməkdir.Və bizim alqoritmik məsələlərdə əksərən istifadə etdiyimiz məntiqlərdən biri array içində elementlərdən minimumu və maksimumu necə tapılırdır.
Bu mövzuda biz Math.max() və Math.min() -dən danışacağıq.Onların funksiyası array -dəki elementləri detekt edib hansı elementin kiçik ya da böyük olduğunu çap etməkdir.Ancaq array-in içərisində string ya da rəqəmdən fərqli bir dəyişən olarsa nəticədə bizə NaN olaraq çıxaçaq.Yəni bu bir rəqəm deyildir.

Təsviri(Yazılma qaydası və niyə)
Yuxarıda kiçik introdaction verdikdən sonra bir az daha dərinə gedək və nə üçün bu formada yazıldığına baxaq.Göründüyü kimi max() Riyaziyyatın statik metodu olduğundan,biz onu Math.max() kimi istifadə etməliyik.
Funksiya içərisində istifadə olunduqda
Əgər verilən bu dəyərlər function-un içərisində parametr olaraq icra olunursa artıq icra fərqli cür olur.Məsələn:

Bu formada baş verir.Biz artıq function-da parametr kimi verilən arr parametrinin qarşısına Math.(max) içərisində işlətdikdə qarşısına 3 nöqtə qoyuruq.
Method istifadə etmədən ən böyük və ən kiçik elementin tapılması.

Sadə olaraq loop və şərt operatorlarından istifadə edərək ilk öncə döngü içərisinə salırıq daha sonra şərtdə array -in içərisindəki elementlərin şərti olaraq verdiyimiz max -dan böyük olduğunu göstərib bunun əsasında da çıxacaq nəticənin həmin array -in içərisindən bir dəyər olduğunu göstəririk.
Ancaq isbatlanmışdır ki əgər array daxilində milyon element olarsa və hansı üsulla yazılarsa hesablama daha sürətli baş verər deyə yoxlama aparılmışdır.Nəticələr isə çox maraqlıdır.Deməli Es6 ilə proqramlaşdırdıqda 2.214 saniyə müddətində tamamlanır(İlk şəkildəki kimi) və təbii ki başqa yollarla da sınanıb və demək olar ki nəticə olub.Ancaq bir yer istisna.

Burdan belə nəticəyə gəlirik ki massivdəki elementi nə qədər artırsaq hesablama bir o qədər yavaşlayır və bu da nəticə.
Sual — 3. Java və Javascript- in fərqləri nələrdir?

Həm proqramlaşdırmaya giriş etmək istəyən insanlar həm də ümumiyyətlə texologiyadan uzaq olan insanlar həmişə Java və Javascript -i qarışıq salırlar.Ya da eyni proqramlaşdırma dili zənn edirlər.Yeri gəlmişkən buna misal olaraq GetContact -da mənim adımı “Məhəmməd Java” olaraq qeyd ediblər.Halbuki mən Javascript ilə məşğulam)).İndi isə gəlin fərqləri araşdıraq.Xüsusiyyətlərinə keçməmişdən əvvəl ümumi məlumat verim.
Javascript

İnternetin ilk 1995-ci ildə Netscape şirkəti tərəfindən, Sun şirkətinin dəstəyi ilə hazırlanmış NN24-də istifadə olunan AD bundan sonra JavaScript adlandırılması ilə açıqlanma verildi. Buna qədər isə bu alqoritmik dil LiveScript adlandırılırdı. Bu gözlənilməz addım kifayət qədər problemlər yaratdı. Beləki, Sun şirkətinin JAVA AD-nə heç bir aiddiyyatı olmayan JavaScript-i JAVA-nın alt-çoxluğu kimi qəbul edənlərin sayı çoxaldı.JavaScript — HTML səhifəyə inteqrasiya olunaraq, bu səhifə ilə istifadəçi arasındakı interfeysə əlavə funksional imkanlar verən alqoritmik dildir.
Təbii ki bir çox framework(Jquery) və library(React.js, Angular.js, Node.js, React Native.js və.s) kimi bir çox növləri vardır.
Java

Java ilk dəfə olaraq Sun Microsystems tərəfindən 1995-ci ildə proqramlaşdırma dili kimi istifadəyə verilmişdir.Java -nın mahiyyəti çox böyükdür.Belə ki Java yükləmədiyimiz təqdirdə işlədə bilməyəcəyimiz proqramlar çoxdur və bunun sayı hər il getdikcə daha da artır.Java sürətli, təhlükəsiz və güvənilən bir proqramlaşdırma dilidir.Diz üstü kompüterlərdə data bazayada, ən sürətli oyun kompöterlərində, telefonlardan internetə qədər Java demək olar ki hər yerdədir.
Fərqləri nələrdir?
İlk öncə işlənmə yerlərinə görə baxsaq Java kredit kartı proqramlanması mağazalarda malın qiymətinin hesablanması sisteminin proqramlanması kompüterlər də bir çox proqramlarda və daha çox yerdə istifadə olunur.Javascript web proqramlaşdırma da daha çox istifadə olunur.HTML -də animasya, dinamiklik qurur.Java compiled dildir ancaq Javascript Interpreted.Əsasən Java backend -də istfadə olunur ancaq Javascript frontend -də.Java static Javascript isə dinamkik xüsusiyyətə malikdir.Java müxtəlif proqramlar üçün Javascript isə Web proqramlar üçün nəzərdə tutulmuşdur.

Sual — 4 Sonsuz döngülər necə yaranır?

Proqramlaşdırmanın olmazsa-olmaz parçalarından biri Loop(Döngülər)-dir.Adətən təkrarçılıqdan quratarır, əllə sıralamanı ortadan qaldırır, ümumi olaraq massiv içərisindəki elementləri ortaya çıxarır, onlar üzərində sürətli şəkildə əməliyyat icra etməyə imkan verir və.s . Ancaq bəzən biz loop -dan istifadə etdikdə kiçik yanlışlıq ucbatından döngünü sonsuzluğa salırıq və rəqəmlər sonsuz olaraq artaraq irəliləyir.Bu artım isə kompüterin yavaşlamasına, browserin və kompüterin donmasına gətirib çıxarır.Bu halların qarşısını almaq üçün isə loop -laran xəbərdar olmaq vacibdir.
Sonsuz döngə nə deməkdir?
Sonsuz döngə dayandırma şərtinə tabe olmayan sonsuz olaraq işləməyə davam edən kod parçasıdır.
Sonsuz döngülər necə yaranır onlara nəzər yetirək.
Ən çox yayılmış sonsuz döngələrdən biri while ifadəsinin şərtinin doğru olaraq təyin edilməsidir. Aşağıda əbədi işləyəcək kod nümunəsi verilmişdir.

Başqa bir klassik nümunəyə baxsaq

Burada edilən əməliyyat i-ni 0 -a bərabər götürdük İnfinity -ni i dən böyük götürüb bir-bir artırmaqdır.
Decorator nədir?
Salam hər kəsə.Bu məqalədə sizinlə dekorator haqqında danışacağıq.Ümumiyyətlə dekoratorlar nədir, harda istifadə olunur ,niyə istifadə olunur kimi bir çox suala cavab tapacağıq.
Dekorator nədir?
Dekorator “dekor” sözündən götürülmüşdür və hər hansısa bir kod hissəsini və ya funksiyanı bükmək,əlavə etmək, içinə yerləşdirmək üsuludur bir növ.Və ya başa bir deyimlə dekoratorlar eyni sinifdən olan və digər obyektlərin davranışına təsir etmədən bayaq dediyimiz kimi bükulən obyektə xüsusiyyətlərin və ya funksiyaların statik və ya dinamik şəkildə əlavə edilməsinə imkan verir.Aşağıdakı şəkildə sxem üzərində daha aydın anlayacaqsız.

Burdan da göründüyü kimi bir növ funksiyanı və ya hər hansısa bir kod hissəsini dekoratora ətrafına alacaq şəkildə əlavə etdi.
İstifadə olunması isə ilkin laraq kod üzərində:

Sual — 5. Nə üçün dekoratorlardan istifadə edirik?
EcmaScript 2015 (6-cı versiyası) update olunana qədər bükmə əlavə etmə məsləsini həll etmək elə də asand iş deyildi.Ancaq Es6 ilə demək olar ki bunu etmək bir növ asanlaşdı.Adından da məlum olduğu kimi görüntü olaraq bir növ kodu bəzəyir.Həmçinin, dekoratorlar bu sarğıları tətbiq etmək üçün aydın sintaksislərdən istifadə edir.Hal-hazırda Javascript dekoratorları bir-başa olaraq dəstəkləmir ancaq bu məsələ üzərində gələcəkdə həll yolu tapılması gözlənilir.
Decoratorların növləri.
Dekoratorlaın əsasən 2 növü vardır:
Class member decorators
Members of classes
Class member decorators:Bu növdə decoratorlar sinifin bir üzvünə tətbiq olunur.Və əsasən 3 parametr qəbul edirlər.
target — üzvün aid olduğu sinif
name — Sinif üzvünün adı
descriptor — hansı ki ötürlən obyektə verilən xüsusiyyət

Members of classes:Burada isə xüsusiyyət bütün sinifə ötürülür

Sual — 6.Eval() nədir?
Eval , evaluate sözündən götürülmüşdür və mənası qiymətləndirmək, qiymət vermək deməkdir.Bu funksiyanının əsas işi ona verilən dəyəri parametri və.s Javascript kodu kimi işlətməkdir.Sintaksis olaraq eval(string) olaraq yazılır.
eval() qlobal obyektin funksiyasıdır bir növ.Və bu funksiyanın arqumenti sətirdir.Və biz əməliyyatları bu sətirin işərisinə yazırıq.Ona aid nümunələri aşağıda verəcəm.

Yuxarıda gördüyünüz sadə kod nümunəsində biz kodu işə saldıq.String hissəsinə kodu yazdıq və heasblama gerçəkləşdi.

Sual — 7. 2 array -in toplanması necə olur?
Dostlar salam.Bu məqalədə 2 array -i necə toplayırıq ondan danışacam.
Qısa olaraq əvvəlki mövzulardan da yadımızda olduğu kimi array eyni növ elementin birdən çox verildiyi dəyərlər çoxluğudur.Və hər elementin bir yeri var.Biz bu yerə həmin elementin index -i deyirik.Toplamada bizə köməklik edəcəklər bir növ.
İndi isə toplamada daha bir roloynayan obyektlərdən biri də map-dir.Qısa olaraq demək lazımdır ki map özündə (value , key =index) dəyər, açar saxlayır.
Nələrdən istifadə olunduğunu bildikdən sonra gəlin tətbiq edək
Burada 2 dəyişən təyin etdikdən sonra cəmin tapılması mərhələsinə keçirirk.Burada map məntiqindən istifadə edirik və dəyişənlərdən birini onunla işlətdikdən sonra mötərizənin içərisinə keçirik və x -ın dəyərlərinin ezərinə y dəyişənin indexlərini ardıcıl olaraq təyin edib toplanır.

Sual — 8. MEAN.JS nədir?

MEAN -in açılışı MongoDB, Express, AngularJS, NodeJS -in baş hərflərinin alınması ilə qurululmuşdur.Və bunlardan Angular.js və Node.js Javascript-in kitabxanalarıdır.
Bizim də bilidiyimiz kimi hər bir səhifənin frontend və backend hissəsi mövcuddur.Əvvəllər bir səhifədə lazım olan şey yalnız “görüntü olsun” , yaxud “işimə yarasın bəsdi” deyə fikirlər idi.Ancaq 21 -ci əsrin əvvəllərindən sonra bu işin görülməsi daha da ciddiləşdi və daha da bu işə qayğı artdı.Bir səhifə isə nə qədər dinamik və elastik olarsa bir o qədər keyfiyyətli və gözə gəlimli bir səhifə olar.
MEAN isə bizim üçün səhifənin həm back həm də frondend hissəsini qurmaq üçün bütün lazım olan necə deyərlər məmulatları bizə verir. Frontend’ində AngularJS, Backend’inde NodeJS istifadə olunur.
Sual — 9. Javascript’i kim qurub?

Bildiyimiz kimi Javascript 1995 -cil ildə Netscape şirkəti tərəfindən, Sun şirkətinin dəstəyi ilə hazırlanmışdır.Qurucusu isə Brendan Eich -dir.O JavaScript proqramlaşdırma dilini qurduvə Mozilla layihəsini və Mozilla Korporasiyasını təsis etdi.
Sual — 10. Vergül operatoru nədir?
Dostlar salam.Bu məqlədə biz vergül opertorundan danışacağıq.
Vergül operatorundan Javascriptdə kod yazarkən istər alqoritma yazarkən istərsə də dinamik səhifə hazırlayarkən istifadə edirk.Looplarda , arraylərdə , objectlərdə , funksiyanın parametrləri tərkibində və.s yerlərdə çox istifadə edirik.Bu operator istifadə olunduğu yerdə məsələn ya obyektləri ya parametrləri ya da hər hansısa elementləri təyin edib onları soldan sağa doğru oxudub kodu işə salır.

Sual— 11. Vergül operatorunun üstünlükləri nələrdir?
Əgər biz funksional kod yazırıqsa müəyyən yerlərdə vergül operatorundan istifadə edirik .Vergül operatoru müəyyən edilən yerə çoxlu ifadələr qoymağa imkan verir.
Aşağıda 2 kod qrupuna baxacağıq və biri vergüllə biri vergülsüz işlənib.Aradakı fərq göz önündədir)

Buradan kodun daha qısa yazılışı ,oxunaqlılığı , səliqəliliyi daha ön plana çıxdı.
Sual — 12. Modullar nədir?
Qısa olaraq desək modullar bir folderdir(papka),tək bir proqram.Yazdığımız proqram böyüdükcə onu kiçik parçalara bölmək istiyərik. Və böldüyümüz papkalar modullardır.
Tamam yazdığımız app , web səhifə geniçdir və biz onları papkalara böldük amma yenidən onları birləşdirməliyik. Burada funksiyaya export və import yönləndiriciləri girəcək.

Daaha sonra parçaladığımız başqa bir kod parçasını da yazaq

Sual — 13. Javascript-də skop nədir?
Javascript-də funksiya yazdığımız zaman skoplar yaranır.Və necə deyərlər skoplar müəyyən bir hissəni əhatə edir Javascriptdə.

Yuxarıdakı şəkildə gördüyünüz kimi skopun əhatə dairəsi bu formadadır.
Skop yerinə görə 2 yerə ayrılır.
1.Qlobal skop
2.Lokal skop.
Qlobal skop funksiyanın xarici hissəsini əhatə edir.Funksiyanın xaricində təyin olunan dəyişən (var ) problemsiz formada işliyəcək.

Lokal skopda isə təyin olunan dəyişənlər (let, const)daxildə yerləşməlidir ki kod errorsuz işləsin.

Sual— 14. Sintaksis error nədir?Nə etməliyik?
Bəzən Javascriptdə kod yazarkən ya kod işləmir ya error verir.Fikirləşirik ki axı hər şeyi düz yazmışıq necə işləmiyə bilər.Birdən erroru görürük sintaksisdən olduğunu bilirik.
Javascriptdə kodlar müəyyən qaydaya uyğun yazılmışdır.Məsələn array içərisində vergüllərdən yalnız birini qoymasaq errorla qarşılaşa bilərik.Ya da funksiya yazarkən düzgün mötərizələrdən istifadə etməsək və.s kimi bir çox qaydaya uyğunsusluqlardan istifadə etməklə bu errorları görə bilərik.

Sual — 15 . Javascript-də isNan nədir?
Ümumiyyətlə bəzən kod yazdığımız zaman Nan erroru ilə qarşılaşırıq.Nan-dan qısaca danışası olsaq Nan-ın mənası Not a number (rəqəm deyil) mənasındadır.Bu bir error növüdür.Ancaq bu məqalədə danışacağımız məsələ isNan metodudur.
isNan metodunun mənası isə bir növ daxil edilən parametr və ya dəyər (rəqəm deyildir) mənasındadır.Yəni aldığı dəyəri rəqəm olub olmadığını təyin edir.Düzü o qədər də istifadə olunmur ancaq bilmək faydalıdır.Qısa bir kodla bunu göstərim.

Gördüyünüz kimi isNan metodunun içərisinə əlavə etdiyimiz ilk dəyər rəqəmdir.Rəqəm olduğu üçün falsa qaytarır.Ancaq 2 -ci sətirə əlavə etdiyimiz dəyər rəqəm deyil string növündəndir ona görə true qaytarır.
Sual — 16. Javascript-də null dəyəri nədir?
Javascript-də primitiv data type -lar var.Və onlar bir obyektirlər method deyillər.Primitiv data type-lar 7 dənədir.Bunlar string, number, bigint, boolean, undefined, symbol, and null-dır.Və bu primitiv type-lar dəyişdirilə bilməzlər.Biz isə bu məqalədə null-dan danışacağıq.Null dəyəri hər hansı bir obyekt dəyərinin həqiqətən də olmadığını göstərir.Məsələn:Qapağı açıq bir qutu var və içərisinin boş olduğunu görürük.100 də 100 içərisində heç nə olmadığını görürük.

Test edəsi olsaq deyirik ki əgər dəyər null-dırsa true və ya falsa çıxart.
Sual — 17. Javascript-də == və=== arasındakı fərq nədir?
== nədir?
Bu operator əsasə tərəflərin növlərini (type of) nəzərə almır.Yəni tərəflərdən müqayisə üçün verdiyimiz ifadelerden biri string biri də number olsa belə onları true kimi çap edir.

=== nədir?
Bu operator isə tərəflərin növlərini nəzərə alır və ona görə nəticə qaytarır.Yəni tərəflərdən biri string digəri number olarsa false qaytarır.

Sual — 18. Properti və atributlar arasında hansı fərqlər var?
Atributlar və propertilər bir-biri ilə əlaqəlidirlər.Belə ki browser -də səhifə yükləndikdən sonra HTML -i oxuyur və özündən DOM obyektlərini generate edir.Məsələn bu tag-i <body id="page">,generate edir bu koda body.id="page".
Propertilər
Əsasən DOM Properti kimi işlənir.Məsələn document.body adında bir properti quraq.

Və DOM propertilər Javascript obyektləri kimi davranır.
Atributlar
Bura da Atributlar bir növ HTML tag-i kimi gedir.Və burada yuxarıda yazdığım kimi təhlildən sonra atributlar tanınır və DOM propertiləri yaradır.

Sual — 19. JSON nədir?
JSON, Duqlas Krokford tərəfindən qurulan JavaScript-də obyekt sintaksisinə əsasən mətn əsaslı məlumat formatıdır.Strukturu yazılma forması Javascript-ə bənzəyir.JSON-ın açılışı JavaScript Object Notation-dan yaranmışdır.Bu faylda əsasən məlumatlar saxlanılır və daşınır.Məsələn serverdən məlumatları ötürür istifaçiyə və.s.Həmçinin JSON “self-describing”-dir.Və anlamaq asandır.
Necə yazılır?
Biz JSON daxilində Javascript-ə məxsus olan data type-ları əlavə edə bilərik-string, number, array, boolean və başqa obyektlər.Bunlar bir növ məlumat hierarxiyasını qurmağa bizə kömək edir.

Bu formada göstərə bilərik.
JSON özündə bir növ propertiləri saxlıyır ancaq metodları yox.Həmçinin dəyərləri 2 qat dırnaq araslnda yazmaq lazımdır.Əks təqdirdə qaydalara uyğun olmaz və etibarlı olmaz.
Sual — 20. Default parametr nədir?
Default parametrlərdən daha çox function yazdıqda istifadə edirk.Və necə deyərlər default parametr burada bizim öz əlimizlə verdiyimiz dəyərdir.

Yuxarıda gördüyünüz kimi b parametr-inə dəyər olaraq özümüz 1 verdik.Artıq multiply kodunu aşağıda çağırmağa ehtiyyac qalmır.
Başqa bir nümunə də göstərim.

Demıli burada default parametrdən istifadə etməmişik və multiply çağırdığımız zaman parametr olaraq 6 -cı sətirdə yerinə görə yəni a və b parametrinə görə 2 dəyər veririk.Ancaq 7-ci sətirdə 1 dəyər veririk və nəticə bu formada çıxır.
Ancaq başqa bir nümunədə isə

6 -cı sətirdə a parametrinə 5 dəyəri versəkdə nəticəni doğru olaraq çıxardı.7-ci sətirə fikir versək b parametrini undefined olaraq qəbul edib.Yəni b parametrində hansısa bir dəyər var ancaq bilinmir.O bilinən hissə yuxarıdakı hissədədir.
Sual — 21. JSON nə üçün istifadə olunur?
JSON istifadçi ilə browser arasında əlaqə yaradır.Bu haqqda daha geniş məlumat almaq istəyirsizsə bu linkə keçid edə bilərsiz https://medium.com/@mehemmedeliyevn0330/json-n%C9%99dir-2046a4a8d6bd
Sual — 22. Funksiyasız minimum və maksimum dəyərlər necə tapılır?
Array içərisindəki elementlərin ən böyük və ən kiçik qiymətləri necə tapılır?
Min və Max dəyərlər nədir?
medium.com

Bu linkə keçid edərək usala cavab tapa bilərsiz.
Sual — 23. Niyə Javascript-di dinamik dil adlandırırıq?
Ilk qurulan səhifələrin funksiyası yalnız informasiyanı istifadəçiyə çatlrmaq,səhifədə yazıları göstərmək idi.Ancaq bir vaxtdan sonra bu belə olmadı.Javascript-in inkişafı ilə səhifələrin dinamikliyi artdı və elə dinamikliyi saxlıyanda Javascript-in özüdür.
Funksiyası məsələn hər hansısa butona basanda rəngin dəyişməsi və ya hərəkətliliyin olması həmçinin CRUD əməliyyatlarının qurulması və daha artığını Javascript-də etmək mümkündür.

Məsələn bu kodu analiz etsək silmə funksiyasını yerinə yetirdiyini görərik.
Sual — 24. Javascript-də undefined properti-si nədir?
Undefined tapılmadı mənasında işlənir.Məsələn bir qutu var və onun içərisində bəzi rənglərdən ibarət toplar.Bizim daxil etdiyimiz rəngli top orda yoxdursa undefined -la qarşılaşırıq.Yəni qutunun içərisində bir şeylər var ancaq verilən dəyər yoxdur.Və ya bu bir boş bir array də ola bilər.İçərisində nəyin olduğunu bilmir.

Sual — 25. Argumentlər obyekti nədir?
Argumentlər funksiya daxilində verilən parametrlərə bərabər olub array-ə bənzəyən bir obyektdir.Array-dən fərqi ondadır ki pop, push, map, filter, forEach kimi methodları özündə işlətmir.

Sual — 26. Type of operatoru nədir?
Bu operator daxil etdiyimiz obyektin hansı növ obyekt olduğunu göstərir.

Sual — 27. Javascrpt-də ‘strict mode’ nədir?
Strict mode ES6-la birlikdə əlavə olunmuşdur.Strict mode-dan istifadə etmək üçün ilk sətirə ‘use strict’ yazmaq kifayətdir.Biz strict mode-dan istifadə etdikdə daha konkret kod yazmalı oluruq.Hansı ki normal bir kodu yazdıqda error vermədiyi təqdirdə strict moddan istifadə etdikdə errorla qarşılaşırıq.Aşağıdakı koda nəzər yetirsək.

Bu kod normalda error verməzdi ancaq strict mode-dan istifadə etdiyimizə görə error verdi.Bunun kimi bir çox halda məsələn function-da eyni növ parametrlərdən və.s kimi hallarda errorla qarşılaşmaq mümkündür.
Sual — 28. Niyə ‘strict mode’-dan istifadə etməliyik?
Strict moda-dan istifadə etdikdə daha səhvsiz və təmiz kod yazmış olarıq.
Sual — 29. Error obyekti nədir?
Proqramlaşdırma zamanı qarşımıza çıxan xətalar errorlardır.Bu errorlar bir çox yanlış yazılmış kod hissəsi və ya başqa hallarda çıxa bilər.Errorun növləri var:EvalError, RangeError, ReferenceError, SyntaxError, TypeError kimi növləri vardır.
Sual — 30. Event nədir?
Event əsasən DOM-da hərəkətlilik yaradır.Bir çox özəllikləri var.Məsələn:
event.type-işlədildiyində obyektin növünü göstərir
event.timeStamp-işlədildiyi tarixi göstərir və.s

Sual — 31. Undefined və null fərqi nədir?

Dəyərə null mənimsətdikdən sonra həmin dəyərə typeof verdikdə bizə obyekt qaytarır.

Ancaq undefined verdikdə elə undefined da olaraq qaytarır.
Həmçinin biz null-ı dəyərə bərabər edə bilirik ancaq undefined-ı yox
Sual — 32. Void operatoru nədir?
Void operatoru verilən dəyəri qaytarmadan qiymətləndirib ifadəni təyin edir.

Həmçinin DOMda-da istifadə etmək olar.

Sual — 33. EcmaScript 6 (ES6) nədir?
ES — 6 EcmaScript-in 2015-ci ildə yenilənmiş versiyasıdır. Bu yeniləmələrlə gələn bəzi mövzular var ki onlar let, Default Parameters, Destructuring Assignment, const, Arrow Functions, Template Literals, Spread Operator, For..Of, Generators, Modules, Set Map WeakMap WeakSet, New Built-In Methods, Binary and Octal Literals, Tail Calls özəllikləridir.
Sual — 34. Function parametr — ləri nədir?
Funksiyanın definitionları parametrlər üçün məlumat növləri təyin etmir.
Ötürülən arqummentlər üzrə tip yoxlanışı həyata keçirmir.
Alınan arqumantlərin sayı yoxlanılmır.

Sual — 35. Hansı üsullarla obyekt yaratmaq olar?
4 üsulla obyekt yaratmaq olar.
Object Literals.
New operator or constructor.
Object.create method.
Class.
Object Literals

New Operator or Constructor

Object.create Method

Class

Sual — 36. Const dəyəri dəyişəni dəyişməz edirmi?
Const decleration yalnız dəyəri oxumaq üçün referans verir.Ancaq bu o demək deyil ki malik olduöu dəyər dəyişməz saidəcə olaraq dəyişənə verilən qiymət yenidən təyin edilə bilməz.

Sual — 37. Constructor method nədir?
Sinfin obyekt nümunəsini yaratmaq və işə salmaq üçün xüsusi bir üsuldur.

Sual — 38. Typescript-in javascript-dən üstünlükləri nələrdir?
TypeScript-in əsas üstünlükləri:
Class and Module Support
Static Type-checking
ES6 Feature Support
Clear Library API Definition
Build-in Support for JavaScript Packaging
Syntax Similarity to Our Backend Languages (Java, Scala)
Superset of JavaScript
Sual — 39. Javascript və Typescript arasındakı fərqlər nələrdir?
JAVASCRIPT:
Dinamik veb səhifələr hazırlanır.
Səhvlər yalnız kod işləyərkən tapıla bilir.
Birbaşa brauzerlərdə istifadə edilə bilər.
JS kitabxanaları standart olaraq işləyir.
Modullar, generiklər və ya interfeys üçün dəstək yoxdur.
TYPESCRIPT:
Böyük layihələr üçün kod mürəkkəbliyini aradan qaldırır.
Səhvlər kod işləyən zamanı tapıla və düzəldilə bilər
Güclü şəkildə yazılmışdır, həm statik, həm də dinamik yazmağı dəstəkləyir
Brauzerlər üçün başa düşülən olması üçün JavaScript koduna çevrilir
Sual — 40. Array daxilində elementlər necə çeşidlənir.
sort() metodu array daxilindəki elementləri çeşidləmək üçündür.Burada sıralanma UTF-16 kod vahidi dəyərlərinin ardıcıllığının müqayisəsi əsasında qurulur.

Bu cədvələ əsasən hesablanır.

Sual — 41. JS istifadə edərək şəklin enini və hündürlüyünü necə əldə edilir?

Sual — 42. ES6-da class nədir?
OOP -nin konsepsiyalarından biri class-dır.Class konstruktorlar və funksiyalar -dan ibarətdir. Konstruktorlar class obyektləri üçün yaddaş rolu oynuyur.

Sual — 43. Lambda və ya arroü function nədir?
Bu funksiya kodların kompakt saxlanılması üçün istifadə olunur ancaq nəzərə almaq lazımdır hər yerdə istifadə etmək olmur.

Sual — 44. Javascript-də tarixə necə daxil olunur?
Tarix məlumatlarını idarə etmək üçün history obyektinin propertisi olan window obyektindən istifadə olunur.

Geri tarixləri də əldə etmək mümkündür.

Sual — 45. preventDefault methodunun istifadəsi.
preventDefault seçilmiş elementin standart hərəkətliliyinin qarşısını alır.Create olunan bir funksiya zamanı daxil edilən dəyəri ekranda göstərmək üçün prevenDefault metodundan istifadə edirik.Əgər etməzsək ani olaraq daxil edilən yazı görünüb itəcək və.s.

Sual — 46. Boş obyekti necə təyin etmək olar?
Bir neçə metod istifadə etməklə obyektin içini yoxlamaq olar.Məsələn:

Yaxud loop-a salaraq da təyin etmək olar

Sual — 47. Break və continue ifadələri nədir?
Əsasən loop-larda (Döngülərdə) istifadə olunurlar və döngülərin davamını və ya dayanmasını idarə edirlər.

Sual — 48. Konsol mesajlarına CSS əlavə etmək mümkündürmü?
Bəli mümkündür.%c ifadəsinin köməyi ilə consol-a css özəlliyi vermək olar.

Nəticəsi:

Sual — 49. CSS və JS fayllarını dinamik olaraq necə yükləmək olar?
Css faylını bu üsulla

Javascrpt faylını isə bu üsulla yükləmək olar

Sual — 50. StopPropagation metodunun istifadəsi?
Məsələn bir parent elementimiz var və o hər hansısa bir əmri icra edir hansısa bir dinamink əməliyyat yerinə yetirir.Həmən bu parent elementinin içərisində də bir child elementi var və onun da bir vəzifəsi var.Hər ikisi də alert bildirişini ekrana çıxarır.Child elementə click etdiyimiz zaman öz funksiyasını yerinə yetirir ancaq ardınca avtomatik olaraq parent elementin də funksiyasını yerinə yetirir.Bu halla qarşılaşmamaq üçün bu metoddan istifadə edirik.
