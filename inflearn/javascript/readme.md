(Object Model)

1. window :전역객체, window,frame 제어
    
   DOM(Documnet Object Model)
    - document : 웹페이지안의 태그들을 제어하는 역할 (ex:body, img...)
    
   BOM(Browser Object Model):웹 브라우저 자체를 제어하기 위한 객체들
    - navigator
    - screen
    - location
    - frame
    - history
    - XMLHttpRequest
    
   JavaScript Core : 호스트 환경에 상관없이 제어가능
    - Object
    - Array
    - Function
    - Date

2. 전역객체는 window라는 객체의 프로퍼티, 메소드를 만드는 것.


------------------------------------------------------------------
(사용자와 커뮤니케이션)

HTML은 form을 통해서 사용자와 커뮤니케이션할 수 있는 기능을 제공한다. 자바스크립트에는 사용자와 정보를 주고 받을 수 있는 간편한 수단을 제공한다.

* alert
* confirm
* prompt :사용자가 입력한 값을 자바스크립트에서 얻어내는 것.


------------------------------------------------------------------
http://opensource.org:80/module/1?id=10#hash
위의 url을 location으로 분석해보자면
   http - protocol
   opensource.org - host
   :80 - port
   module - pathname
   ?id=10 - search
   #hash - hash

Location 객체
   : Location 객체는 문서의 주소와 관련된 객체로 Window 객체의 프로퍼티다. 이 객체를 이용해서 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있다.
   :현재 웹페이지 reload 혹은 변경도 가능하다.

현재 윈도우의 URL 알아내기
   : 아래는 현재 윈도우의 문서가 위치하는 URL을 알아내는 방법이다. console.log(location.toString(), location.href);

URL Parsing
   : location 객체는 URL을 의미에 따라서 별도의 프로퍼티로 제공하고 있다. console.log(location.protocol, location.host, location.port, location.pathname, location.search, location.hash)

URL 변경하기

   1. 해당 url로 이동하기(2가지 방법)
      location.href = '';
      location = '';

   2. 현재 웹페이지 리로드하는 법(2가지)
      location.href = location.href
      location.reload();

---------------------------------------------------------------------------------------
(Crossbrowsing : 크로스브라우징)
   브라우저마다 다르게 구현된다. 

(Navigator 객체)
   : 브라우저의 정보를 제공하는 객체 
   : 주로 호환성 문제등을 위해 사용
   console.dir(navigator); 
   위 명령을 통해 이 객체의 모든 프로퍼티를 열람가능
   - appname
   - appVersion : 브라우저 버젼
   - userAgent 
   - platform : 브라우저의 운영체제 

(기능 테스트)
   if(!Object.keys){
      Object.keys = (function(){
         'use strict';
         var hasOwnProperty = object.prototype.hasOwnProperty,
         hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
         dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
         ],
         dontEnumsLength = donEnums.length;

      return function (obj){

      }
      }) 
   }

----------------------------------------------------------------------------------------
(window open) : 창 제어
   첫번째는 문서의 url ,새창열림
   window.open('demo.html');
   2번째는 새 창의 이름.


   
   window.open('demo.html', '_self');
   _blank는 새 창을 의미한다.
   창에 이름을 붙일 수 있다. 
   3번째는 새 창의 모양과 관련된 속성을 넣을 수있다.
   window.open('demo.html', '_blank', 'width=200')

(새 창에 접근)
(팝업 차단)
------------------------------------------------------------------------------------------
(제어 대상을 찾기)
Document Object Model로 웹페이지를 자바스크립트로 제어하기 위한 객체 모델을 의미한다. window 객체의 document 프로퍼티를 통해서 사용할 수 있다. Window 객체가 창을 의미한다면 Document 객체는 윈도우에 로드된 문서를 의미한다고 할 수 있다. DOM의 하위 수업에서는 문서를 제어하는 방법에 대한 내용을 다룬다.

















