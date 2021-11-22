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
