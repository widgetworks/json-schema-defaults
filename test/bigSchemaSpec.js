import defaults from '../lib/defaults';
import { schema } from './stamp-duty-schema';


/**
 * big schema:
 */
describe('big schema:', function(){
    
    it('sets defaults for real schema', function(){
    	const defaultValues = defaults(schema);
    	expect(defaultValues).toEqual({
            'wiwo-shared-lib': {
                PREFER_SHARED_CONTENT: false,
                callToActionEnabled: true,
                // callToActionContent: '',
                callToActionLocation: 'bottom',
                "dialog": {
                    "ok": "Close"
                },
                // headerContent
                disclaimerEnabled: true,
                products: {
                    PREFER_SHARED_PRODUCTS: false,
                    productGroupsEnabled: false,
                    hideProductGroups: false
                },
                // tooltips: [],
                locale: {
                    currency: '$',
                    interestSuffix: '$0 p.a.',
                    percentInputSuffix: ' p.a.',
                    "plurals": {
                        "term": {
                            "month": {
                                "1": "$0 month",
                                "other": "$0 months"
                            },
                            "year": {
                                "1": "$0 year",
                                "other": "$0 years",
                                "separator": ", "
                            }
                        }
                    }
                },
                appUtils: {
                    "information": "About this calculator",
                    "print": "Print",
                    "share": "Share or save your results",
                    "showShareButton": false
                },
                accessibility: {
                    tabToSlider: true
                },
                analytics: {
                    enabled: true
                }
            },
            'stamp-duty-content': {
                notes: {
                    showNotes: true,
                    state: {
                        qld: '{{ data.stampDutyResult.notes }}',
                        vic: '{{ data.stampDutyResult.notes }}',
                        nsw: '{{ data.stampDutyResult.notes }}',
                        act: '{{ data.stampDutyResult.notes }}',
                        sa:  '{{ data.stampDutyResult.notes }}',
                        tas: '{{ data.stampDutyResult.notes }}',
                        nt:  '{{ data.stampDutyResult.notes }}',
                        wa:  '{{ data.stampDutyResult.notes }}'
                    }
                }
            }
        });
    });
    
});
// End of 'big schema:'.
