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
Javascript -ə aid olan özəlliklər Typescript -də var.Ancaq Typescript -ə aid olan özəlliklər Javascript -də yoxdu.Typescript Javascript -in genişləndirilmiş versionudu.Və hər Javascrit kodu bir Typescript kodudur.Ancaq o kodlar yığılıb işlədilməyi müddətdə Javascript kodu yox Typescript kodudur.
TypeScript Javascript -in bütün kitabxanalarında , framework -lərində işləyir.
Javascript interpreted bir dildir yəni kodda yanlış hissə olduqda kodun yoxlanılmasını dayandırır və ümumi kodda düzgün hissə də olsa belə o hissəni göstərmir.Ancaq Typescript kodu işə salmadan səhvi yoxlayır və o səhv üçün bir həll yolu verir.[Şəkilə baxsaq](<(https://www.tnado.com/includes/medias/2018/11/tnado-seo-cms-blog-typescript-javascript.png)>)
Typescript yuxarıda da yazdığımız kimi obyekt yönlü dildir və bu bizə proqramlaşdırmada mirasalma, modulyar və.s kimi özəlliklərlə işləməyə imkan verir.
