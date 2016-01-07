// Ivan's Workshop
var competitionsRaw = {
  '海边派对的搭配': [0.67, 1.33, 1.0, -1.33, 1.33],
  '春天在哪里': [0.67, 1.33, 1.33, 1.33, 1.0],
  '办公室明星': [1.33, -1.33, -1.33, -1.0, 0.67],
  '夏日物语': [1.33, 0.67, -1.33, 1.0, 1.33],
  '圣诞家庭聚会': [1.33, 1.0, 0.67, 1.33, -1.33],
  '年轻的春游': [1.33, 1.33, 1.33, 1.0, 0.67],
  '运动进行时': [1.0, 0.67, 1.33, 1.33, 1.33],
  '金色音乐厅': [-1.33, -1.33, -1.33, -1.0, -0.67],
  '夏季游园会': [1.33, 1.0, 0.67, 1.33, 1.33],
  '女王大人': [-1.0, -1.33, -1.33, -1.33, 0.67],
  '冬天里的一把火': [-0.67, 1.0, 1.33, -1.33, -1.33],
  '大侦探福尔摩斯': [1.33, -1.33, -1.33, 0.67, -1.0],
  '宫廷歌舞会': [-1.33, -1.0, -1.33, -1.33, -0.67],
  '奇幻童话园': [-1.33, 1.33, -1.33, 1.0, 0.67],
  '有女初长成': [0.67, -1.33, -1.33, 1.33, -1.0],
  '绝色无双': [-1.33, -1.0, -1.33, 1.33, -0.67],
  '清秀佳人': [1.33, 0.67, -1.33, 1.33, 1.0]
};

var tasksRaw = {
  '联盟委托: 1-1': [0.47, 0.67, 0.47, 0.67, -0.47],
  '联盟委托: 1-2': [0.87, 0.67, 0.87, 0.67, 0.67],
  '联盟委托: 1-3': [0.8, 0.8, -0.8, 1.0, 1.0],
  '联盟委托: 1-4': [1.13, 1.33, 1.13, 1.13, -1.33],
  '联盟委托: 1-5': [-0.8, 0.8, -0.8, -0.73, 0.73],
  '联盟委托: 1-6': [-1.13, -1.13, -0.93, -0.93, 0.93],
  '联盟委托: 1-7': [-0.67, 0.47, 0.67, 0.47, -0.47],
  '联盟委托: 2-1': [-0.47, -0.47, -0.67, 0.67, -0.47],
  '联盟委托: 2-2': [-1.0, -1.0, -1.0, -1.27, 1.27],
  '联盟委托: 2-3': [-1.4, 1.0, 1.4, 1.0, 1.0],
  '联盟委托: 2-4': [-1.2, -1.2, -1.2, 0.87, 0.87],
  '联盟委托: 2-5': [-0.87, 0.87, -0.6, 0.6, 0.6],
  '联盟委托: 2-6': [1.0, 1.2, 1.0, 1.2, 0.93],
  '联盟委托: 2-7': [0.8, 0.6, -0.8, 0.6, -0.6]
}

var extraRaw = {
	'11-1': [1, 1, 1, 1, 1],
	'11-2': [1, 1, 1, -1, 1],
	'11-3': [1, 1, -1, 1, -1],
	'11-4': [1, 1, -1, 1, -1],
	'11-5': [-1, -1, -1, -1, -1],
	'11-6': [1, -1, 1, -1, 1],
	'11-7': [-1, -1, -1, -1, -1],
	'11-8': [-1, 1, 1, 1, 1],
	'11-9': [1, 1, 1, 1, 1],
	'11-支1': [1, -1, -1, 1, 1],
	'11-支2': [1, 1, -1, 1, 1],
	'11-支3': [1, 1, 1, -1, 1],
};

// all data are presented in order "simple", "cute", "active", "pure", "cool"
var levelsRaw = {
  '1-1': [1, 2, 3, 2, 1],
  '1-2': [3, 1.5, -3, 3, -1],
  '1-3': [-2, -1, -3, 2, 1],
  '1-4': [2, -3, -2, -1, -1],
  '1-5': [-1, 3, 2, -2, 1],
  '1-6': [2, 1, -2, 3, 1],
  '1-7': [3, -2, -2, 1, 1],
  '1-8': [-1, -2, -2, -4, 1],
  '1-9': [-1, -2, 2, -3, 1],
  '2-1': [-2, 3, 1, 2, 1],
  '2-2': [3, 1, 2, 2, -1],
  '2-3': [2, -2, -3, -1, -1],
  '2-4': [1, 2, 1, 2, -3],
  '2-5': [2, -2, 3, 1, -1],
  '2-6': [-1, 3, -2, 2, 1],
  '2-7': [1, 2, 2, 1, -3],
  '2-8': [-2, 2, -2, 2, 1],
  '2-9': [-3, -2, -2, -1, 1],
  '2-支1': [-3, -2, -2, -1, -1],
  '2-支2': [2, -2, -3, 1, 1],
  '3-1': [2, -1, -3, 2, 1],
  '3-2': [-4, -1, 2, -2, 1],
  '3-3': [2, -3, -2, 1, -1],
  '3-4': [2, 1, -2, 3, 1],
  '3-5': [2, 1, 3, 1, 2],
  '3-6': [2, 2, 1, -1, 3],
  '3-7': [-2, 2, -2, 1, 1],
  '3-8': [2, 1, 3, 1, 2],
  '3-9': [2, -1, -2, -3, 1],
  '3-10': [-1, 3, 2, 2, 1],
  '3-11': [-3, -2, -2, -2, 1],
  '3-12': [2, 1, 3, 1, -2],
  '3-支1': [-3, -2, -2, 1, -1],
  '3-支2': [-3, -1, -2, -1, 2],
  '4-1': [3, 1, 2, 1, -3],
  '4-2': [0.2, 3, 0.2, 3, 0.2],
  '4-3': [0.2, -3, 0.2, -3, 0.2],
  '4-4': [1, 2, -2, 3, 1],
  '4-5': [2, -1, 2, 1, 3],
  '4-6': [-1, -2, -3, -2, -1],
  '4-7': [-3, -1, -2, 2, -1],
  '4-8': [3, 2, 2, -1, 1],
  '4-9': [2, -1, -3, 2, 1],
  '4-10': [1, 2, 3, 2, 1],
  '4-11': [2, -2, -3, -1, 1],
  '4-12': [2, 3, 3, -2, 1],
  '4-支1': [-1, 3, 2, 2, 1],
  '4-支2': [3, 2, 2, 1, 1],
  '4-支3': [2, 2, 3, -1, -1],
  '5-1': [2, 1, 3, 1, 2],
  '5-2': [3, -2, -2, 1, 1],
  '5-3': [-3, -2, -2, 1, 1],
  '5-4': [-1.2, -0.75, -1.25, -2, 0.75],
  '5-5': [-3, 2, -2, 1, 1],
  '5-6': [3, 1, -2, 2, -1],
  '5-7': [-1, 1, 2, 2, 1],
  '5-8': [2, -1, -2, 1, -3],
  '5-9': [-3, -2, -2, -1, 1],
  '5-10': [-3, 3, -4, 1.5, 1.5],
  '5-11': [2, -1, 3, -2, 1],
  '5-12': [2, 1.125, -3.375, 2, -1.35],
  '5-支1': [1, 2, -1, 2, -3],
  '5-支2': [2, 2, 1, 3, 1],
  '5-支3': [2, 1, -3, -2, 1],
  '6-1': [-2, 3, 1, 2, -1],
  '6-2': [2, -1, -3, 2, 1],
  '6-3': [-1, 2, -1, 3, 2],
  '6-4': [2, 3, 2, 1, -1],
  '6-5': [-2, 3, 2, 1, 1],
  '6-6': [3, 1, 2, 2, 1],
  '6-7': [-1, 3, 2, 2, 1],
  '6-8': [1, -1, -3, -2, 2],
  '6-9': [-1, -2, -3, -2, 1],
  '6-10': [-1, 2, -1, 1, -1],
  '6-11': [2, -1, -3, 2, 1],
  '6-支1': [-2, -2, -1, -3, 1],
  '6-支2': [-1, 2, 2, 1, 3],
  '6-支3': [-2, -1, 2, -3, 1],
  '7-1': [2, -2.5, -3, -2, 1.5],
  '7-2': [-3, -2, -3, 3, -2],
  '7-3': [3, -2.5, 2, -3, 3],
  '7-4': [-1.25, -2, -2, 1.5, -1],
  '7-5': [3, 2, 3, 2, 2],
  '7-6': [-2, -1, -2, 1.5, 1.5],
  '7-7': [-1.8, -1.8, -1.2, -1.2, 0.6],
  '7-8': [2, -1.34, 2, -1.34, 0.66],
  '7-9': [2, -3, 1.5, 2, -3],
  '7-支1': [2, -3, -3, 2, 2],
  '7-支2': [2, 3, -3, 2, 1.5],
  '7-支3': [3, -3, 2, -2, 2],
  '7-支4': [2, 2.5, -2, 2.5, 1.75],
  '7-支5': [2.5, 2, 2.5, 2, 1.75],
  '8-1': [2, 2.5, 2.5, 2, 1.5],
  '8-2': [-2.5, -2, 2.5, -2, 1.5],
  '8-3': [2.7, 2, -2, 2.7, -1.66],
  '8-4': [2, -2.5, -2.5, 1.5, -2],
  '8-5': [1.25, 1.25, -2, 1.25, 1.25],
  '8-6': [-2, -1.25, -2, -1.25, 1.25],
  '8-7': [2.5, 2, 2.5, 2, 1.75],
  '8-8': [-3, -2.5, -2.5, -2.5, 3],
  '8-9': [-2.5, 2.5, -2, 2, 1.5],
  '8-支1': [2.5, -1.75, 2, -2.5, 2],
  '8-支2': [2, 2, -2.5, 2.5, -1.5],
  '8-支3': [-2.5, -2, -2.5, -2, 1.75],
  '9-1': [2.75, 2, 2.75, 2, 1.75],
  '9-2': [-1.75, 1.33, -1.75, -1.33, 1.25],
  '9-3': [1.5, -1.5, -2, 1.5, -2],
  '9-4': [-1, -1.5, -1.5, -1, -1],
  '9-5': [2, 2.25, 2.25, 2, 2.25],
  '9-6-1': [2, -1.25, -2, 1.25, 1.25],
  '9-6-2': [1.4, -2, -2.25, -1.4, 1.2],
  '9-7': [1.6, 1.4, 1.4, -1.5, 1.25],
  '9-8': [1.75, 1.5, 1.75, 1.5, -1.5],
  '9-9-1': [-2, 1, 1.4, -1, 1],
  '9-9-2': [-2.5, 2, 2, -2.4, 1.5],
  '9-9-3': [-2.5, -2, -2.5, 1.75, 1.5],
  '9-支1': [1.5, 1.5, 2, 1.5, 2],
  '9-支2': [-1.5, 1.5, -1.8, 2, 1.6],
  '9-支3': [2, -2.5, 2, -2.5, 1.75],
  '10-1': [-1.33, 1.33, 1.67, 1.67, -1.67],
  '10-2': [1.5, -1.1, -1.1, 1.5, -1.1],
  '10-3': [1.33, 1.0, 1.33, 1.0, 1.0],
  '10-4': [1.0, -1.33, -1.67, -1.33, -3.0],
  '10-5': [1.67, -1.33, -1.67, -1.33, 1.33],
  '10-6': [-1.6, 1.9, 1.9, -1.6, 1.6],
  '10-7': [-1.5, 1.2, 1.2, 1.5, -1.5],
  '10-8': [1.67, -1.33, -1.67, 1.6, -1.6],
  '10-9-1': [-1.9, 2.5, 2.5, -1.9, 1.9],
  '10-9-2': [1.2, -1.9, -1.9, 1.2, 1.2],
  '10-支1': [1.7, 1.4, 1.7, 1.4, 1.4],
  '10-支2': [1.4, 1.7, 1.4, 1.4, 1.7],
  '10-支3': [-1.4, -1.1, -1.4, -1.1, -1.1]
};

