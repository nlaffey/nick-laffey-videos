// account 83295, package f57cdbdf
var _sz = _sz || [];
_sz.push([
  "accountid",
  83295
]);
_sz.push([
  "metagroupname",
  "TESTMETAGROUP"
]);

_sz.push(["custom", function() {
if(window.jQuery){

$('.vidlist li').mousedown(function(){
    _sz.push(['event' , 'Video List' , 'Click' , $(this).text()]);
});

$('.title a').mousedown(function(){
    _sz.push(['event' , 'Contact Info' , 'Click' , $(this).attr('href')]);
});

}
}, 'Event Tracking']);

_sz.push(["custom", function() {
var path = "";
(function(d) {
            var _bc = [];
            if(d.getElementsByClassName && (_bc = d.getElementsByClassName('vidlist')) && _bc.length > 0) {
                         _bc = _bc[0];
                         path = (_bc.innerText || _bc.textContent);
            }
})(document);
}, 'Groups']);

_sz.push(["custom", function() {
/*
var searchWord = "test";
var numberOfHits = "241";

var sw = "test2";
var numberOfHits = "999";

_sz.push(['sw', 'test3']);
_sz.push(['hits', "555"]);
*/
}, 'Internal Search']);

_sz.push(["custom", function() {
    if (window.location.pathname === '/analyticsTest/') {
        _sz.analytics.config.cantrack = false;
(function($) {

        function pushHash() {
            var a = window.location.href,
                b = a.replace(/\/?#\/?/, '/hash/');
            _sz.analytics.state.tracked = false;
            _sz.push(['ourl', b ]);
            _sz.push(['title', document.title]);
            _sz.push(['luid', _sz.core.uuid()]);
            _sz.push(['trackpageview']);
            _sz.push(['dump']);
        }

        if (window.location.href.indexOf('#') > -1) {
            _sz.analytics.config.cantrack = true;
            pushHash();
        } else {
            _sz.analytics.config.cantrack = true;
            _sz.push(['trackpageview']);
        }

        window.onhashchange = pushHash;

})(window.jQuery);
    }


}, 'Hashchange']);

var _sz = _sz || [];

// CORE
(function(w, d, sz, undefined) {
    var core = {
        'curr':  window.location.href,
        'ref': d.referrer,
    'esc':   function(str) { return encodeURIComponent(new String(str).replace(/(\r?\n)+/g, ' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '')); },
    'empty': function(e)   { return (e == undefined || e == null || e == ""); },
    'tag':   function(str) { return (d.getElementsByTagName) ? d.getElementsByTagName(str) : []; },
    'id':    function(str) { return (d.getElementById) ? d.getElementById(str) : false; },
    'clone': function(o)   { var n = {}; for(var i in o) { if(o.hasOwnProperty(i)) n[i] = o[i]; } return n; },
    'rnd':   function()    { return Math.floor(Math.random() * 100000); },
    'txt':   function(o)   { return (o.textContent) ? o.textContent : o.innerText; },
    'uuid':  function()    {
      var S4 = function() {
         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    'navtime': function() {
      return (w['performance']) ? (new Date).getTime() - performance.timing.navigationStart : null;
    },
    '_isready': false,
    '_readyhandlers': [],
    'register': function(n,f) { f.base = this.actions[n]; this.actions[n] = f; },
    'actions': {},
    'action': function(n,a) { /*if(typeof a == "object" && a.length === undefined) a = [a];*/ this.actions[n].apply(this.actions, a); },
    'data': [],
    'ready': function(f) { if(f === undefined) { return this._isready || core.done(); } else { this.when(this.ready, f); } },
    //'queueready': function(f) { this.ready() ? f() : this._readyhandlers.push(f); },
    'done':  function() { return (this._isloaded && d && d.body != null && (d.readyState == "interactive" || d.readyState == "complete")); },
    '_isloaded': false,
    'when': function(cond, what) { cond() ? what() : setTimeout(function() { core.when(cond, what) }, 50); },
    'fmt':   function() {
      var _a = Array.prototype.slice.call(arguments);
      var s = _a[0];
      var a = _a.slice(1);
      for (var i=0; i<a.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, a[i]);
      }

      return s;
    },
    'listen':function(e,h) {
      if(e.addEventListener) { e.addEventListener('mousedown', h, false); }
      else if(e.attachEvent) { e.attachEvent('onmousedown', h); }
    },
    'load': function(src) {
      var szfb = d.createElement('script'); szfb.type = 'text/javascript'; szfb.async = true;
      szfb.src = src;
      var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(szfb, s);
    },
    'global': function(n) { return (w[n] !== undefined && w[n] !== null) ? w[n] : null; },
        '_images': [],
        '_idx': 0,
    'requesturl': function(p, o) {
      var params = [];
      o.rnd = sz.core.rnd();

      for(i in o) {
        if(this.empty(o[i])) continue;
        params.push(i + '=' + this.esc(o[i]));
      }

            var i = this._idx++,
                url = p + '?' + params.join('&');

      return url;
    },
    'request': function(p, o) {
      var url = this.requesturl(p, o);
            this._images[i] = new Image();
            this._images[i].src = '//' + url;

      this.log('Requesting {0}', url);
    },
    '_logqueue': [],
    '_logshown': false,
    'log': function() { this._logqueue.push({type: 'msg', msg: Array.prototype.slice.call(arguments)}); if(this._logshown) this.showlog(); },
    'warn': function() { this._logqueue.push({type: 'warn', msg: Array.prototype.slice.call(arguments)}); if(this._logshown) this.showlog(); },
    'showlog': function() {
      this._logshown = true;
      var dw = d.getElementById('szdebugarea');
      if(dw) dw.parentNode.removeChild(dw);

      core.cookie('szngdebug', 1);

      var s = '';
      for(var i=0; i<this._logqueue.length; i++) {
        var o = this._logqueue[i];
        s += '<p style="padding:8px;margin:0;margin-bottom:8px;background:#' + (o.type == 'msg' ? 'FFF7C9' : 'ca0000;color:white') + ';">'
          + ((o.type == 'warn') ? '<b>Warning:</b> ' : '' ) + decodeURIComponent(new String(this.fmt.apply(this, o.msg)).replace(/(&[a-z_]+=|\?)/g, '<br />&nbsp;&nbsp;&nbsp;$1'))
          + '</p>';
      }

      var _e, _c;
      _c = d.createElement('a');
      _c.href='#';
      _c.innerHTML='\u00D7 Close';
      _c.style.cssText='display:block;float:right;color:black;text-decoration:none;';
      _c.onclick = function(e) {
        _e.parentNode.removeChild(_e);
        core._logshown = false;
        core.cookie('szngdebug', null);
        return false;
      };

      _e = d.createElement('div');
      _e.style.cssText='position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999';
      _e.innerHTML=s;
      _e.id='szdebugarea';
      _e.appendChild(_c);

      d.body.appendChild(_e);
    },
    'cookie': function(n,v,o) {
      if (typeof v != 'undefined') { // set cookie
        o = o || { path: '/' };
        if (v === null) {
          v = '';
          o.expires = -1;
        }
        var expires = '';
        if(o.expires && (typeof o.expires == 'number' || o.expires.toUTCString)) {
          var date;
          if (typeof o.expires == 'number') {
            date = new Date();
            date.setTime(date.getTime() + (o.expires * 24 * 60 * 60 * 1000));
          } else {
            date = o.expires;
          }
          expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = o.path ? '; path=' + (o.path) : '; path=/';
        var domain = o.domain ? '; domain=' + (o.domain) : '';
        var secure = o.secure ? '; secure' : '';
        d.cookie = [n, '=', encodeURIComponent(v), expires, path, domain, secure].join('');
      } else { // get cookie
        var cookiev = null;
        if (d.cookie && d.cookie !== '') {
          var cookies = d.cookie.split(';');
          for (var i=0; i<cookies.length; i++) {
            var cookie = cookies[i].replace(/^\s+|\s+$/g, "");
            if(cookie.substring(0, n.length + 1) == (n + '=')) {
              cookiev = decodeURIComponent(cookie.substring(n.length + 1));
              break;
            }
          }
        }
        return cookiev;
      }
    }
  };

  core.register('set', function(name, val) {
    var parts = name.split('.'),
        prop = sz,
        key;

    while(parts.length > 0) {
      key = parts.shift();
      if(prop[key] === undefined) { prop = 0; break; }
      if(parts.length == 0) break;
      prop = prop[key];
    }

    (prop && key)
      ? prop[key] = val
      : core.warn('No property named {0}', name);
  });

  core.register('register', function(args) {
    core.register(args[0], args[1]);
  });

  core.register('custom', function(f, name) {
    var msg = 'Running custom function';
    if(name && name != '') msg += ': <strong>' + name + '</strong>';
    core.log(msg);

    try {
      f();
    } catch(e) {
      core.warn('Custom function failed! ' + e.message);
    }
  });

  core.register('setcurr', function(v) {
    core.curr = v;
  });

  core.register('setref', function(v) {
    core.ref = v;
  });

  core.register('loaded', function() {
    core._isloaded = true;
  });

  core.register('showlog', function() {
    core.showlog();
  });

  function process(args) {
    var name = args[0];
    if(core.actions[name] === undefined) {
      core.action('set', args);
    } else {
      core.action(name, args.slice(1));
    }
  };

  var data = [];
  var orig = [];
  for(var i=0; i<sz.length; i++) { data[i] = sz[i]; orig[i] = sz[i]; }
  core.data = data;

  core.ready(function() {
    for(var i=0; i<orig.length; i++) {
      process(orig[i]);
    }

    while(core._readyhandlers.length > 0) {
      _readyhandlers.shift().call();
    }

    core._isready = true;
  });

  sz.push = function(args) {
    core.data.push(args);

    core.ready()
      ? process(args)
      : core.data.push(args);
  };

  sz.core = core;

})(window, document, _sz);

(function(w, d, sz, undefined) {

    // INTERNAL MEMBERS

    var opts = {
        'url': w.location.href,
        'ref': d.referrer,
        'title': d.title,
        'res': w.screen.width + 'x' + w.screen.height,
        'accountid': null,
        'groups': null,          // siteanalyze content group(s)
        'session': null,         // site session id
    'path': null,            // breadcrumb path
    'hits': null,            // number of hits
    'sw': null,              // search word
    'ct': null,              // cookie type
    'ft': null,              // file type
    'guid': null,            // GUID
    'uid': null,             // user id
    'cid': null,             // site id
    'cvid': null,            // virtual id
    'rt': sz.core.navtime(), // response time
    'prev': null,            // previous session
    'useurl': null,          // force use of provided URL
    'ourl': null ,            // override url so FT respects it
    'luid': sz.core.uuid(),  // uuid for pageview
    'feedbackid': null,      // id of feedback config
        'addcid': null           // duplicate to site id
  };

  sz.analytics = {
    config: {
      cantrack: true,
      noonclick: ['nicklaffey.com'],
      ready: true
    },
    cookie: {
      name: 'nmstat',
      domain: d.domain
    },
    endpoint: {
      host: 'us2',
      domain: 'siteimprove.com',
      path: 'image.aspx',
      fullpath: function(host,path) {
        if(!path) { path = host; host = this.host; }
        return (host || this.host) + '.' + this.domain + '/' + (path || this.path);
      }
    },
    state: {
      requested: false,
      requestTime: new Date()
    },
    opts: function(k) { return opts[k]; }
  };

  function getsessid() {
    if(sz.analytics.config.cantrack) {
      var c = sz.core.cookie(sz.analytics.cookie.name);
      if(!c) {
        var c = (new Date()).getTime() + sz.core.rnd();
        sz.core.cookie(sz.analytics.cookie.name, c, { expires: 1000, domain: sz.analytics.cookie.domain });
      }

      return c;
    } else {
      return '';
    }
  }

  function request(path, o) {
    o.prev = getsessid();
    sz.core.request(path, o);
  }

  function requesturl(path, o) {
    o.prev = getsessid();
    return sz.core.requesturl(path, o);
  }

  function registeronclick(except) {
    if(!sz.analytics.config.cantrack) return;

    var exclude = function(url) {
      try {
        if(l.href == null ||
           l.href == '' ||
           l.href.toLowerCase().indexOf('javascript:') == 0 ||
           l.href.indexOf('#') == 0 ||
           l.href.charAt(l.href.length-1) == "#" ||
           l.href == w.location.href ||
           l.href.indexOf(w.location.href + '#') == 0) {
           return true;
        }

        if(!(except instanceof Array)) return false;

        for(var i=0; i<except.length; i++) {
          if(url.indexOf(except[i]) !== -1) {
            return true;
          }
        }

        return false;
      } catch(err) {
        return true;
      }
    };

    var links = sz.core.tag('a');
    for(var i=0; i<links.length; i++) {
      var l = links[i];
      if(exclude(l.href)) { continue; }
      (function(link) {
        sz.core.listen(link, function() {
          sz.push(['request', {
            'ourl': link.href,
            'ref': w.location,
            'autoonclick': 1
          }]);
        });
      })(l);
    }
  }

  function findguid() {
    if(!sz.core.empty(opts.guid)) return;

    var guid = sz.core.global('guid');
    if(!guid) {
      for(var i=0; i<d.forms.length; i++) {
        var tmpguid = d.forms[i].action.toString().toUpperCase();
        if(~tmpguid.indexOf('NRNODEGUID')) {
          guid = tmpguid.substr(tmpguid.indexOf('NRNODEGUID')+11);
          if(guid.indexOf('%7B') == 0) {
            guid = guid.substr(3, guid.indexOf('%7D')-3);
          }
          sz.core.log('Found nrnodeguid: {0}', guid);
          break;
        }
      }
    }

    opts.guid = guid;
  };

  function legacy(varname, optname) {
    var val = sz.core.global(varname);
    if(val) {
      if(optname && optname in opts) {
        opts[optname] = val;
      } else if(typeof val == "object") {
        sz.push(['param', val]);
      } else {
        sz.core.warn('Nowhere to put legacy {0} (key {1}, value {2})', varname, optname, val);
      }
    }
  }

  var eventorder = 0;

  function eventparams(category, action, label) {
    return {
      aid: opts.accountid,
      luid: opts.luid,
      c: category,
      a: action,
      l: label,
      cid: opts.cid,
      cvid: opts.cvid,
      o: ++eventorder,
      d: Math.round((new Date() - sz.analytics.state.requestTime)/1000)
    };
  }

  sz.core.register('eventurl', function(category, action, label, callback) {
    if(!callback) {
      sz.core.warn('You must provide a callback function');
      return;
    }

    if(!category || !action || !sz.analytics.config.cantrack) {
      sz.core.warn('Category and action must be provided for event.');
      return;
    }

    var url = requesturl(sz.analytics.endpoint.fullpath('event.aspx'), eventparams(category, action, label));
    callback(url);
  });

  sz.core.register('event', function(category, action, label) {
    if(!category || !action || !sz.analytics.config.cantrack) {
      sz.core.warn('Category and action must be provided for event.');
      return;
    }

    request(sz.analytics.endpoint.fullpath('event.aspx'), eventparams(category, action, label));
  });

  sz.core.register('legacy', function(varname, propname) {
    if(propname !== undefined) {
      sz.core.log('Setting legacy variable {0}, property {1}', varname, propname);
      legacy(varname, propname);
    } else {
      sz.core.log('Setting legacy variable {0}, property {0}', varname);
      legacy(varname);
    }
  });

  sz.core.register('dump', function() {
    console.debug(sz.analytics);
    console.debug(opts);
  });

  sz.core.register('noonclick', function(v) {
    sz.analytics.config.noonclick = v;
  });

  sz.core.register('set', function(name, value) {
    if(opts.hasOwnProperty(name)) {
      opts[name] = value;
    } else {
      this.set.base(name, value);
    }
  });

  sz.core.register('breadcrumbs', function(selector) {
    if(!selector || !d.querySelector) return;
    var bc = d.querySelector(selector);
    if(bc) {
      opts.path = sz.core.txt(bc);
    }
  });

  sz.core.register('groupselector', function(selector) {
    if(!selector || !d.querySelectorAll) return;
    var res = d.querySelectorAll(selector), groups = [];
    for(var i=0; i<res.length; i++) {
      var t = sz.core.txt(res[i]);
      if(t != null) groups.push(t);
    }
    if(groups.length > 0) {
      opts.groups = groups.join(',');
      sz.core.log("Groups set: {0}", groups.join(', '));
    }
  });

  sz.core.register('metagroupname', function(name) {
    var me = sz.core.tag('meta'), gc = [];
    if(opts.groups) gc.push(opts.groups);
    for(var i=0; i<me.length; i++) {
      if(me[i].name == name)
        gc.push(me[i].content);
    }
    if(gc.length > 0)
      opts.groups = gc.join(',');
  });

  sz.core.register('param', function(n,v) {
    if(typeof n == "object") {
      for(i in n) sz.push(['param', i, n[i]]);
    } else {
      sz.core.log('Param {0} = {1}', n, v);
      opts['grk_' + n] = v;
    }
  });

  sz.core.register('request', function(data) {
    if(data.accountid === undefined) data.accountid = opts.accountid;
    request(sz.analytics.endpoint.fullpath(), data);
  });

  sz.core.register('trackpageview', function() {
    var c = sz.analytics;
    if(!c.state.tracked && c.config.cantrack && c.config.ready) {
      request(c.endpoint.fullpath(), opts);
      c.state.tracked = true;
      c.state.requestTime = new Date();
    }
  });

  sz.core.register('notrack', function(v) {
    if(v === undefined) v = true;

    if(v) {
      sz.core.cookie('sz_notrack', 'true', { expires: 1825 });
    } else {
      sz.core.cookie('sz_notrack', null);
    }

    sz.analytics.config.cantrack = !v;
  });

  sz.tracking = function() {
    return sz.analytics.config.cantrack;
  };

  sz.core.ready(function() {
    if(sz.core.cookie('sz_notrack') !== null) {
      sz.push(['notrack']);
    }

    legacy('searchWord', 'sw');
    legacy('numberOfHits', 'hits');
    legacy('_szpars');

    findguid();
    sz.push(['trackpageview']);

    if(sz.analytics.config.noonclick !== true) {
      registeronclick(sz.analytics.config.noonclick);
    }
  });
})(window, document, _sz);
_sz.core._isloaded = true;

