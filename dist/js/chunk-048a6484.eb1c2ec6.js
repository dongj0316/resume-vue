(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-048a6484"],{bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._m(0),a("article",[a("p",{staticClass:"home-medium"},[e._v("\n      As a software startup owner I really enjoy when people send us their\n      résumés and they include their github account so we can\n      see tangible work they have done.\n    ")]),e._m(1),a("el-form",{ref:"formData",staticClass:"home-form",attrs:{model:e.formData,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{staticClass:"home-input",attrs:{prop:"name"}},[a("el-input",{attrs:{placeholder:"Enter your GitHub username and click on Generate"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm(t)}},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",[a("button",{staticClass:"home-button",on:{click:e.submitForm}},[e._v("Generate")])])],1),a("h2",[e._v("See some popular users")]),a("ul",{staticClass:"home-popular"},e._l(e.popularList,function(t){return a("li",{key:t.name},[a("a",{attrs:{href:"/resume?name="+t.name,title:t.realName}},[e._v(e._s(t.realName))])])}),0),a("h2",[e._v("Notes, Information and Future features")]),e._m(2),e._m(3)],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header-wrapper home-header"},[a("h1",[e._v("My GitHub Résumé")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"home-medium home-padding"},[e._v("\n      After a tweet by John Resig I imagined that it may be nice for people to\n      be able to generate their\n      "),a("a",{attrs:{href:"https://github.com",title:"GitHub"}},[e._v("GitHub")]),e._v("\n      résumés.\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"home-medium",staticStyle:{"padding-bottom":"2em"}},[a("br"),e._v('\n      This is the first version. I am planning on adding things as such as\n      your most committed forks, most committed repositories and make the "My\n      Popular Repositories" be built from your complete list of repositories.\n      Feel free to\n      '),a("a",{attrs:{href:"https://github.com/nusr/resume-vue"}},[e._v("fork the page")]),e._v("\n      if you want to help :-)\n    ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"home-footer home-medium"},[e._v("\n      vue imitate\n      "),a("a",{attrs:{href:"https://github.com/resume/resume.github.com",title:"resume.github.com"}},[e._v("resume.github.com")])])}],s=(a("7f7f"),{name:"Home",data:function(){return{rules:{name:[{required:!0,message:"please enter your GitHub username",trigger:"blur"}]},formData:{name:""},popularList:[{name:"mxcl",realName:"Max Howell"},{name:"defunkt",realName:"Chris Wanstrath"}]}},methods:{submitForm:function(){var e=this;this.$refs.formData.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$router.push("/resume?name=".concat(e.formData.name))})}}}),o=s,i=(a("de16"),a("2877")),m=Object(i["a"])(o,r,n,!1,null,null,null);t["default"]=m.exports},de16:function(e,t,a){"use strict";var r=a("f3e7"),n=a.n(r);n.a},f3e7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-048a6484.eb1c2ec6.js.map