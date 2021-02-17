var defaults = typeof require !== 'undefined' ? require('../lib/defaults') : jsonSchemaDefaults;


describe("wrapper", function() {
  it("doesn't expose as global in node", function() {
    if (typeof require !== 'undefined') {
      expect(typeof jsonSchemaDefaults === 'undefined').toBeTruthy();
    }
  });

  it("noConflict returns back the variable", function() {
    if (typeof require === 'undefined') {
      var defaults = jsonSchemaDefaults;
      expect(window.jsonSchemaDefaults).toBeDefined();

      var noConflicted = jsonSchemaDefaults.noConflict();

      expect(noConflicted).toBe(defaults);
      expect(window.jsonSchemaDefaults).toBeUndefined();
    }
  });
});


describe("defaults", function() {

  it("reads defaults from object attributes", function() {
    expect(defaults({
      "title": "Album Options",
      "type": "object",
      "properties": {
        "sort": {
          "type": "string",
          "default": "id"
        },
        "per_page": {
          "default": 30,
          "type": "integer"
        }
      }
    })).toEqual({
      sort: 'id',
      per_page: 30
    });
  });

  it("returns empty object if properties are not present", function() {
    expect(defaults({
      "title": "Album Selector",
      "type": "object"
    })).toEqual({});
  });

  it("sets a falsy value", function() {
    expect(defaults({
      "type": "object",
      "properties": {
        "margin": {
          "type": "integer",
          "default": 0
        },
        "render": {
          "type": "boolean",
          "default": false
        }
      }
    })).toEqual({
      margin: 0,
      render: false
    });
  });

  it("returns empty object if nested object's properties are not present", function() {
    expect(defaults({
      "title": "Wall",
      "type": "object",
      "properties": {
        "album": {
          "title": "Album Selector",
          "type": "object",
          "albumSelector": true
        }
      }
    })).toEqual({
      album: {}
    });
  });

  it("sets album shortcut from default", function() {
    expect(defaults({
      "type": "object",
      "title": "Album Selector",
      "albumSelector": true,
      "default": {
        "shortcut": "9IZukfpi"
      }
    })).toEqual({
      shortcut: "9IZukfpi"
    });
  });

  it("doesnt set attribute without a default value", function() {
    expect(defaults({
      "type": "string"
    })).toBeUndefined();
  });

  it("doesn't set object's attribute without a default value", function() {
    expect(defaults({
      "type": "object",
      "properties": {
        "per_page": {
          "type": "integer",
          "default": 30
        },
        "sort": {
          "type": "string"
        }
      }
    })).toEqual({
      per_page: 30
    });
  });

  it("doesn't set object's only attribute without a default value", function() {
    expect(defaults({
      "type": "object",
      "properties": {
        "sort": {
          "type": "string"
        }
      }
    })).toEqual({});
  });

  it("sets default values of an array type", function() {
    expect(defaults({
      "type": "array",
      "items": {
        "type": "string"
      },
      "default": ["getchute", "chute"]
    })).toEqual([
      "getchute",
      "chute"
    ]);
  });

  it("sets default values of nested array type", function() {
    expect(defaults({
      "type": "object",
      "properties": {
        "albums": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "shortcut": {
                "type": "string",
                "default": "abc123"
              }
            }
          }
        }
      }
    })).toEqual({
      "albums": [
        { "shortcut": "abc123" }
      ]
    });
  });

  it("returns empty array when items are not present", function() {
    expect(defaults({
      "type": "object",
      "properties": {
        "albums": {
          "type": "array"
        }
      }
    })).toEqual({
      "albums": []
    });
  });

  it('returns defaults if they are present in reference', function () {
    expect(defaults({
      "type": "object",
      "properties": {
        "per_page": {
          "$ref": "#/definitions/per_page"
        },
        "sort": {
          "type": "string"
        }
      },
      "definitions": {
        "per_page": {
          "type": "integer",
          "default": 30
        }
      }
    })).toEqual({
      per_page: 30
    });
  });

  it('should not throw exception if reference is not correct', function () {
    expect(defaults({
      "type": "object",
      "properties": {
        "per_page": {
          "$ref": "#/definitions/page_per"
        },
        "sort": {
          "type": "string"
        }
      },
      "definitions": {
        "per_page": {
          "type": "integer",
          "default": 30
        }
      }
    })).toEqual({});
  });

  it('returns defaults if they are present in nested reference', function () {
    expect(defaults({
      "type": "object",
      "properties": {
        "foo": {
          "$ref": "#/definitions/foo"
        },
        "sort": {
          "type": "string"
        }
      },
      "definitions": {
        "foo": {
          "type": "object",
          "properties": {
            "per_page": {
              "$ref": "#/definitions/per_page"
            }
          }
        },
        "per_page": {
          "type": "integer",
          "default": 30
        }
      }
    })).toEqual({
      foo: {
        per_page: 30
      }
    });
  });
  
  it('should merge objects from "allOf" list and extract defaults from result object', function () {
    expect(defaults({
      "type": "object",
      "properties": {
        "per_page": {
          "$ref": "#/definitions/per_page"
        },
        "per_page_big": {
          "allOf": [
            {"$ref": "#/definitions/per_page"},
            {"default": 50}
          ]

        },
        "sort": {
          "type": "string"
        }
      },
      "definitions": {
        "per_page": {
          "type": "integer",
          "default": 30
        }
      }
    })).toEqual({
      per_page: 30,
      per_page_big: 50
    });

    var res = defaults({
      "type": "object",
      "properties": {
        "farewell_to_arms": {
          "allOf": [
            {"$ref": "#/definitions/book"},
            {"properties": {
              "price": {
                "default": 30
              }
            }}
          ]
        },
        "for_whom_the_bell_tolls": {
          "allOf": [
            {"$ref": "#/definitions/book"},
            {"properties": {
              "price": {
                "default": 100
              }
            }}
          ]
        }
      },
      "definitions": {
        "book": {
          "type": "object",
          "properties": {
            "author": {
              "type": "string",
              "default": "Hemingway"
            },
            "price": {
              "type": "integer",
              "default": 10
            }
          }
        }
      }
    });

    expect(res).toEqual({
      farewell_to_arms: {
        author: "Hemingway",
        price: 30
      },
      for_whom_the_bell_tolls: {
        author: "Hemingway",
        price: 100
      }
    });

  });

});