function tagMatcher(whitelist, clothes) {
  for (var i in clothes.tags) {
    var tag = clothes.tags[i];
    if (tag.length > 0 && whitelist.indexOf(tag) >= 0) {
      return true;
    }
  }
  return false;
}

function nameMatcher(whitelist, clothes) {
  var names = whitelist.split('/');
  for (var i in names) {
    if (clothes.name.indexOf(names[i]) >= 0) {
      return true;
    }
  }
  return false;
}

function weightedFilter(tagWhitelist, nameWhitelist, weight) {
  return {
    tagWhitelist: tagWhitelist,
    nameWhitelist: nameWhitelist,
    filter: function(clothes) {
      if (tagWhitelist && tagMatcher(tagWhitelist, clothes)) {
        return;
      }
      if (nameWhitelist && nameMatcher(nameWhitelist, clothes)) {
        return;
      }
      clothes.tmpScore /= weight;
    }
  }
}

function normalFilter(tagWhitelist, nameWhitelist) {
  return weightedFilter(tagWhitelist, nameWhitelist, 10);
}

function noOp() {
  return {
    filter: function() {
      return;
    }
  };
}

// Note: filters decides which clothes will be penalized (usually 1/10 of the score)
// Only applicable to dresses, coats, tops and bottoms
var levelFilters = {
  '1-1': noOp(),
  '1-2': noOp(),
  '1-3': normalFilter("中式古典/中式现代/旗袍/民国服饰"),
  '1-4': noOp(),
  '1-5': noOp(),
  '1-6': noOp(),
  '1-7': normalFilter("中性风"),
  '1-8': noOp(),
  '1-9': noOp(),
  '2-1': noOp(),
  '2-2': noOp(),
  '2-3': noOp(),
  '2-4': noOp(),
  '2-5': noOp(),
  '2-6': normalFilter("和风"),
  '2-7': normalFilter("睡衣"),
  '2-8': noOp(),
  '2-9': normalFilter("欧式古典/晚礼服/女神系/波西米亚"),
  '2-支1': normalFilter(""), // TODO: check
  '2-支2': normalFilter("中性风"),
  '3-1': normalFilter("英伦", "名媛连衣裙"),
  '3-2': normalFilter("摇滚风"),
  '3-3': noOp(),
  '3-4': normalFilter("森女系列"),
  '3-5': normalFilter("运动系", "运动"),
  '3-6': weightedFilter("沐浴/和风", null, 160),
  '3-7': normalFilter("运动系"), // TODO: double check
  '3-8': noOp(),
  '3-9': normalFilter("侠客联盟/摇滚风"),
  '3-10': noOp(),
  '3-11': normalFilter("欧式古典/晚礼服/女神系/波西米亚"),
  '3-12': noOp(),
  '3-支1': normalFilter("欧式古典/晚礼服/女神系/波西米亚"),
  '3-支2': normalFilter("婚纱"),
  '4-1': noOp(),
  '4-2': weightedFilter("泳装", null, 32),
  '4-3': weightedFilter("泳装", null, 32),
  '4-4': noOp(),
  '4-5': noOp(),
  '4-6': normalFilter("OL"),
  '4-7': normalFilter("欧式古典/晚礼服/女神系/波西米亚"),
  '4-8': normalFilter("医务使者"),
  '4-9': normalFilter("中式古典/中式现代/旗袍/民国服饰"),
  '4-10': noOp(),
  '4-11': noOp(),
  '4-12': normalFilter("兔女郎"),
  '4-支1': noOp(),
  '4-支2': normalFilter("围裙"),
  '4-支3': normalFilter("围裙"),
  '5-1': normalFilter("运动系", "运动"),
  '5-2': noOp(),
  '5-3': noOp(),
  '5-4': noOp(),
  '5-5': noOp(),
  '5-6': normalFilter("民国服饰"),
  '5-7': normalFilter("波西米亚"),
  '5-8': noOp(),
  '5-9': noOp(),
  '5-10': noOp(),
  '5-11': normalFilter("侠客联盟"),
  '5-12': normalFilter("中式古典/中式现代/旗袍/民国服饰"),
  '5-支1': noOp(),
  '5-支2': normalFilter("运动系"), // TODO: double check,
  '5-支3': normalFilter("医务使者"),
  '6-1': noOp(),
  '6-2': normalFilter("中式古典/中式现代/旗袍/民国服饰"),
  '6-3': normalFilter("和风"),
  '6-4': noOp(),
  '6-5': noOp(),
  '6-6': normalFilter("中性风"),
  '6-7': noOp(),
  '6-8': normalFilter("中式现代/泳装"),
  '6-9': normalFilter("旗袍"),
  '6-10': normalFilter("中式现代/冬装"),
  '6-11': normalFilter("中式古典/中式现代/旗袍/民国服饰"),
  '6-支1': noOp(), // Not tested yet, not eligible for this level yet
  '6-支2': noOp(), // Not tested yet, not eligible for this level yet
  '6-支3': noOp(), // Not tested yet, not eligible for this level yet
  '7-1': noOp(),
  '7-2': noOp(),
  '7-3': noOp(),
  '7-4': noOp(),
  '7-5': noOp(),
  '7-6': noOp(),
  '7-7': noOp(),
  '7-8': noOp(),
  '7-9': noOp(),
  '7-支1': noOp(),
  '7-支2': noOp(),
  '7-支3': noOp(),
  '7-支4': noOp(),
  '7-支5': noOp()
};

