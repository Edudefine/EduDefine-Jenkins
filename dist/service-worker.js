/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["404.html","6c0f1d4d0b0469d84dedd530d7ed05ab"],["assets/ajax-masonry/loadMore.html","06233208819caafb4378a5549b8beefe"],["assets/ajax-masonry/project1.html","25e1a2f8b693bb3d4d84bfd562d17174"],["assets/ajax-masonry/project2.html","b96f20ea3dee03e2fa867a2f0b5d8a6e"],["assets/ajax/free/app.html","aaea5a3ceb7f9ee944eb2b742fd0230c"],["assets/ajax/loadMore-fullwidth.html","fcb65807896ac25f4d99b1804a7d5f62"],["assets/ajax/loadMore.html","4fcca6b366c82961b142c59a5c33600b"],["assets/ajax/project1.html","aaea5a3ceb7f9ee944eb2b742fd0230c"],["assets/ajax/project2.html","29cac4bcfc7c602428c60eef8e3bbd09"],["assets/ajax/project3.html","4a11bc7d9f87f74cdbf2dc0a0d754419"],["assets/ajax/project4.html","08c81b508b74f8ce6f8fc98d5ff0db25"],["assets/ajax/project5.html","e79de8c252706677337de0216dbe7771"],["assets/bootstrap/css/bootstrap-theme.css","8ce8b4039c6ee79b3bab6ce4d7e2df5c"],["assets/bootstrap/css/bootstrap-theme.css.map","ac8874f5d4f4913fc006bbbb2da02b4d"],["assets/bootstrap/css/bootstrap-theme.min.css","c699f913ff75ceabca499e9aeed60ebc"],["assets/bootstrap/css/bootstrap-theme.min.css.map","7e7d6a9626ddbc1d980743cfea16d007"],["assets/bootstrap/css/bootstrap.css","6a2a13f7f143f9ce987cc4547f49f5ee"],["assets/bootstrap/css/bootstrap.css.map","b8b7e7ec3230204779a8a496d805cf7c"],["assets/bootstrap/css/bootstrap.min.css","9a123abdc6148b9a1f117dab09429a92"],["assets/bootstrap/css/bootstrap.min.css.map","0ee81e3234e38143efeab042ead38290"],["assets/bootstrap/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["assets/bootstrap/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["assets/bootstrap/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["assets/bootstrap/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["assets/css/animate.css","004af86ad7e96c29173272d58ac23b29"],["assets/css/animate.css.map","2de8da01146284d5c177a0167822ef9b"],["assets/css/flexslider.css","b363894e49d26122ad058881550d00db"],["assets/css/flexslider.css.map","d033c49d130ae2e1337a0d76906833db"],["assets/css/jquery.fancybox.css","f5d43358c94d62da6d76029abf3f1e14"],["assets/css/jquery.fancybox.css.map","8df4019e676d5eabfc69faddac1a963c"],["assets/css/magnific-popup.css","766293400803de0d4cf87483df53d57d"],["assets/css/magnific-popup.css.map","0eece5a2c2a3b85df821e16ecf1b58eb"],["assets/css/master-slider-custom.css","a2beb0595c87245b74bc3a7e7f2d6a7a"],["assets/css/master-slider-custom.css.map","657f18b3e1863ad66d9d1681ed3aca4a"],["assets/css/mystyle.css","84e4ab94b5701a6ab3d197c1d23db459"],["assets/css/mystyle.css.map","9b3269c58f0fbed9885b50ec72e3eebc"],["assets/css/pricing.css","9626ab27eb42786fa9ea007de993a7be"],["assets/css/pricing.css.map","4d82bf813f6e7c7549e18460bf5c0c0e"],["assets/css/reset.css","f9ff35fec67d50f7bcb1d38d5f175fee"],["assets/css/reset.css.map","7bbb2db13f804a32006aac101228c440"],["assets/css/style-background-slider.css","479df5c9d71f9789f604619d0149153a"],["assets/css/style-background-slider.css.map","a6bf6df2fb464b409fb2a85d57a511a3"],["assets/css/style.css","f67bff5e7d625802ea174ee4b6a78d3a"],["assets/css/style.css.map","11d9c5e26ac1be359c43c8616b33c547"],["assets/cubeportfolio/css/cubeportfolio.css","2e57d91fe13f887c56cd15d01d785176"],["assets/cubeportfolio/css/cubeportfolio.css.map","d20dcd5459c0223fff94e9fe663b52dc"],["assets/cubeportfolio/css/cubeportfolio.min.css","95a5525a485569928a662d28bb44c34e"],["assets/cubeportfolio/css/cubeportfolio.min.css.map","e335121d788b34e7948bad3214aa55a4"],["assets/cubeportfolio/img/cbp-loading-popup.gif","fbc22aa777339fd7d9009439d61efb4a"],["assets/cubeportfolio/img/cbp-loading.gif","4b8b8ed40a76e266504d52113cc2e989"],["assets/cubeportfolio/img/cbp-sprite.png","d076f83086d6274f6cfa9b562a294a3f"],["assets/icons/css/ionicons.css","cf5ada925219d71fd2f9dceb37dc8ff8"],["assets/icons/css/ionicons.css.map","49356f64ea760535d4e2b9fe6441773c"],["assets/icons/css/ionicons.min.css","7c4ab673d7d467ee3ef1462107fd7465"],["assets/icons/css/ionicons.min.css.map","3bc06d23d0b097deb67638cd9d4af977"],["assets/icons/fonts/ionicons.eot","2c2ae068be3b089e0a5b59abb1831550"],["assets/icons/fonts/ionicons.svg","621bd386841f74e0053cb8e67f8a0604"],["assets/icons/fonts/ionicons.ttf","24712f6c47821394fba7942fbb52c3b2"],["assets/icons/fonts/ionicons.woff","05acfdb568b3df49ad31355b19495d4a"],["assets/images/Blog/Free/MI.png","e14bd71760a58b573a3359f546efe649"],["assets/images/Blog/Free/app.png","646575fe3cd3195609db9252fa35bfaf"],["assets/images/Blog/Free/consultation.png","fe0567480d4d617e0920cc47e18d1ff1"],["assets/images/Blog/Free/technology.png","29c8e67a37d61637e5b6a80a37122ae3"],["assets/images/Blog/Seminars/GP/a.jpeg","f56b95965a6a9435c5eb8386aad218e0"],["assets/images/Blog/Seminars/GP/b.jpeg","78dd6e946e5a0c6d10f35fae4d0035e9"],["assets/images/Blog/Seminars/GP/c.jpeg","51bb2a858f3b9d27bcd6f8d162842328"],["assets/images/Blog/Seminars/GP/d.jpeg","412881cff15f721afd92904bc0b41041"],["assets/images/Blog/Seminars/GP/e.jpeg","ff34ec768c83bd4838bcb5d1bf1c13f3"],["assets/images/Blog/Seminars/GP/f.jpeg","aa59a632c0d0850f0fec1f948b5ed1aa"],["assets/images/Blog/Seminars/GP/g.jpeg","c255fa5a6661e029cdb1c6513d97f3e7"],["assets/images/Blog/Seminars/GP/h.jpeg","0d098d5c5321229b035b7dffead34299"],["assets/images/Blog/Seminars/GP/i.jpeg","5ae8f9c191f7d1cda3b5694cd8a8f989"],["assets/images/Blog/Seminars/GP/j.jpeg","5b70216451c1c25811083ca0f05a86cb"],["assets/images/Blog/Seminars/GP/k.jpeg","c58ae9f4611f9cdd90ace4c967b926ff"],["assets/images/Blog/Seminars/GP/l.jpeg","0d543139eb18d2a16894178f71f933a0"],["assets/images/Blog/Seminars/GP/m.jpeg","ff34ec768c83bd4838bcb5d1bf1c13f3"],["assets/images/Blog/Seminars/GP/n.jpeg","40a09313ec41d8c68e78fb9a2e45bcc3"],["assets/images/Blog/Seminars/SCAD/scad_a.png","c91ed5934efe834c65f2f1fc7afb7fee"],["assets/images/Blog/Seminars/SCAD/scad_b.jpg","39df527480d5ef3a14d43b92f72e200b"],["assets/images/Blog/Seminars/SCAD/scad_c.jpg","2106123e5a98ac5104a71d73493afaa5"],["assets/images/Blog/Seminars/SCAD/scad_d.jpg","fcb5fcc4327fdbb4b01a8c221be1ade2"],["assets/images/Blog/Seminars/SCAD/scad_e.jpg","3ad598265a40d9888da0df5a57c3ed2e"],["assets/images/Blog/Seminars/SCAD/scad_f.jpg","8785b5bb6eccce159d6203d6db299425"],["assets/images/Blog/Seminars/SCAD/scad_g.jpg","2a704c11842627ec3ef38693676d34b1"],["assets/images/Blog/Seminars/SCAD/scad_h.jpg","1035ed782b11b72e74882f42704efb4f"],["assets/images/Blog/Seminars/SCAD/scad_i.jpg","adeb588874fc77d07aa40509535f95af"],["assets/images/Blog/Seminars/SCAD/scad_j.jpg","f7f8d862554a749160db1d31c2bc5f55"],["assets/images/Blog/Seminars/SCAD/scad_k.jpg","d73647e90af238747dad359f675c5666"],["assets/images/Blog/Seminars/SCAD/scad_l.jpg","1d7a6b802dd836b0f11f6b9958ed4983"],["assets/images/Blog/Seminars/SCAD/scad_m.jpg","62a08e1da18a2386ce2fab0581b369ab"],["assets/images/ELL-min.jpg","127d971f99ed69d8ed64aa94bf626a8c"],["assets/images/ELL.jpg","a85b5d50708796daabe8a15be3f39e61"],["assets/images/ELL2-min.jpg","007735079b3d829a8e25bc81865b8020"],["assets/images/ELL2.jpg","7736c071613a632f4f5871039c98788a"],["assets/images/Edu.png","4cdd5cd885ae14b5b736b22aa639a0a7"],["assets/images/Fin.jpg","f0c2aafe7b1b772414098bf084c3c47c"],["assets/images/Fina-min.jpg","a099553f96b87a32dca54ca48271b4a8"],["assets/images/Fina.jpg","c98b23ab07a148325f33d4623590269c"],["assets/images/MultipleIntelligence.png","cada8caaddd578a69daa3f839101468f"],["assets/images/Popup_Final.png","a8b4f70a671407f4c0bfa0bd72fec7f3"],["assets/images/Preloader.gif","2297bb1a3b1311ac6564fd870fed399c"],["assets/images/Robo.jpg","e93f128fc2d6b9e65639f26275ae2c3a"],["assets/images/Robo1-min.jpg","d7ba6e82cb4aae6fb085babf004c5cc3"],["assets/images/Robo1.jpg","95de917d7bc5dbf9dc4d1c8d15ef5f0b"],["assets/images/Robot-min.jpg","f6ce069af2ba22ec4911f299f0cd1c27"],["assets/images/Robot.jpg","621c1be1cddbca36b359d0b0e54b0c61"],["assets/images/advisors/hussain.png","94bf58fa23a85a79b3b97899e1de92c6"],["assets/images/advisors/paul.png","252b4c78476609d521fa096e97b2a1ee"],["assets/images/advisors/thiru.png","e1f8199a78a10576a55a22b3136d4076"],["assets/images/arrows.png","c3898cc4438a6b991c7ced7ea3be39f5"],["assets/images/bg-1.jpg","9d7863793623654259346c9eabfe5fce"],["assets/images/bg-2.jpg","800a1990ea53ded8d03a6770018ed24e"],["assets/images/bg-3-min.jpg","5d64d8cf661f6af29eecaefb257f07d6"],["assets/images/bg-3.jpg","45020daa3b109299847380ae563abcf3"],["assets/images/blank.gif","325472601571f31e1bf00674c368d335"],["assets/images/blog-2.jpg","d7c6d0fe7d3935323d3ad743910acc1c"],["assets/images/brainstorm.png","e4d3b835d190b14231c29027d388cb26"],["assets/images/brainstorm_active.png","9a5bc46e04f3c2fb802769ccc2713622"],["assets/images/cd-icon-small-arrow.svg","978355f974a709b33d8cdfe92bd03140"],["assets/images/clients/amarajyothi.jpeg","d9c71045eb4e74856a44c6040a581df3"],["assets/images/clients/amarajyothi_1.jpg","780f69c58b04ae0bfd6519d9388b9b04"],["assets/images/clients/donbosco.jpg","9386cb904e1119a9d6f5bf50fe26c5c7"],["assets/images/clients/donbosco_1.jpeg","54e3ccffd7ce2f1e9162bf5ed30f882b"],["assets/images/clients/gem.jpg","fa1d4bdc811392004fa4f283778d25af"],["assets/images/clients/gem_1.jpg","33f56983b69258931bfdc6295efc8691"],["assets/images/clients/sreesai.jpg","0c35b0b0528cc3b45565ab33f234c9fe"],["assets/images/clients/sreesai_1.png","e57f3bcde9a80f3c00b26b504e28452a"],["assets/images/clients/unitedpublic.png","15267618ab6b2727655992dc1f550d20"],["assets/images/clients/unitedpublic_1.jpg","542eb2df4e97c230e8fa6b0046e242f6"],["assets/images/clients/veegeevikas.jpg","3aa34931f13ab84eb919fcc0cddc2433"],["assets/images/clients/veegeevikas.png","b121201f8d74077068b2f34e961da2ac"],["assets/images/consultation.png","3902d43a56866b0e3ad8034e05487132"],["assets/images/cover 1-min.jpg","5ea22d0967337afd10f83663ecb19634"],["assets/images/cover 1.jpg","0a8cd3135e1798af6522f6a57e5954c7"],["assets/images/deliver.png","daa21736a5edb812bac3b83174ec88ce"],["assets/images/deliver_active.png","463fccb35448b153a24949645a9ac11a"],["assets/images/discuss.png","208084a58b8cbaf74052d1bd1dbc0fe5"],["assets/images/discuss_active.png","6f711f337fa3046348d8cd6b9f68ed01"],["assets/images/drink_cover.jpg","ab036baa978c2bb7cfdf46ec4de7a2ff"],["assets/images/edudefine-png-title.png","345f239a75e82eb7820f08de96616955"],["assets/images/edulogo.png","e166ebf865b5c685ee27b90f02e0d315"],["assets/images/fancybox_loading.gif","05d02ac2ee2cee9ca6018253549e05b4"],["assets/images/fancybox_loading@2x.gif","d81866910128a921a2968454392aa7af"],["assets/images/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["assets/images/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["assets/images/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["assets/images/free/MI.png","e14bd71760a58b573a3359f546efe649"],["assets/images/free/app.png","646575fe3cd3195609db9252fa35bfaf"],["assets/images/free/consultation.png","fe0567480d4d617e0920cc47e18d1ff1"],["assets/images/free/technology.png","29c8e67a37d61637e5b6a80a37122ae3"],["assets/images/ipad.png","f393380e5f603b0b8ccd34009dafdf8b"],["assets/images/learn.png","4e080f4aabc1b7dd60cb4331c5890ec3"],["assets/images/learn_active.png","81371759f078174bff60bd7f9551db1e"],["assets/images/logo-dark.png","98be6ee2fcfaac1ac1b35c12bb412c8c"],["assets/images/logo-light.png","d515caf53ad2e476da11cfcec5a334ae"],["assets/images/logo.png","a9ba08835f7429998c6b0d4f5a5d0623"],["assets/images/map-bg.jpg","4d95f54f8a643e38e06285f66ccd75cf"],["assets/images/mas-1.jpg","309c8981ea785940d7686e8d60d5d228"],["assets/images/mas-2.jpg","2bd9ed95a5cb5ef0f839a9946a722728"],["assets/images/mas-3.jpg","2dcef93ac7133f2c593e263eb734f597"],["assets/images/para-2-min.jpg","42f94ab0466944305cc9797a747ea98c"],["assets/images/pattern.png","9bf22b3d432daef67d2cd80002254179"],["assets/images/redefining png title.png","4658fe401da83760d9a078a9aa686220"],["assets/images/star-cover.jpg","0d35ff7a17ea0fb33ce026b7c9271c49"],["assets/images/suggest.png","2dbcacca1b16493a619e4dd8fdd8baef"],["assets/images/suggest_active.png","8302fe3b440c071c1fb4d8cbe9479bdb"],["assets/images/support.png","877b9bf81acb38673dca5731fb22d47a"],["assets/images/support_active.png","274b131f0cf8726ef50fe403a66f3f65"],["assets/images/tagtik.png","84fe2c93e0826bbb15757a6beed79d33"],["assets/images/team-1.jpg","72f7e051066b47805dbc37344ba0739e"],["assets/images/team-2.jpg","274ca952c48f4e2ea46ebc31b96263ed"],["assets/images/team-3.jpg","6a28f9f126cbbbd1c84904de33bdbd87"],["assets/images/team-4.jpg","71a0056c44dc8ac6c4c3ec072d6f5cd1"],["assets/images/title new edudefine.png","1f32eac0f395df67362383bd94ec546b"],["assets/images/typing-cover.jpg","81e66718a7c0dff9fae16838f24cc1ba"],["assets/images/work-1.jpg","8362fd68d3710b1b1a5a6fd9e8d8ac8a"],["assets/images/work-2.jpg","9583cb7b5e762e905a6b7c45757894ea"],["assets/images/work-3.jpg","9c8070e4f68a142bfbd0a8ca2272b186"],["assets/images/work-4.jpg","d0f12fb63bc5cb8418f4f794863d2874"],["assets/images/work-5.jpg","575056ca949c1d76e2d214c5850de7ff"],["assets/images/work-6.jpg","888419a167e706736177f7f413914b3d"],["assets/images/work-7.jpg","fb601eded5bba29f0531f994419bf50e"],["assets/images/work-8.jpg","f185e7a42f71d390534f6ce6aa368fea"],["assets/js/bootstrap-hover-dropdown.min.js","f1cdaae7f695786711916cc67b5c6b99"],["assets/js/bootstrap.min.js","e1b34619e1f3c79f31b58694f98eb058"],["assets/js/foofysjs.min.js","f7df2de125ae64bcbbfc95f0d01721a7"],["assets/js/jquery-migrate-1.2.1.min.js","1d21140bd6c7f281b5ab6c11a34a1cca"],["assets/js/jquery-migrate.min.js","a2fadfa708533f82cb254d5461adf996"],["assets/js/jquery.backstretch.min.js","94c6b305e6a9824d493f4cc41446ecf2"],["assets/js/jquery.cubeportfolio.min.js","1a8ee0ca803c59c49f704958779c79e6"],["assets/js/jquery.easing.1.3.min.js","d208d826237edcc6f4db2ef73439a9b3"],["assets/js/jquery.fancybox.min.js","4c770604a3e1a08e61a49691efeaceed"],["assets/js/jquery.flexslider-min.js","f4b27ad01e846dea74db4f7d4bda67a0"],["assets/js/jquery.imagesloaded.min.js","5870ef75d7337cb0f51e8a30fb673b8f"],["assets/js/jquery.magnific-popup.min.js","6e1753850820662d71a7fa0181001f3c"],["assets/js/jquery.min.js","c553ab952dd1deec35514000d8d14663"],["assets/js/jquery.sticky.min.js","f6683a9d5a197c08e69dd73406249c1e"],["assets/js/jquery.themepunch.revolution.min.js","cbb15e9153cc77f00771a4b68a308602"],["assets/js/jquery.themepunch.tools.min.js","149e65f60e96165e74505865516ac49e"],["assets/js/masterslider.min.js","22cd3d3bd4db4d8c823df5554cb96a56"],["assets/js/moderniz.min.js","c633fdfb27f9df14640e59da0f1bc1fe"],["assets/js/pace.min.js","0bec5c20d5ed60da7fc3a23e274f2249"],["assets/js/parallax.min.js","247a427b4b517604d410d74e03793abc"],["assets/js/scripts.min.js","9fd9c28f4cd9ca90dc9e66a2ccf95794"],["assets/js/tweetie.min.js","640cb18e65c9ae6b4bae8d6449a56e9f"],["assets/js/waypoints.min.js","7107a01d273fb4840c86b701af79dcb0"],["assets/js/wow.min.js","c22e09880629eec790bf7d221fc514f3"],["assets/mailchimp/MCAPI.class.php","bc941ee460818007df929d5b7f6b68e2"],["assets/mailchimp/config.inc.php","d759b8ce1faaa093b27ad35b7b7cf67e"],["assets/mailchimp/index.html","4dedebf4518fe85439fa46203b2eead8"],["assets/mailchimp/process-subscribe.php","55f77ad3e0220e9f19ab84af65f94d90"],["assets/master-slider/skins/black-1/black-skin-1-retina.png","9b70954998b986be6895c3151a3cb6ea"],["assets/master-slider/skins/black-1/black-skin-1.png","d178f53efeaefaf048bad5e3c87f243d"],["assets/master-slider/skins/black-1/style.css","79df2f0e1457abd146495e63f677f9cd"],["assets/master-slider/skins/black-1/style.css.map","0236ffcd44b643eacf7a0df4010ad9d9"],["assets/master-slider/skins/black-2/black-skin-2-retina.png","f9b1258dcf6daaf01cde61ac04854444"],["assets/master-slider/skins/black-2/black-skin-2.png","4935feffb4ad53beff09b95654f9b10f"],["assets/master-slider/skins/black-2/style.css","a6635e2694a0d80278efaa2f94637ae9"],["assets/master-slider/skins/black-2/style.css.map","e80195068196416f685862f787e11298"],["assets/master-slider/skins/contrast/contrast-skin-retina.png","39574691a3644bb61cc5c8491dbb468c"],["assets/master-slider/skins/contrast/contrast-skin.png","34ce131f805cd6fd5a55ee67b335cdeb"],["assets/master-slider/skins/contrast/style.css","24fb6c7b566b7d1d436e7993a89c0896"],["assets/master-slider/skins/contrast/style.css.map","242af51efc75a41e3a5a0f1d429209d3"],["assets/master-slider/skins/default/light-skin-1-retina.png","09be0c3e0644f14919e291b4381b63db"],["assets/master-slider/skins/default/light-skin-1.png","f0711cad176ce82622ee227595303c4a"],["assets/master-slider/skins/default/style.css","dd442c2f932779f63a021fba8dcfd86b"],["assets/master-slider/skins/default/style.css.map","196dfa4c09eecdecd60d46b3f35757a7"],["assets/master-slider/skins/light-2/light-skin-2-retina.png","61204fd8ff3b26518baaeec516840b21"],["assets/master-slider/skins/light-2/light-skin-2.png","db5e0ad7ac70fa60ea5a0fb0950b8349"],["assets/master-slider/skins/light-2/style.css","64fcea85fe78589f55bf5fd99a4c6b27"],["assets/master-slider/skins/light-2/style.css.map","0e10acca24475c9bafa5916066232736"],["assets/master-slider/skins/light-3/light-skin-3-retina.png","f667898ea5cb6f09e529904b84669e72"],["assets/master-slider/skins/light-3/light-skin-3.png","764188285eef754b876d33c9cee2bcc4"],["assets/master-slider/skins/light-3/style.css","196467019c480aac0f8bae06a4d015e8"],["assets/master-slider/skins/light-3/style.css.map","f149cf60dabaa05ab657d8bb299c90aa"],["assets/master-slider/skins/light-4/light-skin-4-retina.png","e12d83409593cdf24c3bb4cf2b3d4015"],["assets/master-slider/skins/light-4/light-skin-4.png","e6da74c865a8781dab309f5d6e6339f7"],["assets/master-slider/skins/light-4/style.css","8d8e97dbaeaa1a390368576d25995b69"],["assets/master-slider/skins/light-4/style.css.map","6bbcb2cd6c4018509ef8e8b22a8749dd"],["assets/master-slider/skins/light-5/light-skin-5-retina.png","8303842e1b459b29008a3e1ae595d124"],["assets/master-slider/skins/light-5/light-skin-5.png","bc429107004eada87d6a512b5b5d1c64"],["assets/master-slider/skins/light-5/style.css","854653e2cfb07d0c5f5d31d2da72f488"],["assets/master-slider/skins/light-5/style.css.map","fad8a899fddf6b00982b3582837e8169"],["assets/master-slider/skins/light-6/light-skin-6-retina.png","addfa591290d5e052f152ce0d18541ee"],["assets/master-slider/skins/light-6/light-skin-6.png","1eaf485f56a946b27e338480b92f4f27"],["assets/master-slider/skins/light-6/style.css","10a0137b8fffb787412d75412fa8a7eb"],["assets/master-slider/skins/light-6/style.css.map","4adc05d7091276d2dbc89df286a2b5eb"],["assets/master-slider/skins/metro/metro-skin-retina.png","df3aaa92268f4c7b8473540f78e5bfde"],["assets/master-slider/skins/metro/metro-skin.png","cee1816617d12661e297eec8b5a064c1"],["assets/master-slider/skins/metro/style.css","9ae1c8e1c5ece80b42caf20eb546ba54"],["assets/master-slider/skins/metro/style.css.map","3a0e0759bf3e629da4898aadc5d94b67"],["assets/master-slider/style/blank.gif","f837aa60b6fe83458f790db60d529fc9"],["assets/master-slider/style/flat-phone-land.png","1217287038e35ed6c9c272e01b866c1f"],["assets/master-slider/style/grab.cur","b06c243f534d9c5461d16528156cd5a8"],["assets/master-slider/style/grab.png","c82d4a6bf8f38c6abdc6b3055ae7e17d"],["assets/master-slider/style/grabbing.cur","a8c874b93b3d848f39a71260c57e3863"],["assets/master-slider/style/grabbing.png","ab31513462871dc591384c4d158ad560"],["assets/master-slider/style/loading-1-dark.gif","fc991f2369cb3bb0571e6b599f729722"],["assets/master-slider/style/loading-1-light.gif","2522c2301e8a06e3bda5e68e7102cbb1"],["assets/master-slider/style/loading-1.gif","c2c94f96e3c815b6cb15aa88cbca7a9f"],["assets/master-slider/style/loading-2-dark.gif","bc93d2df25b7554da19ceaf9ff0ee67f"],["assets/master-slider/style/loading-2-light.gif","4bd62de33c4c6446beebcb8aa20249d2"],["assets/master-slider/style/loading-2.gif","214f3c5ef3de8b01b2fe67da6ccfc7e7"],["assets/master-slider/style/masterslider.css","a298cfd55246f96434dd6d26eaed4d55"],["assets/master-slider/style/masterslider.css.map","8e9a150f1ffcb47a9328dc20c9b5cb2e"],["assets/master-slider/style/ms-phone-style.css","6cd9519cea585c05d8f0d42543b0bf5d"],["assets/master-slider/style/ms-phone-style.css.map","23e9f35cdb9824c8aa0a095720fd71ab"],["assets/master-slider/style/skin.png","b8441a9b02e3354121ab260cf70ce411"],["assets/master-slider/style/video-close-btn.png","2fad20bdee650136e94da131e2386587"],["assets/rs-plugin/assets/arrow_large_left.png","6d2d479d643263a75a95b4cf9f33032c"],["assets/rs-plugin/assets/arrow_large_right.png","df39e233d9c5c60855293b09fc77cd86"],["assets/rs-plugin/assets/arrow_left.png","56458574dfbdc004d385499c968c516b"],["assets/rs-plugin/assets/arrow_left2.png","904f4a773b15b429b665a6c6e79ff104"],["assets/rs-plugin/assets/arrow_right.png","528f50a273ef6fa047f7376ca321d6d7"],["assets/rs-plugin/assets/arrow_right2.png","81d17d06ca481b690b3a116ba7a7f25b"],["assets/rs-plugin/assets/arrowleft.png","312c31a080e0c3ed0bbdfb953bd8cc70"],["assets/rs-plugin/assets/arrowright.png","9a98951eeb045dc3dfb9cdd3c68dc87a"],["assets/rs-plugin/assets/arrows.psd","dfb33be3fd58d5fa6efef7b9c2a13c4f"],["assets/rs-plugin/assets/black50.png","607039adaa52c099043af7b1a5d359b6"],["assets/rs-plugin/assets/boxed_bgtile.png","850c2108a300513e45f03c7dc9326546"],["assets/rs-plugin/assets/bullet.png","09f2d370b116ede485daa168eca058b5"],["assets/rs-plugin/assets/bullet_boxed.png","39cf708d6731424fa1569907676c2cbd"],["assets/rs-plugin/assets/bullets.png","198fa59d622688f36a1f760ea00115ef"],["assets/rs-plugin/assets/bullets.psd","d0327d58ae0d9f8bdd836184c8fe739f"],["assets/rs-plugin/assets/bullets2.png","8a6714867943152949276189668d6125"],["assets/rs-plugin/assets/coloredbg.png","403b2ccc022f9f264a31dec760bd55b9"],["assets/rs-plugin/assets/grain.png","6bce366e2713a84aa4297003b804de8f"],["assets/rs-plugin/assets/gridtile.png","3888ecc03086ee849014409a07864ba6"],["assets/rs-plugin/assets/gridtile_3x3.png","fd995e40c1acad690d12d245d48663ae"],["assets/rs-plugin/assets/gridtile_3x3_white.png","dccf4b08b92c4480debf11b5cbb2cdf4"],["assets/rs-plugin/assets/gridtile_white.png","ab9ca7a1eb5d4a6de6f2ffc8ccfd105c"],["assets/rs-plugin/assets/large_left.png","f7dd4aee8ebb28b7c88509f3e43383fb"],["assets/rs-plugin/assets/large_right.png","167358b175dce48971d149a3973c8ffe"],["assets/rs-plugin/assets/loader.gif","3fd27945212db12ca133d3e634953af6"],["assets/rs-plugin/assets/loader2.gif","75ee3dd2201bb7577f94b128ffb399ee"],["assets/rs-plugin/assets/navigdots.png","2915fa321fa0ac4d3d594542eca0eb2d"],["assets/rs-plugin/assets/navigdots_bgtile.png","6dd796a92f8ff07b64e06e7915d22a38"],["assets/rs-plugin/assets/shadow1.png","6558580a951ef6d685451f8272d6f2ec"],["assets/rs-plugin/assets/shadow2.png","c2a6ff678855127a164a64fb08eed1a3"],["assets/rs-plugin/assets/shadow3.png","2ceabc7593430639c7c11d7d266d5f7b"],["assets/rs-plugin/assets/small_arrows.psd","3da76f1ee501fd5db2e8c33eb91863fd"],["assets/rs-plugin/assets/small_left.png","e9afdf79eeef5d86b520cdbe73d91fcd"],["assets/rs-plugin/assets/small_left_boxed.png","f750ed4e89c4391ba1fb5d532a441467"],["assets/rs-plugin/assets/small_right.png","7c415d24f90c1d673b25bf0b1f2cf468"],["assets/rs-plugin/assets/small_right_boxed.png","1609b70a465389bfe1944d108d55354c"],["assets/rs-plugin/assets/timer.png","0cbab8b24884682ef93daad1c66cba1e"],["assets/rs-plugin/assets/timerdot.png","4befdd0dbf996d971a7cb70fe62e36fa"],["assets/rs-plugin/assets/transparent.jpg","391ded01873db90453e899775f910f8c"],["assets/rs-plugin/assets/white50.png","14e0213a1a5921bd9b9de997c1da4c53"],["assets/rs-plugin/css/settings-ie8.css","06561c86dedf1bbd334a638ccc1dc635"],["assets/rs-plugin/css/settings-ie8.css.map","190c1584bf261a35cc774d143c43ed71"],["assets/rs-plugin/css/settings.css","b15406109f98f3fb43e92a929f18df0b"],["assets/rs-plugin/css/settings.css.map","eee2a0c8ac9555af2de925a9cd2d0525"],["assets/rs-plugin/font/revicons.eot","2feb69ccb596730c72920c6ba3e37ef8"],["assets/rs-plugin/font/revicons.svg","5ad4f0d6e99dd65aba77cbef6e17c25c"],["assets/rs-plugin/font/revicons.ttf","17629a5dfe0d3c3946cf401e1895f091"],["assets/rs-plugin/font/revicons.woff","04eb8fc57f27498e5ae37523e3bfb2c7"],["assets/rs-plugin/images/decor_inside.png","6c809a6151b431c305162101d2683724"],["assets/rs-plugin/images/decor_inside_white.png","daabaceea43f2491ebd614d315d55fb8"],["assets/rs-plugin/images/decor_testimonial.png","1a5870fb2db17787ec5049fbd05789ba"],["assets/rs-plugin/images/gradient/g30.png","9cdf24e5e370571e56e2974ebdb2bce8"],["assets/rs-plugin/images/gradient/g40.png","2108e8ded803878342488b6fd89c78ff"],["assets/twit-api/config.php","ae9f512f5b13e7213adad5f7e28230a0"],["assets/twit-api/tweet.php","e609fdc519075a645494b1560662bb6d"],["assets/twit-api/twitteroauth/OAuth.php","d7b40029f9d61580663a04727d166156"],["assets/twit-api/twitteroauth/twitteroauth.php","c329e25121783a292524acaea23bb28d"],["assets/video-background/background.css","dfda29dcffaeb6b49d48bb0c6d45b576"],["assets/video-background/background.css.map","35ba59cf47bd69f2136580a29718b964"],["events.html","8c6545290ca5d50c790b3b275d674588"],["index.html","32bb924d63f7248098dee15d42a1357b"],["manifest.json","59b047a6f2cd70c68657fe7a882f4f87"],["newyear.html","79c30524682066444381f11b9eddb4ae"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-EduDefine-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




