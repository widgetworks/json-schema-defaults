export const schema = {
    "$wiwoVersion": "wiwo-stampduty#9.0.2-vic-concession-no-interp",
    "$id": "http://jsonschema.net",
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "properties": {
        "wiwo-shared-lib": {
            "type": "object",
            "$id": "http://jsonschema.net/wiwo-shared-lib",
            "properties": {
                "PREFER_SHARED_CONTENT": {
                    "type": "boolean",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/PREFER_SHARED_CONTENT",
                    "title": "PREFER_SHARED_CONTENT",
                    "description": "<p>When enabled, we will try to use CTA, Header Content, Disclaimer, and Assumptions content from this shared section before falling back to old content locations.</p>",
                    "default": false
                },
                "callToActionEnabled": {
                    "type": "boolean",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/callToActionEnabled",
                    "title": "Call To Action Enabled",
                    "default": true
                },
                "callToActionContent": {
                    "type": "string",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/callToActionContent",
                    "title": "Call To Action Content"
                },
                "callToActionLocation": {
                    "type": "string",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/callToActionLocation",
                    "title": "Call To Action Location",
                    "default": "bottom",
                    "enum": [
                        "bottom",
                        "side"
                    ]
                },
                "headerContent": {
                    "type": "string",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/headerContent",
                    "title": "Header Content"
                },
                "disclaimerEnabled": {
                    "type": "boolean",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/disclaimerEnabled",
                    "title": "Disclaimer Enabled",
                    "default": true
                },
                "disclaimerContent": {
                    "type": "string",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/disclaimerContent",
                    "title": "Disclaimer Content"
                },
                "assumptionsContent": {
                    "type": "string",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/assumptionsContent",
                    "title": "Assumptions Content"
                },
                "products": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/products",
                    "properties": {
                        "PREFER_SHARED_PRODUCTS": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/PREFER_SHARED_PRODUCTS",
                            "title": "PREFER_SHARED_PRODUCTS",
                            "default": false
                        },
                        "productGroupsEnabled": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroupsEnabled",
                            "title": "Product Groups Enabled",
                            "default": false
                        },
                        "hideProductGroups": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/hideProductGroups",
                            "title": "Hide Product Groups",
                            "default": false
                        },
                        "productGroups": {
                            "type": "array",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups",
                            "items": {
                                "type": "object",
                                "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups/0",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                        "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups/0/id",
                                        "title": "Id"
                                    },
                                    "label": {
                                        "type": "string",
                                        "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups/0/label",
                                        "title": "Label"
                                    },
                                    "groupedProducts": {
                                        "type": "array",
                                        "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups/0/groupedProducts",
                                        "items": {
                                            "type": "string",
                                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/productGroups/0/groupedProducts/0",
                                            "minLength": 1
                                        },
                                        "title": "Grouped Products"
                                    }
                                },
                                "additionalProperties": false,
                                "required": [
                                    "id",
                                    "label",
                                    "groupedProducts"
                                ]
                            },
                            "title": "Product Groups",
                            "minItems": 0,
                            "description": "<div><p>For groupedProducts: </p>\n<ul><li>Enter product IDs to be included in group</li>\n<li>Enter * to include all product IDs</li>\n<li>Prefix ID with ! to exclude from group</li>\n<li>Duplicate IDs are ignored</li>\n</ul>\n</div>"
                        },
                        "productPanel": {
                            "type": "array",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/products/productPanel",
                            "items": {
                                "type": "object",
                                "$id": "http://jsonschema.net/wiwo-shared-lib/products/productPanel/0",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                        "$id": "http://jsonschema.net/wiwo-shared-lib/products/productPanel/0/id",
                                        "title": "Id"
                                    },
                                    "content": {
                                        "type": "string",
                                        "$id": "http://jsonschema.net/wiwo-shared-lib/products/productPanel/0/content",
                                        "title": "Content"
                                    }
                                },
                                "additionalProperties": false,
                                "required": [
                                    "id"
                                ]
                            },
                            "title": "Product Panel",
                            "description": "\n<div>\n<dl class=\"dl-horizontal\">\n    <dt>id</dt>\n    <dd>Product id or comma-separated list of product ids.<br>Use <b>*</b> to match all product ids (e.g. for default product info) <br>Prefix id with <b>!</b> to exclude from list <br><b>data.appModel</b> is available for interpolation (e.g. <b>data.appModel.repaymentModel.product.name</b>)</dd>\n    \n    <dt>content</dt>\n    <dd>HTML content block to show for this product/s. If given this takes precedence over all other content entered below</dd>\n    \n    <dt>(everything else)</dt>\n    <dd>Blocks of content that will be rendered out when product is selected</dd>\n</dl>\n\n<div class=\"well\">\n<h4>Product Content Template:</h4>\n<p><strong>\"&#123;&#123; data.appModel.repaymentModel.product.name }}\"</strong> will display the selected product name automatically, no need to change it for different content.</p>\n<code style=\"display: block;\">\n&lt;h3&gt;&#123;&#123; data.appModel.repaymentModel.product.name }}&lt;/h3&gt;<br />\n&lt;p&gt;This is HTML content, update me&lt;/p&gt;<br />\n&lt;ul&gt;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;List features&lt;/li&gt;<br />\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Other items&lt;/li&gt;<br />\n&lt;/ul&gt;\n</code>\n</div>\n\n</div>\n",
                            "minItems": 0
                        }
                    },
                    "title": "Products",
                    "additionalProperties": false,
                    "required": [
                        "PREFER_SHARED_PRODUCTS"
                    ]
                },
                "tooltips": {
                    "type": "array",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/tooltips",
                    "items": {
                        "type": "object",
                        "$id": "http://jsonschema.net/wiwo-shared-lib/tooltips/0",
                        "properties": {
                            "id": {
                                "type": "string",
                                "$id": "http://jsonschema.net/wiwo-shared-lib/tooltips/0/id",
                                "title": "Id"
                            },
                            "tooltip": {
                                "type": "string",
                                "$id": "http://jsonschema.net/wiwo-shared-lib/tooltips/0/tooltip",
                                "title": "Tooltip"
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "id"
                        ]
                    },
                    "title": "Tooltips",
                    "minItems": 0
                },
                "locale": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale",
                    "properties": {
                        "currency": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/currency",
                            "title": "Currency",
                            "default": "$"
                        },
                        "interestSuffix": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/interestSuffix",
                            "title": "Interest Suffix",
                            "default": "$0 p.a.",
                            "description": "\n<p>For displaying rates in results, the $0 is where the rate value itself will be placed. Leave as just $0 if you just want a plain rate result</p>\n                "
                        },
                        "percentInputSuffix": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/percentInputSuffix",
                            "title": "Percent Input Suffix",
                            "default": " p.a.",
                            "description": "\n<p>For rate input controls. HTML supported but keep it short. p.a. in AU, and change to APR/APY or empty in US. You will usually want a space at the start</p>\n                "
                        },
                        "plurals": {
                            "type": "object",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals",
                            "properties": {
                                "term": {
                                    "type": "object",
                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term",
                                    "properties": {
                                        "year": {
                                            "type": "object",
                                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/year",
                                            "properties": {
                                                "1": {
                                                    "type": "string",
                                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/year/1",
                                                    "title": "1",
                                                    "default": "$0 year"
                                                },
                                                "other": {
                                                    "type": "string",
                                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/year/other",
                                                    "title": "Other",
                                                    "default": "$0 years"
                                                },
                                                "separator": {
                                                    "type": "string",
                                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/year/separator",
                                                    "title": "Separator",
                                                    "default": ", "
                                                }
                                            },
                                            "title": "Year",
                                            "additionalProperties": false,
                                            "required": [
                                                "1",
                                                "other",
                                                "separator"
                                            ]
                                        },
                                        "month": {
                                            "type": "object",
                                            "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/month",
                                            "properties": {
                                                "1": {
                                                    "type": "string",
                                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/month/1",
                                                    "title": "1",
                                                    "default": "$0 month"
                                                },
                                                "other": {
                                                    "type": "string",
                                                    "$id": "http://jsonschema.net/wiwo-shared-lib/locale/plurals/term/month/other",
                                                    "title": "Other",
                                                    "default": "$0 months"
                                                }
                                            },
                                            "title": "Month",
                                            "additionalProperties": false,
                                            "required": [
                                                "1",
                                                "other"
                                            ]
                                        }
                                    },
                                    "title": "Term",
                                    "additionalProperties": false,
                                    "required": [
                                        "year",
                                        "month"
                                    ]
                                }
                            },
                            "title": "Plurals",
                            "additionalProperties": false,
                            "required": [
                                "term"
                            ]
                        }
                    },
                    "title": "Locale",
                    "additionalProperties": false,
                    "required": [
                        "currency",
                        "interestSuffix",
                        "plurals"
                    ]
                },
                "appUtils": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/appUtils",
                    "properties": {
                        "showShareButton": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/appUtils/showShareButton",
                            "title": "Show Share Button",
                            "default": false
                        },
                        "share": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/appUtils/share",
                            "title": "Share",
                            "default": "Share or save your results"
                        },
                        "information": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/appUtils/information",
                            "title": "Information",
                            "default": "About this calculator"
                        },
                        "print": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/appUtils/print",
                            "title": "Print",
                            "default": "Print"
                        }
                    },
                    "title": "App Utils",
                    "additionalProperties": false,
                    "required": [
                        "share",
                        "information",
                        "print"
                    ]
                },
                "dialog": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/dialog",
                    "properties": {
                        "ok": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/dialog/ok",
                            "title": "Ok",
                            "default": "Close"
                        }
                    },
                    "title": "Dialog",
                    "additionalProperties": false,
                    "required": [
                        "ok"
                    ]
                },
                "accessibility": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/accessibility",
                    "properties": {
                        "tabToSlider": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/accessibility/tabToSlider",
                            "title": "Tab To Slider",
                            "default": true
                        }
                    },
                    "title": "Accessibility",
                    "additionalProperties": false
                },
                "analytics": {
                    "type": "object",
                    "$id": "http://jsonschema.net/wiwo-shared-lib/analytics",
                    "properties": {
                        "enabled": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/analytics/enabled",
                            "title": "Enabled",
                            "default": true,
                            "description": "<p>Send analytics events to default endpoint.</p>\n<p>If disabled, stops events being be sent to default analytics provider inside Widget. Events will still be raised to host page and GTM can still be loaded.</p>"
                        },
                        "gtmId": {
                            "type": "string",
                            "$id": "http://jsonschema.net/wiwo-shared-lib/analytics/gtmId",
                            "title": "Gtm Id",
                            "description": "<p>Google Tag Manager (GTM) workspace ID e.g. GTM-ABC123</p>\n<p>Prefix gtmId with <b>x</b> to temporarily disable GTM loading</p>"
                        }
                    },
                    "title": "Analytics",
                    "additionalProperties": false
                }
            },
            "title": "Wiwo-shared-lib",
            "additionalProperties": false,
            "required": [
                "callToActionEnabled",
                "callToActionLocation",
                "disclaimerEnabled",
                "locale",
                "appUtils",
                "dialog"
            ]
        },
        "stamp-duty-content": {
            "type": "object",
            "$id": "http://jsonschema.net/stamp-duty-content",
            "properties": {
                "notes": {
                    "type": "object",
                    "$id": "http://jsonschema.net/stamp-duty-content/notes",
                    "properties": {
                        "showNotes": {
                            "type": "boolean",
                            "$id": "http://jsonschema.net/stamp-duty-content/notes/showNotes",
                            "title": "Show Notes",
                            "default": true
                        },
                        "state": {
                            "type": "object",
                            "$id": "http://jsonschema.net/stamp-duty-content/notes/state",
                            "properties": {
                                "qld": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/qld",
                                    "title": "Qld",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "vic": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/vic",
                                    "title": "Vic",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "nsw": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/nsw",
                                    "title": "Nsw",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "act": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/act",
                                    "title": "Act",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "sa": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/sa",
                                    "title": "Sa",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "tas": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/tas",
                                    "title": "Tas",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "nt": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/nt",
                                    "title": "Nt",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                },
                                "wa": {
                                    "type": "string",
                                    "$id": "http://jsonschema.net/stamp-duty-content/notes/state/wa",
                                    "title": "Wa",
                                    "default": "{{ data.stampDutyResult.notes }}"
                                }
                            },
                            "title": "State",
                            "additionalProperties": false
                        }
                    },
                    "title": "Notes",
                    "additionalProperties": false,
                    "required": [
                        "showNotes"
                    ]
                }
            },
            "title": "Stamp-duty-content",
            "additionalProperties": false,
            "required": [
                "notes"
            ]
        }
    },
    "required": [
        "wiwo-shared-lib",
        "stamp-duty-content"
    ]
};