function abstractBonusFactory(note, replace, param, tagWhitelist, nameWhitelist, callback) {
  return function(criteria) {
    return {
      tagWhitelist: tagWhitelist,
      nameWhitelist: nameWhitelist,
      note: note,
      replace: replace,
      param: param,
      filter: function(clothes) {
        if ((tagWhitelist && tagMatcher(tagWhitelist, clothes))
            || (nameWhitelist && nameMatcher(nameWhitelist, clothes))) {
          return callback(criteria, clothes);
        }
        return [0, {}];
      }
    }
  };
}

function featureBasedScoringFactory(bonus, multiplier){
  return function(criteria, clothes) {
    var total = 0;
    var byFeature = {};
    for (var i in FEATURES) {
      var f = FEATURES[i];
      var addon = Math.abs(criteria[f] * clothes.type.score[bonus] * multiplier);
      byFeature[f] = addon;
      total += addon;
    }
    return [total, byFeature];
  }
}

function addScoreBonusFactory(bonus, multiplier, tagWhitelist, nameWhitelist) {
  return abstractBonusFactory('各属性依权重加分', false, bonus + " * " + multiplier, tagWhitelist,
      nameWhitelist, featureBasedScoringFactory(bonus, multiplier));
}

function replaceScoreBonusFactory(bonus, multiplier, tagWhitelist, nameWhitelist) {
  return abstractBonusFactory('各属性均视为相符，且替换为', true, bonus + " * " + multiplier,
      tagWhitelist, nameWhitelist, featureBasedScoringFactory(bonus, multiplier));
}

function swimsuitFactory() {
  return abstractBonusFactory('仅可爱/成熟与清纯/性感依权重加分', false, 'SS', "泳装",
      null, function(criteria, clothes) {
        var total = 0;
        var onlyFeatures = ['cute', 'pure'];
        var byFeature = {};
        for (var i in onlyFeatures) {
          var f = onlyFeatures[i];
          var addon = Math.abs(criteria[f] * clothes.type.score['SS']);
          byFeature[f] = addon;
          total += addon;
        }
        return [total, byFeature];
  });
}

function specialFactory76A() {
  return abstractBonusFactory('华丽	成熟	优雅	清纯	清凉 分别按照权重增加', false, 'B, SS, B, C, C', "晚礼服",
      null, function(criteria, clothes) {
        var total = 0;
        var byFeature = {};
        byFeature['simple'] = Math.abs(criteria['simple'] * clothes.type.score['B']);
        byFeature['cute'] = Math.abs(criteria['cute'] * clothes.type.score['SS']);
        byFeature['active'] = Math.abs(criteria['active'] * clothes.type.score['B']);
        byFeature['pure'] = Math.abs(criteria['pure'] * clothes.type.score['C']);
        byFeature['cool'] = Math.abs(criteria['cool'] * clothes.type.score['C']);
        
        total += byFeature['simple'];
        total += byFeature['cute'];
        total += byFeature['active'];
        total += byFeature['pure'];
        total += byFeature['cool'];
        return [total, byFeature];
  });
}

function specialFactory76B() {
  return abstractBonusFactory('华丽	成熟	优雅	清纯	清凉 分别按照权重增加', false, 'B, SS, B, C, C', "中式现代",
      null, function(criteria, clothes) {
        var total = 0;
        var byFeature = {};
        byFeature['simple'] = Math.abs(criteria['simple'] * clothes.type.score['B']);
        byFeature['cute'] = Math.abs(criteria['cute'] * clothes.type.score['SS']);
        byFeature['active'] = Math.abs(criteria['active'] * clothes.type.score['B']);
        byFeature['pure'] = Math.abs(criteria['pure'] * clothes.type.score['C']);
        byFeature['cool'] = Math.abs(criteria['cool'] * clothes.type.score['C']);
        
        total += byFeature['simple'];
        total += byFeature['cute'];
        total += byFeature['active'];
        total += byFeature['pure'];
        total += byFeature['cool'];
        return [total, byFeature];
  });
}

function bonusInfo(base, weight, tag, replace) {
  return {
    base: base,
    weight: weight,
    tag: tag,
    replace: replace
  }
}

function replaceBonusInfo(base, weight, tag) {
  return bonusInfo(base, weight, tag, true);
}

function addBonusInfo(base, weight, tag) {
  return bonusInfo(base, weight, tag, false);
}

/*
 * There are three major types of bonus:
 *  - Add a fixed number to each feature (weight applied)
 *  - Replace current clothes features to another one
 *  - Special rules
 */
 var levelBonus = {
  "1-1": [],
  "1-2": [],
  "1-3": [addBonusInfo('B', 0.25, "中式古典")],
  "1-4": [],
  "1-5": [],
  "1-6": [],
  "1-7": [addBonusInfo('B', 0.25, "中性风")],
  "1-8": [],
  "1-9": [],
  "2-1": [],
  "2-2": [],
  "2-3": [],
  "2-4": [],
  "2-5": [],
  "2-6": [addBonusInfo('B', 0.25, "和风")],
  "2-7": [replaceBonusInfo('SS', 1, "睡衣")],
  "2-8": [],
  "2-9": [addBonusInfo('B', 0.25, "欧式古典")],
  "2-支1": [],
  "2-支2": [addBonusInfo('A', 1, "中性风")],
  "3-1": [addBonusInfo('B', 0.25, "英伦")],
  "3-2": [addBonusInfo('B', 1, "摇滚风")],
  "3-3": [],
  "3-4": [addBonusInfo('B', 0.25, "森女系列")],
  "3-5": [],
  "3-6": [replaceBonusInfo('SS', 1, '沐浴'), replaceBonusInfo('S', 1, '和风')],
  "3-7": [],
  "3-8": [],
  "3-9": [addBonusInfo('B', 0.25, "侠客联盟")],
  "3-10": [addBonusInfo('B', 0.25, "小动物")],
  "3-11": [addBonusInfo('B', 1, "欧式古典")],
  "3-12": [addBonusInfo('B', 1, "运动系")],
  "3-支1": [addBonusInfo('B', 1, "欧式古典")],
  "3-支2": [replaceBonusInfo('SS', 1, '婚纱')],
  "4-1": [],
  "4-4": [],
  "4-5": [addBonusInfo('S', 0.25, "防晒")],
  "4-6": [],
  "4-7": [],
  "4-8": [replaceBonusInfo('S', 1, "医务使者")],
  "4-9": [addBonusInfo('B', 1, "中式古典")],
  "4-10": [],
  "4-11": [],
  "4-12": [replaceBonusInfo('SS', 1, "兔女郎")],
  "4-支1": [],
  "4-支2": [addBonusInfo('B', 0.25, "围裙")],
  "4-支3": [addBonusInfo('B', 0.25, "围裙")],
  "5-1": [],
  "5-2": [],
  "5-3": [],
  "5-4": [addBonusInfo('S', 2, "和风"), addBonusInfo('SS', 1, "舞者")],
  "5-5": [addBonusInfo('A', 1, "女仆装")],
  "5-6": [],
  "5-7": [replaceBonusInfo('SS', 1, "波西米亚")],
  "5-8": [],
  "5-9": [],
  "5-10": [],
  "5-11": [replaceBonusInfo('SS', 1, "侠客联盟")],
  "5-12": [addBonusInfo('A', 1, "民国服饰"), addBonusInfo('A', 1, "中式现代")],
  "5-支1": [addBonusInfo('B', 0.25, "冬装")],
  "5-支2": [],
  "5-支3": [replaceBonusInfo('SS', 1, "医务使者")],
  "6-1": [addBonusInfo('B', 0.25, "碎花")],
  "6-2": [addBonusInfo('B', 0.25, "中式古典")],
  "6-3": [addBonusInfo('B', 0.5, "和风")],
  "6-4": [],
  "6-5": [],
  "6-6": [],
  "6-7": [addBonusInfo('S', 0.25, "中式现代")],
  "6-8": [replaceBonusInfo('SS', 1, "泳装"), replaceBonusInfo('B', 1, "中式现代")],
  "6-9": [addBonusInfo('B', 1, "旗袍")],
  "6-10": [addBonusInfo('SS', 1, "中式现代"), addBonusInfo('S', 1, "冬装")],
  "6-11": [addBonusInfo('B', 1, "中式古典")],
  "6-支1": [],
  "6-支2": [],
  "6-支3": [replaceBonusInfo('A', 2, "舞者"), addBonusInfo('A', 1, "印度服饰")], 
  '7-1': [],
  '7-2': [],
  '7-3': [],
  '7-4': [addBonusInfo('B', 1, "中式古典")],
  '7-5': [],
  '7-7': [replaceBonusInfo('SS', 1, "欧式古典"), replaceBonusInfo('SS', 1, "晚礼服")],
  '7-8': [replaceBonusInfo('S', 1, "中式古典"), replaceBonusInfo('SS', 1, "侠客联盟")],
  '7-9': [addBonusInfo('A', 1, "冬装")],
  '7-支1': [],
  '7-支2': [],
  '7-支3': [replaceBonusInfo('SS', 1, "军装")],
  '7-支4': [addBonusInfo('A', 0.5, "中式现代")],
  '7-支5': [addBonusInfo('S', 0.25, "运动系"), addBonusInfo('S', 0.25, "海军风")],
  '8-1': [addBonusInfo('A', 0.5, "小动物")],
  '8-2': [addBonusInfo('S', 0.5, "摇滚风")],
  '8-3': [addBonusInfo('A', 0.5, "中式古典")],
  '8-4': [addBonusInfo('A', 0.5, "中性风")],
  '8-5': [addBonusInfo('B', 1, "中式古典")],
  '8-6': [addBonusInfo('S', 1, "中式现代")],
  '8-7': [addBonusInfo('A', 0.5, "中性风")],
  '8-8': [],
  '8-9': [addBonusInfo('A', 0.5, "童话系")],
  '8-支1': [addBonusInfo('A', 0.5, "侠客联盟")],
  '8-支2': [],
  '8-支3': [addBonusInfo('A', 0.5, "欧式古典")],
  '9-1': [],
  '9-2': [addBonusInfo('S', 1, "哥特风")],
  '9-3': [addBonusInfo('C', 1, "冬装")],
  '9-4': [addBonusInfo('A', 1, "中式古典")],
  '9-5': [addBonusInfo('A', 1, "中式现代")],
  '9-6-1': [],
  '9-6-2': [],
  '9-7': [addBonusInfo('S', 1, "未来系")],
  '9-8': [addBonusInfo('B', 1, "森女系列")],
  '9-9-1': [addBonusInfo('SS', 1, "侠客联盟")],
  '9-9-2': [],
  '9-9-3': [],
  '9-支1': [addBonusInfo('A', 1, "泳装")],
  '9-支2': [addBonusInfo('A', 1, "旗袍")],
  '9-支3': [],
  '10-1': [addBonusInfo('B', 1, "森女系列")],
  '10-2': [addBonusInfo('B', 1, "中式古典")],
  '10-3': [addBonusInfo('A', 1, "中式现代")],
  '10-4': [addBonusInfo('B', 1, "军装")],
  '10-5': [addBonusInfo('B', 1, "晚礼服")],
  '10-6': [addBonusInfo('S', 1, "民族风")],
  '10-7': [addBonusInfo('B', 1, "洛丽塔")],
  '10-8': [addBonusInfo('S', 1, "学院系")],
  '10-9-1': [addBonusInfo('S', 1, "原宿系")],
  '10-支1': [addBonusInfo('A', 1, "运动系")],
  '10-支2': [addBonusInfo('A', 1, "碎花")],
  '10-支3': [addBonusInfo('B', 1, "欧式古典")],
  '精灵的月下舞会3': [addBonusInfo('S', 1, "欧式古典")],
  '清秀佳人': [addBonusInfo('A', 1, "中式现代")],
  '绝色无双': [addBonusInfo('A', 1, "中式现代")],
  '保育员面试': [addBonusInfo('S', 1, "小动物")],
  '海边的比基尼对决！': [addBonusInfo('A', 1, "泳装")],
  '少女的茶会': [addBonusInfo('SS', 1, "洛丽塔")],
  '摇滚演唱会': [addBonusInfo('S', 1, "摇滚风")],
  '花田摄影会': [addBonusInfo('A', 1, "碎花")],
  '牛仔布的逆袭': [addBonusInfo('B', 1, "牛仔布")],
  '云端和风茶室': [addBonusInfo('S', 1, "和风")],
  '运动饮料的推广会': [addBonusInfo('S', 1, "运动系")],
  '睡衣兜风派对': [addBonusInfo('SS', 1, "睡衣"), addBonusInfo('SS', 1, "居家服")],
  '云端汉服聚会': [addBonusInfo('SS', 1, "中式古典")],
  '话剧甄选会': [addBonusInfo('SS', 1, "欧式古典")],
  '联盟委托: 1-1': [addBonusInfo('SS', 1, "睡衣"), addBonusInfo('SS', 1, "居家服")],
  '联盟委托: 1-2': [addBonusInfo('S', 1, "运动系")],
  '联盟委托: 1-3': [addBonusInfo('A', 1, "泳装")],
  '联盟委托: 1-5': [addBonusInfo('A', 1, "哥特风")],
  '联盟委托: 1-6': [addBonusInfo('B', 0.25, "欧式古典")],
  '联盟委托: 1-7': [addBonusInfo('SS', 1, "洛丽塔")],
  '联盟委托: 2-1': [addBonusInfo('SS', 1, "中式古典")],
  '联盟委托: 2-4': [addBonusInfo('B', 0.25, "哥特风")],
  '联盟委托: 2-5': [addBonusInfo('S', 1, "女仆装")],
  '联盟委托: 2-6': [addBonusInfo('B', 0.25, "海军风")],
  '联盟委托: 2-7': [addBonusInfo('S', 1, "中式现代")],
  '朱雀翼火蛇': [addBonusInfo('A', 1, "中式现代"),addBonusInfo('A', 1, "中式古典")],
 };
 
var additionalLevelInfo = {
  "4-2": [swimsuitFactory()],
  "4-3": [swimsuitFactory()],
  '7-6': [specialFactory76A(), specialFactory76B()]
};

var addSkillsInfo = {
  '1-1': [null,['微笑','挑剔','沉睡','灰姑娘']],
'1-2': [null,['微笑','挑剔','飞吻','圣诞']],
'1-3': [null,['微笑','挑剔','真爱','圣诞']],
'1-4': [['微笑'],['微笑','挑剔','沉睡','圣诞']],
'1-5': [['微笑'],['微笑','挑剔','飞吻','圣诞']],
'1-6': [['微笑'],['微笑','挑剔','飞吻','圣诞']],
'1-7': [['微笑'],['微笑','挑剔','免挑','圣诞']],
'1-8': [['微笑'],['微笑','挑剔','免挑','灰姑娘']],
'1-9': [['微笑'],['微笑','挑剔','真爱','反挑']],
'2-1': [['微笑'],['微笑','挑剔','免挑','圣诞']],
'2-2': [['微笑'],['微笑','挑剔','沉睡','圣诞']],
'2-3': [['微笑','挑剔'],['微笑','挑剔','免挑','灰姑娘']],
'2-4': [['微笑','挑剔'],['微笑','挑剔','真爱','反挑']],
'2-5': [['微笑','挑剔'],['微笑','挑剔','沉睡','反挑']],
'2-6': [['微笑','挑剔'],['微笑','挑剔','免挑','圣诞']],
'2-7': [['微笑','挑剔'],['微笑','挑剔','免挑','灰姑娘']],
'2-8': [['微笑','挑剔'],['微笑','挑剔','飞吻','灰姑娘']],
'2-9': [['微笑','挑剔'],['微笑','挑剔','飞吻','灰姑娘']],
'2-支1': [['微笑','挑剔'],['微笑','挑剔','免挑','反挑']],
'2-支2': [['微笑','挑剔'],['微笑','挑剔','飞吻','反挑']],
'3-1': [['微笑','挑剔'],['微笑','挑剔','免挑','圣诞']],
'3-2': [['微笑','挑剔'],['微笑','挑剔','飞吻','灰姑娘']],
'3-3': [['微笑','挑剔'],['微笑','挑剔','真爱','灰姑娘']],
'3-4': [['微笑','挑剔'],['微笑','挑剔','真爱','圣诞']],
'3-5': [['微笑','挑剔','免挑'],['微笑','挑剔','沉睡','灰姑娘']],
'3-6': [['微笑','挑剔','飞吻'],['微笑','挑剔','免挑','圣诞']],
'3-7': [['微笑','挑剔','免挑'],['微笑','挑剔','沉睡','反挑']],
'3-8': [['微笑','挑剔','飞吻'],['微笑','挑剔','免挑','圣诞']],
'3-9': [['微笑','挑剔','真爱'],['微笑','挑剔','飞吻','圣诞']],
'3-10': [['微笑','挑剔','飞吻'],['微笑','挑剔','免挑','反挑']],
'3-11': [['微笑','挑剔','沉睡'],['微笑','挑剔','飞吻','灰姑娘 ']],
'3-12': [['微笑','挑剔','免挑'],['微笑','挑剔','飞吻','圣诞']],
'3-支1': [['微笑','挑剔','免挑'],['微笑','挑剔','真爱','反挑']],
'3-支2': [['微笑','挑剔','飞吻'],['微笑','挑剔','免挑','圣诞']],
'4-1': [['微笑','挑剔','免挑'],['微笑','挑剔','飞吻','圣诞']],
'4-2': [['微笑','挑剔','免挑'],['微笑','挑剔','沉睡','灰姑娘']],
'4-3': [['微笑','挑剔','沉睡'],['微笑','挑剔','真爱','圣诞']],
'4-4': [['微笑','挑剔','沉睡'],['微笑','挑剔','免挑','圣诞']],
'4-5': [['微笑','挑剔','免挑'],['微笑','挑剔','沉睡','圣诞']],
'4-6': [['微笑','挑剔','免挑'],['微笑','挑剔','灰姑娘','免挑']],
'4-7': [['微笑','挑剔','真爱'],['微笑','挑剔','沉睡','反挑']],
'4-8': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','圣诞','免挑']],
'4-9': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'4-10': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'4-11': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','飞吻','灰姑娘']],
'4-12': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','飞吻','反挑']],
'4-支1': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','灰姑娘']],
'4-支2': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','飞吻','反挑']],
'4-支3': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','圣诞']],
'5-1': [['微笑','挑剔','沉睡','圣诞'],['微笑','挑剔','飞吻','反挑']],
'5-2': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','灰姑娘']],
'5-3': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','灰姑娘']],
'5-4': [['微笑','挑剔','真爱','反挑'],['微笑','挑剔','免挑','反挑']],
'5-5': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','反挑']],
'5-6': [['微笑','挑剔','沉睡','圣诞'],['微笑','挑剔','免挑','圣诞']],
'5-7': [['微笑','挑剔','飞吻','圣诞'],['微笑','挑剔','真爱','灰姑娘']],
'5-8': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','免挑','灰姑娘']],
'5-9': [['微笑','挑剔','反挑','圣诞'],['微笑','挑剔','沉睡','反挑']],
'5-10': [['微笑','挑剔','飞吻','反挑'],['微笑','挑剔','沉睡','反挑']],
'5-11': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','沉睡','反挑']],
'5-12': [['微笑','挑剔','真爱','反挑'],['微笑','挑剔','真爱','圣诞']],
'5-支1': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','真爱','圣诞']],
'5-支2': [['微笑','挑剔','免挑','圣诞'],['微笑','挑剔','真爱','圣诞']],
'5-支3': [['微笑','挑剔','真爱','反挑'],['微笑','挑剔','飞吻','圣诞']],
'6-1': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','沉睡','反挑']],
'6-2': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','反挑','真爱']],
'6-3': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','免挑','反挑']],
'6-4': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'6-5': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','沉睡','圣诞']],
'6-6': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','反挑','真爱']],
'6-7': [['微笑','挑剔','真爱','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'6-8': [['微笑','挑剔','沉睡','圣诞'],['微笑','挑剔','圣诞','沉睡']],
'6-9': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','沉睡','圣诞']],
'6-10': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','真爱','灰姑娘']],
'6-11': [['微笑','挑剔','飞吻','灰姑娘'],['微笑','挑剔','免挑','灰姑娘']],
'6-支1': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','圣诞']],
'6-支2': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','真爱','反挑']],
'6-支3': [['微笑','挑剔','飞吻','反挑'],['微笑','挑剔','免挑','圣诞']],
'7-1': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','反挑']],
'7-2': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','反挑','真爱']],
'7-3': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','免挑','反挑']],
'7-4': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'7-5': [['微笑','挑剔','免挑','圣诞'],['微笑','挑剔','沉睡','圣诞']],
'7-6': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','反挑','真爱']],
'7-7': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'7-8': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','圣诞']],
'7-9': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','圣诞']],
'7-支1': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','真爱','灰姑娘']],
'7-支2': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','免挑','灰姑娘']],
'7-支3': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','沉睡','圣诞']],
'7-支4': [['微笑','挑剔','真爱','圣诞'],['微笑','挑剔','真爱','反挑']],
'7-支5': [['微笑','挑剔','飞吻','圣诞'],['微笑','挑剔','免挑','圣诞']],
'8-1': [['沉睡','灰姑娘','微笑','挑剔'],['微笑','挑剔','沉睡','反挑']],
'8-2': [['沉睡','灰姑娘','微笑','挑剔'],['微笑','挑剔','真爱','反挑']],
'8-3': [['沉睡','灰姑娘','微笑','挑剔'],['微笑','挑剔','免挑','反挑']],
'8-4': [['反挑','微笑','挑剔','沉睡'],['微笑','挑剔','沉睡','灰姑娘']],
'8-5': [['圣诞','免挑','微笑','挑剔'],['微笑','挑剔','沉睡','圣诞']],
'8-6': [['微笑','灰姑娘','挑剔','免挑'],['微笑','挑剔','沉睡','灰姑娘']],
'8-7': [['免挑','灰姑娘','微笑','挑剔'],['微笑','挑剔','沉睡','灰姑娘']],
'8-8': [['沉睡','灰姑娘','微笑','挑剔'],['微笑','挑剔','沉睡','圣诞']],
'8-9': [['沉睡','反挑','微笑','挑剔'],['微笑','挑剔','沉睡','圣诞']],
'8-支1': [['沉睡','灰姑娘','微笑','挑剔'],['微笑','挑剔','沉睡','反挑']],
'8-支2': [['圣诞','真爱','微笑','挑剔'],['微笑','挑剔','免挑','灰姑娘']],
'8-支3': [['圣诞','真爱','微笑','挑剔'],['微笑','挑剔','沉睡','圣诞']],
'9-1': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'9-2': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'9-3': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','免挑','反挑']],
'9-4': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-5': [['微笑','挑剔','免挑','圣诞'],['微笑','挑剔','免挑','圣诞']],
'9-6-1': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','真爱','灰姑娘']],
'9-6-2': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','免挑','灰姑娘']],
'9-7': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-8': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-9-1': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','免挑','灰姑娘']],
'9-9-2': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-9-3': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-支1': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'9-支2': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','免挑','反挑']],
'9-支3': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'10-1': [['微笑','挑剔','沉睡','灰姑娘'],['微笑','挑剔','沉睡','灰姑娘']],
'10-2': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'10-3': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'10-4': [['微笑','挑剔','免挑','圣诞'],['微笑','挑剔','免挑','反挑']],
'10-5': [['微笑','挑剔','真爱','灰姑娘'],['微笑','挑剔','沉睡','反挑']],
'10-6': [['微笑','挑剔','免挑','灰姑娘'],['微笑','挑剔','免挑','圣诞']],
'10-7': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','真爱','灰姑娘']],
'10-8': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','免挑','灰姑娘']],
'10-9-1': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','免挑','灰姑娘']],
'10-9-2': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','反挑']],
'10-支1': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','免挑','灰姑娘']],
'10-支2': [['微笑','挑剔','沉睡','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'10-支3': [['微笑','挑剔','免挑','反挑'],['微笑','挑剔','沉睡','灰姑娘']],
'联盟委托: 1-1': [null,null,['微笑','挑剔','免挑','圣诞']],
'联盟委托: 1-2': [null,null,['微笑','挑剔','免挑','灰姑娘']],
'联盟委托: 1-3': [null,null,['微笑','挑剔','反挑','真爱']],
'联盟委托: 1-4': [null,null,['微笑','挑剔','沉睡','圣诞']],
'联盟委托: 1-5': [null,null,['微笑','挑剔','沉睡','灰姑娘']],
'联盟委托: 1-6': [null,null,['微笑','挑剔','沉睡','灰姑娘']],
'联盟委托: 1-7': [null,null,['微笑','挑剔','沉睡','反挑']],
'联盟委托: 2-1': [null,null,['微笑','挑剔','真爱','反挑']],
'联盟委托: 2-2': [null,null,['微笑','挑剔','真爱','反挑']],
'联盟委托: 2-3': [null,null,['微笑','挑剔','沉睡','灰姑娘']],
'联盟委托: 2-4': [null,null,['微笑','挑剔','沉睡','圣诞']],
'联盟委托: 2-5': [null,null,['微笑','挑剔','沉睡','圣诞']],
'联盟委托: 2-6': [null,null,['微笑','挑剔','沉睡','圣诞']],
'联盟委托: 2-7': [null,null,['微笑','挑剔','沉睡','圣诞']]
};

var addHintInfo = {
'1-1' : [[''],[''],['']],
'1-2' : [['似乎不够“日常”的tag会F，如中式古典、中式现代。'],['浅空，名嫒连衣裙·棕'],['绿烟，祥云舞，春山新雨']],
'1-3' : [['连衣裙要求中式风格的tag，外套无要求。'],[''],['一品朱衣，芙蓉曲，花间序']],
'1-4' : [['发现一些F品，怀疑排斥欧式古典tag。'],['花月裴，罪爱之花·红，名嫒连衣裙'],['流霞缎·紫，纳尔']],
'1-5' : [[''],[''],['火炮兰，香甜梦境，幻眠']],
'1-6' : [[''],['绿烟，祥云舞·赤'],['流霞缎，春山新雨，浮影·银灰，梦幻礼服裙']],
'1-7' : [['推测：连衣裙没有中性风tag会F；上下装允许没有中性风tag，下装是裙子会F；外套不容易F。'],['折翼，西瓜皮，普通连体裤'],['条纹绅士·外套，茶花纱缎·华丽，星星连衣裙，神圣医者·裙']],
'1-8' : [['精灵风格的物品，衣服外套会F、其它部位不会。'],['折翼，高腰娃娃裙·蓝'],['暗夜森林·珍稀，精灵鹿后，夜魄千魅，超级特工·衣']],
'1-9' : [['推荐穿上下装。'],['高腰娃娃裙·蓝'],['暗夜森林·珍稀，精灵鹿后，刺客信念·华丽，枫女忍，鬼姬冥花，北地英姿·衣&裤']],
'2-1' : [[''],[''],['香甜梦境·蓝，幻眠·蓝，啵啵的连衣裙，贺礼 ']],
'2-2' : [[''],['小烤箱，民谣'],['格蕾雅·红酒，游园·紫，随意青春·黄']],
'2-3' : [[''],['职场佳丽，名媛连衣裙，金融精英，小满制服·蓝，九天帝女'],['茶花纱缎·华丽，流霞缎·紫，仙雾森林·珍稀，纳尔，祈祷之音·珍稀，韶颜倾城·墨，静谧夜色·下，条纹绅士·长裤']],
'2-4' : [[''],['奶奶的礼物，民谣'],['随意青春·绿，学士服，大地图腾，香甜梦境·蓝，幻眠·蓝']],
'2-5' : [[''],['硬质笔记，旋律悠扬'],['随意青春·黄，学士服，游园·黄，女神·银丝毛衣，魔力·华丽']],
'2-6' : [['推测连衣裙要求和风tag！但还有个奇葩的可穿列表。'],['水中月，山枝桠，贺礼，花间序'],['']],
'2-7' : [['要求睡衣tag，推荐熊猫睡衣，高分且过关必做。高分连衣裙易F。公主级难S，要放好技能。'],['熊猫睡衣·上&下'],['绵羊外套，随意青春·绿，真丝睡衣·白，战魂']],
'2-8' : [[''],['茶话会，白雪侍应生'],['贺礼，糖果娃娃·珍稀，山茶春色·华丽，白天鹅，悔多情，金菊呈祥，公爵千金·下装，荷花吟·裙，檀扣·赤']],
'2-9' : [[''],['雪境羽，幽冥死神，缤纷圣诞夜'],['钻影披风·华丽，高腰娃娃裙·蓝，星河曲·白，安娜小姐·珍稀']],
'2-支1' : [[''],['吾皇至上，高腰娃娃裙·蓝，缤纷圣诞夜，九天帝女，一品朱衣'],['韶颜倾城·墨，陆军少校，姹紫嫣红·珍稀，绮幻万圣夜，安娜小姐·珍稀']],
'2-支2' : [[''],['职场女性，折翼'],['条纹绅士·外套，高腰短裤']],
'3-1' : [[''],['下雨的天气，邀泛花，条纹绅士·外套，名嫒连衣裙·棕，射线·白，高腰短裤'],['茶花纱缎·华丽，小满制服·蓝，浮影·银灰，祈祷之音']],
'3-2' : [['推荐摇滚歌手套装，裙子容易F，外套无限制。'],['火炮兰'],['刺客信念·华丽，超级特工·裤，性感不良·热裤']],
'3-3' : [[''],['蕾丝外套·月，罪爱之花·红，星星连衣裙'],['茶花纱缎·华丽']],
'3-4' : [['森女系tag，上下装中一件有即可，连衣裙必须有。'],['萤尘，邀泛花'],['流霞缎，春山新雨']],
'3-5' : [['长得像裙子的连衣裙/下装会F。'],['水手少女·白，少女心事·蓝'],['雪花的秘密，游园·紫，束腰蓝裙，格调短裙·棕，经典牛仔裤']],
'3-6' : [['连衣裙没沐浴或和风tag的会F，外套无要求。'],[''],['']],
'3-7' : [[''],['粉翼·华丽，漫纱轻舞，水中月'],['山茶春色·华丽，山枝桠，贺礼，花间序，梦幻礼服衣&裙']],
'3-8' : [[''],['水手少女·白，少女心事·蓝，游园·紫，束腰蓝裙'],['雪花的秘密，格调短裙·棕']],
'3-9' : [['不要求侠客联盟/摇滚风tag。'],['维纳斯，折翼，眷恋，环泳，神圣医者·裙'],['蝶兰抹胸·华丽']],
'3-10' : [[''],[''],['香甜梦境，幻眠']],
'3-11' : [[''],['暖暖之舞，缤纷圣诞夜'],['钻影披风，高腰娃娃裙·粉']],
'3-12' : [[''],['森女与麋鹿，学士服，冬眠'],['格蕾雅·红酒，游园·紫，水手少女·白，学海无涯，全面发展']],
'3-支1' : [[''],['钻影披风，幽冥死神，暖暖之舞，缤纷圣诞夜，淡络葡提'],['']],
'3-支2' : [['较难S，公主级穿婚纱连衣裙。'],[''],['']],
'4-1' : [['无雨季装备tag可S（但雨季装备tag会加分）。'],['民谣'],['格蕾雅·红酒']],
'4-2' : [['衣服要求泳装tag。本关卡属性很偏！技能加分在可爱清纯上才容易S；其它属性只有几百分，看着像是要F，其实不是。贺礼可用、低分。'],[''],['']],
'4-3' : [['衣服要求泳装tag。本关卡属性很偏！技能加分在成熟性感上才容易S；其它属性只有几百分，看着像是要F，其实不是。'],['热夏·黑，花月裴，繁华梦'],['暗夜森林·珍稀，流霞缎·紫，仙雾森林·珍稀']],
'4-4' : [[''],['绿烟'],['糖果娃娃·华丽，白天鹅，贺礼']],
'4-5' : [[''],['旋律悠扬，沁蜜桃，西瓜皮，优雅瓷砖，束腰蓝裙'],['熟韵女郎，白色热裤，无畏']],
'4-6' : [['容易F。'],['繁华梦·珍稀，凌人风姿，陆军少校，蒙太古公子，西装外套，豹纹开衫·冷，信鸽庄园，素馨茉莉，紫薯毛衣，岁月追怀，缤纷圣诞夜'],['钻影披风·华丽，暗夜森林·珍稀，黑天鹅，红女巫，魔术上衣，巧克力制服，超级特工·衣，怪盗上衣·华丽，雍容鱼尾，魔术下装，黑色鱼尾裙，静谧夜色·下，九天帝女']],
'4-7' : [['连衣裙疑似排斥中式古典。上下装容易F，推荐连衣裙。外套无限制。'],['鸣鹤之应·珍稀，淡络葡提，烈火女神，怪盗上衣·华丽，荷花吟·裙'],['韶颜倾城，姹紫嫣红·珍稀，古墓谪仙，一品朱衣，芷兰袄，甜心骑士·裙，巧克力物语']],
'4-8' : [['衣服要求医务使者tag，外套无限制。'],['温柔医生，白衣天使'],['']],
'4-9' : [['衣服要求带中式风格的tag，外套无限制。'],[''],['芙蓉曲，花间序，一品朱衣']],
'4-10' : [[''],[''],['']],
'4-11' : [['上下装、看着不像礼服的，容易F。'],['花月裴，罗兰诗，雪山上的礼物，白翩语'],['流霞缎，茶花纱缎·华丽']],
'4-12' : [['较难S。必穿兔女郎。再做兔女郎头饰、配合技能可S。'],['兔女郎'],['']],
'4-支1' : [['容易F，无固定tag，外套无限制。'],['杏花阁，花香，华美蔷薇'],['翠竹阁，水母公主，水母小姐，童心爱恋，香甜梦境·蓝，幻眠·蓝，甜美格纹·下，时空穿越，罂粟千狐，啵啵的连衣裙']],
'4-支2' : [[''],[''],['']],
'4-支3' : [[''],[''],['香甜梦境，幻眠']],
'5-1' : [[''],['水手少女·白，少女心事·蓝，格调短裙·棕'],['雪花的秘密，游园·紫，风信子，束腰蓝裙']],
'5-2' : [[''],['花月裴，星星连衣裙'],['绅士外套 ，茶花纱缎·华丽，流霞缎，祈祷之音·珍稀']],
'5-3' : [[''],['仙雾森林·珍稀，夕夜迢迢，玉壶园，绿烟林微，一品朱衣，圣诞缤纷夜'],['']],
'5-4' : [[''],['枫女忍，鬼姬冥花·珍稀'],['彼岸花·珍稀']],
'5-5' : [[''],[''],['']],
'5-6' : [['衣服要求民国服饰tag，不然F。'],['下雨的天气，春山新雨，西江月'],['相思意']],
'5-7' : [[''],['推荐用过关套荒原的花。无波西米亚的服装基本F。'],['']],
'5-8' : [[''],[''],['罪爱之花·红，纳尔，黄鹂']],
'5-9' : [[''],['钻影披风，雪境羽，高腰娃娃裙·蓝，镜中花，黑天鹅，星河曲·白，缤纷圣诞夜'],['仙雾森林·珍稀，精灵鹿后，花蔓定制']],
'5-10' : [[''],['水中月，漫纱轻舞，茶话会，贺礼'],['糖果娃娃·珍稀，花间序，梦幻礼服衣&裙']],
'5-11' : [['下装要穿超级特工·裤，上衣外套可用牛仔套装。或者连衣裙刺客信念可用。'],['刺客信念'],['侠客行']],
'5-12' : [[''],['凝墨，小家碧玉，繁华梦，杏花阁，西江月'],['花月裴，祥云舞·赤，戏水裳，冬眠']],
'5-支1' : [['连衣裙疑似排斥围裙tag和中式古典tag。'],['绵羊外套，森女与麋鹿，冬眠，渐变色毛衣，枫糖毛衣，芷兰下装，牛仔七分裤'],['森女羊，围裙小姐，格蕾雅·红酒，天空棉花糖，浅空，香甜梦境，幻眠，相思意，嘴硬心软']],
'5-支2' : [['花香+沁蜜桃·裤裙，配合技能可S。推测：上下装至少一件有海军风tag（允许奶油号角，排斥水手少女）可S、不然只要不是F品即可低分过。'],['奶油号角，花香，沁蜜桃·裤裙'],['水手少女·白，风信子，初云衫·蓝，初云裤·蓝，游园·紫']],
'5-支3' : [[''],[''],['']],
'6-1' : [[''],['绵羊外套，梨院琳琅，大地图腾，水母公主'],['绵羊外套·华丽，童心爱恋，田园珍珠·红，香甜梦境·蓝，幻眠·蓝']],
'6-2' : [['连衣裙要求中式古典tag，外套无限制。'],[''],['芙蓉曲']],
'6-3' : [[''],['翠竹阁，梨院琳琅，金菊呈祥，岚谧轻粉，贺礼'],['山茶春色·华丽，糖果娃娃·华丽，青花瓷']],
'6-4' : [['衣服较多F，无固定tag。外套无限制。'],['森女与麋鹿，花香，樱桃汽水，爱心靴裤·蓝，全面发展'],['格蕾雅·红酒，初云衫·蓝，勇敢的心·黑，熊猫睡衣·上装，初云裤·蓝，天蓝衬衫']],
'6-5' : [[''],[''],['啵啵的连衣裙']],
'6-6' : [['容易F，避开裙子。外套无限制。'],['风信子，韵冉，苏打水蓝，毛毡短裤，运动会?蓝，黑色短裤'],['花香，樱桃汽水，水手服上衣，奶油号角，船锚上衣·蓝，甜蜜夹心·蓝，束腰蓝裙，格调短裙·棕，珍珠纱裙·蓝，躲猫猫']],
'6-7' : [['外套较多F，无固定tag。'],['寄思纸，冬影娇，春姿俏，腊月，荧珑·华丽，杏花阁，翠竹阁，水母公主，罂粟千狐'],['煌曲，粉翼·珍稀，紫翼·珍稀，香甜梦境·蓝，幻眠·蓝，时空穿越，童心爱恋']],
'6-8' : [['戏水裳和玲珑上下装可S，其他泳装好像达不到S。'],['星夜卜，雪山上的礼物，薄纱外套'],['流霞缎·紫，仙雾森林·珍稀，茶花纱缎·华丽']],
'6-9' : [['外套容易F。'],['繁华梦·珍稀，陆军少校，凌人风姿，雪绒披风，幻影披风，热夏·黑'],['']],
'6-10' : [['较难S，建议做冬眠。衣服容易F，小镇姑娘+高腰皮裤公主级可A。'],['冬眠，山枝桠，枫叶温度·红，小镇姑娘，美术老师·灰，灰色针织裙，高腰皮裤'],['']],
'6-11' : [['连衣裙要求中式古典tag，外套无限制。'],[''],['']],
'6-支1' : [[''],[''],['花蔓定制']],
'6-支2' : [[''],[''],['']],
'6-支3' : [['较难S，满月酒配合部分舞者服饰和技能可S，不着急的做蝴蝶套珍稀。衣服要求舞者tag，外套无限制。'],[''],['']],
'7-1' : [['衣服容易F，怀疑排斥不够日常的tag。外套无限制。'],['折翼，轻羽裙·粉'],['维纳斯之舞,牡丹吟·华丽']],
'7-2' : [['极易F，仅确定如下可穿物品。注：姹紫嫣红·珍稀、夕夜迢迢，少女F。'],['月秋浦，古墓谪仙，水中月，巧克力物语，雪绒披风，天蓝披风，巧克力披肩'],['繁华梦·珍稀，月影轩，绿烟林微，一品朱衣，芙蓉曲']],
'7-3' : [[''],['女神领域，游园·黑'],['西江月，轻羽裙·灰']],
'7-4' : [[''],['绿烟林微，古墓谪仙'],['一品朱衣，芙蓉曲，九天帝女']],
'7-5' : [[''],[''],['游园·紫']],
'7-6' : [['容易F。推荐做墨兰卷，过关必做。注：星河曲·白少女F。'],['墨兰卷，镜中花'],['星河曲·白，钻石人鱼，金叶婀娜']],
'7-7' : [['较难S，参考流水和玉人的攻略。'],[''],['']],
'7-8' : [['公主级必穿侠客行+布帛绑袜，技能放好了能S，不然推荐先做鞋。目前允许女神系列等新外套。'],['黑白英豪，侠客行，游侠，布帛绑袜'],['']],
'7-9' : [['衣服容易F，外套无限制。'],['枫糖毛衣，高腰皮裤，冬眠，枫叶温度·红，圣诞风毛衣，针织毛衣·绿'],['暖秋·棕，围裙小姐']],
'7-支1' : [['怀疑上下装全部F。'],['千尘，茶花纱缎·华丽，流霞缎，星星连衣裙，罪爱之花?红，浮影?银灰'],['戏水裳']],
'7-支2' : [[''],[''],['贺礼，梦幻礼服衣&裙']],
'7-支3' : [['较难S。公主级推荐先做北地头发、和北地鞋或过膝军靴，不能S再做别的。'],['牛仔小妞，北地英姿·上下装，陆军少校，海军少校，陆军背心'],['棕色军装裤，海军背心']],
'7-支4' : [[''],['戏水裳'],['水墨抄·上&下']],
'7-支5' : [[''],['游园·紫'],['']],
'8-1' : [[''],[''],['']],
'8-2' : [['公主级必须性感不良套装，不可加任何其它衣服饰品包括妆容！少女级允许其他tag，但连衣裙全部F。'],[''],['']],
'8-3' : [[''],[''],['']],
'8-4' : [['容易F。上下装疑似排斥非正装类衣服，例如学院系、牛仔风、短裤。连衣裙全部F。外套未发现限制。'],['丝绸衬衫，温雅侍者·衣/裤，餐厅领班，怪盗上衣/下装·华丽，神圣医者·衣，条纹绅士·长裤，法式咖啡，西装裤'],['时尚搭配，文明起源·白，文明起源·棕，学生主席，线脚创意']],
'8-5' : [['较易F，连衣裙要求中式古典tag，外套无要求。'],['绿烟，山茶春色·华丽'],['桃花歌，山茶春色，云端初见，花间序，夕成玦·上下']],
'8-6' : [['极易F，仅确定如下可穿物品（部分需配合技能才可S）。'],['繁华梦·华丽，小家碧玉，水墨青花，幽兰裙裾，绿烟林微，暮霭苍琅，一品朱衣，九天帝女，华美圣诞'],['繁华梦·珍稀，镜中花']],
'8-7' : [['符合中性风tag的衣服未发现F。'],[''],['游园·紫']],
'8-8' : [['要求服装与精灵相关，不然F。'],['仙雾森林·珍稀，精灵鹿后，黑暗精灵·珍稀，光明精灵·珍稀，缤纷圣诞夜'],['']],
'8-9' : [['饰品：花嫁头纱会F。'],[''],['花嫁头纱，梦幻礼服衣&裙']],
'8-支1' : [['连衣裙全部F。符合侠客联盟tag的上下装未发现F。外套未发现限制。'],['西部精神，无畏'],['魔力,珍珠佳人']],
'8-支2' : [[''],[''],['']],
'8-支3' : [[''],[''],['钻影披风·华丽，安娜小姐·珍稀']],
'9-1' : [[''],[''],['']],
'9-2' : [['较难S，需要衣服或头发+多件配饰有哥特风tag。'],[''],['']],
'9-3' : [['必穿枫叶套连衣裙和大衣。但有奇葩的可用品列表。'],['枫叶大衣，枫叶温度·红，巧克力物语，一品朱衣，九天帝女，暖绒斗篷，雪绒披风，天蓝披风，天蓝斗篷'],['']],
'9-4' : [['符合中式古典tag的衣服发现以下F品。'],[''],['喜绣缘，九天帝女，一品朱衣']],
'9-5' : [['必穿游鲤或水墨抄上下装。外套极易F。'],['热夏·红，寄思纸，冬影娇，春姿俏，游鲤图·上衣&下装，水墨抄·上&下'],['']],
'9-6-1' : [['容易F。'],['千尘，星星连衣裙，戏水裳'],['流霞缎，茶花纱缎·华丽，祈祷之音·珍稀，浮影·银灰']],
'9-6-2' : [[''],['初云衫·墨'],['流霞缎，茶花纱缎·华丽']],
'9-7' : [['必穿未来时空（原色、玫）。外套极易F。火炮兰，罂粟千狐可以A。'],['热夏·红，冬影娇，春姿俏，未来时空·玫，未来时空'],['']],
'9-8' : [[''],[''],['']],
'9-9-1' : [['连衣裙必须刺客套，外套极易F。'],['冬影娇，春姿俏，火炮兰，罂粟千狐'],['']],
'9-9-2' : [[''],['火炮兰，罂粟千狐'],['香甜梦境，幻眠']],
'9-9-3' : [['较易F。'],['雪绒披风，柔暖，钻石人鱼，光明精灵·珍稀，星之海，一品朱衣，芙蓉曲'],['小名媛·珍稀&华丽']],
'9-支1' : [['衣服要求泳装tag，外套无限制。'],[''],['']],
'9-支2' : [['符合旗袍tag的衣服未发现F。'],[''],['星夜卜']],
'9-支3' : [[''],[''],['魔力']],
'10-1' : [['符合森女系列tag的衣服未发现F。'],[''],['']],
'10-2' : [['容易F。'],['黄鹂，罗织红纱，相思意，画金屏'],['路白云，香代酒，阑烛，密云飞']],
'10-3' : [['较易F。衣服要求中式现代tag，外套无限制。'],['腊月，凝墨，花月裴，小家碧玉，冬眠，杏花阁，戏水裳，初云衫&裤·蓝，小镇姑娘，游鲤图·上衣&下装，玲珑·上衣&下装'],['祥云舞·赤，墨兰卷，青花瓷，蓝瓷·上衣&裙，采茶曲·上衣&裙，水墨抄·衣&裙，煌曲，繁华梦']],
'10-4' : [['上下装及外套要求军装tag。'],[''],['']],
'10-5' : [['衣服要求晚礼服tag，外套无限制。'],['花月裴，罗兰诗，雪山上的礼物，维纳斯之舞，镜中花，星光曲·紫，舞会皇后'],['茶花纱缎·华丽，流霞缎，素馨茉莉']],
'10-6' : [['公主级S需要做大地图腾, 少女级可用荒原之花，其它衣服都不建议穿。外套无要求。'],[''],['塔罗·上&下（少女级会F）']],
'10-7' : [['符合洛丽塔tag的衣服未发现F。'],[''],['']],
'10-8' : [['必穿学士服。但有奇葩的可用品列表。'],['巧克力物语，雪绒披风'],['雪绒披肩']],
'10-9-1' : [['衣服外套要求原宿系tag。少女级可用魔力+前沿少女（普通）；公主级需要上/下装有一件华丽。不能S的做外套/上下装都华丽/练技能。'],[''],['']],
'10-9-2' : [['容易F，推荐穿没tag的衣服。'],['小名媛华丽，千尘，浮影·银灰，罪爱之花·红，戏水裳，星星连衣裙'],['茶花纱缎·华丽，流霞缎，祈祷之音']],
'10-支1' : [[''],[''],['游园·紫（四色均F）']],
'10-支2' : [[''],[''],['']],
'10-支3' : [['衣服要求欧式古典tag。'],[''],['安娜小姐·珍稀']],
'11-1' : [['排斥中式tag']],
'11-3' : [['需要画家上下装']],
'11-4' : [[''], ['小满制服']],
'11-5' : [['需要女海盗上下装']],


};

function parseCriteriaList(criteria) {
  return {
    'simple': criteria[0],
    'cute': criteria[1],
    'active': criteria[2],
    'pure': criteria[3],
    'cool': criteria[4]
  }
}

function level(name, criteria) {
  var filter = null;
  if (levelFilters[name]) {
    filter = levelFilters[name];
  }
  var bonusFilter = [];
  if (levelBonus[name]) {
    for (var i in levelBonus[name]) {
      bonusFilter.push(levelBonus[name][i]);
    }
  }
  var additionalBonus = [];
  if (additionalLevelInfo[name]) {
    for (var i in additionalLevelInfo[name]) {
      additionalBonus.push(additionalLevelInfo[name][i](criteria));
    }
  }
  var skills = [];
  if (addSkillsInfo[name]) {
    for (var i in addSkillsInfo[name]) {
      skills.push(addSkillsInfo[name][i]);
    }
  }
  var hint;
  if(addHintInfo[name]) {
	hint = addHintInfo[name];
  }
  return {
    name: name, // useful?
    weight: criteria,
    filter: filter,
    bonus: bonusFilter,
    additionalBonus: additionalBonus,
	skills: skills,
	hint: hint
  }
}

allThemes = function() {
  var ret = {};
  for (var theme in extraRaw) {
    var criteria = extraRaw[theme];
    ret['活动地图: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in competitionsRaw) {
    var criteria = competitionsRaw[theme];
    ret['竞技场: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in tasksRaw) {
    var criteria = tasksRaw[theme];
    ret['' + theme] = level(theme, parseCriteriaList(criteria));
  }
  for (var theme in levelsRaw) {
    var criteria = levelsRaw[theme];
    ret['关卡: ' + theme] = level(theme, parseCriteriaList(criteria));
  }
  return ret;
}();
