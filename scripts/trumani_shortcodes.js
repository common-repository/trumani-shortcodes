(function() {
    tinymce.PluginManager.add('trumani_shortcodes_mce_button', function(editor, url){
        editor.addButton('trumani_shortcodes_mce_button',{
            title: 'Trumani Shortcodes',
            type: 'menubutton',
			image: url + '/trumani.png',
            menu: [
                /* Buttons */
                {
                        text: 'Button',
                        onclick: function() {
                                editor.windowManager.open( {
                                        title: 'Trumani Shortcodes - Button',
                                        body: [
                
                                        // Button Text
                                        {
                                                type: 'textbox',
                                                name: 'buttonText',
                                                label: 'Button Text',
                                                value: 'Enter Text Here'
                                        },
                
                                        // Button URL
                                        {
                                                type: 'textbox',
                                                name: 'buttonUrl',
                                                label: 'URL',
                                                value: '#'
                                        },
                
                                        // Button Link Target
                                        {
                                                type: 'listbox',
                                                name: 'buttonLinkTarget',
                                                label: 'Open in new window?',
                                                'values': [
                                                        {text: 'Yes', value: 'yes'},
                                                        {text: 'No', value: ''}
                                                ]
                                        },
                
                                        // Button Grow Class
                                        {
                                                type: 'listbox',
                                                name: 'buttonGrow',
                                                label: 'Grow on Hover?',
                                                'values': [
                                                        {text: 'Yes', value: 'yes'},
                                                        {text: 'No', value: ''}
                                                ]
                                        } ],
                                        onsubmit: function( e ) {
                                                editor.insertContent('[trumani_button link="' + e.data.buttonUrl + '" new="' + e.data.buttonLinkTarget + '" grow="' + e.data.buttonGrow + '"]' + e.data.buttonText + '[/trumani_button]');
                                        }
                                });
                        }
                }, // End button
                
                
                /* Content Box*/
                {
                        text: 'Content Box',
                        onclick: function() {
                                editor.windowManager.open( {
                                        title: 'Trumani Shortcodes - Content Box',
                                        body: [
                
                                        //Content Box Content
                                        {
                                                type: 'textbox',
                                                name: 'boxContent',
                                                label: 'Box Content',
                                                value: ''
                                        },
                                        // Content Box Title
                                        {
                                                type: 'textbox',
                                                name: 'contentTitle',
                                                label: 'Box Title',
                                                value: 'Enter Text Here'
                                        },
                                        // Content Box Text Color
                                        {
                                                type: 'textbox',
                                                name: 'boxTextColor',
                                                label: 'Text Color',
                                                value: '#000'
                                        },
                                        // Content Box Background Color
                                        {
                                                type: 'textbox',
                                                name: 'boxBackColor',
                                                label: 'Background Color',
                                                value: '#000'
                                        },
                                        // Content Box Border Type
                                        {
                                                type: 'listbox',
                                                name: 'boxBorderType',
                                                label: 'Select Border Type',
                                                'values': [
                                                        {text: 'None', value: ''},
                                                        {text: 'Solid', value: 'solid'},
                                                        {text: 'Dotted', value: 'dotted'},
                                                        {text: 'Dashed', value: 'dashed'},
                                                        {text: 'Double', value: 'double'}
                                                ]
                                        },
                                        // Content Box Border Color
                                        {
                                                type: 'textbox',
                                                name: 'boxBorderColor',
                                                label: 'Border Color',
                                                value: ''
                                        },
                                        //Content Box Border Size
                                        {
                                                type: 'textbox',
                                                name: 'boxBorderSize',
                                                label: 'Border Size',
                                                value: ''
                                        },
                                        //Content Box Rounded Corners
                                        {
                                                type: 'listbox',
                                                name: 'boxBorderCorners',
                                                label: 'Do you want rounded corners?',
                                                'values': [
                                                        {text: 'Yes', value: 'yes'},
                                                        {text: 'No', value: ''}
                                                ]
                                        },
                                         //Content Box Icon
                                        {
                                                type: 'textbox',
                                                name: 'boxIcon',
                                                label: 'Icon (leave none if not using)',
                                                value: 'none'
                                        },
                                        //Content Box Icon Position
                                        {
                                                type: 'listbox',
                                                name: 'boxIconPosition',
                                                label: 'Select Icon Location',
                                                'values': [
                                                        {text: 'Left', value: 'left'},
                                                        {text: 'Right', value: 'right'},
                                                        {text: 'Middle', value: 'middle'}
                                                ]
                                        },
                                        //Content Box Link
                                        {
                                                type: 'textbox',
                                                name: 'boxLink',
                                                label: 'Link (leave none if not using)',
                                                value: 'none'
                                        },
                                        //Content Box Link Text
                                        {
                                                type: 'textbox',
                                                name: 'boxLinkText',
                                                label: 'Link Text',
                                                value: ''
                                        },
                                        //Content Box Clickable
                                        {
                                                type: 'listbox',
                                                name: 'boxClickable',
                                                label: 'Is Box A Link',
                                                'values': [
                                                        {text: 'No', value: 'no'},
                                                        {text: 'Yes', value: 'yes'}
                                                ]
                                        },
                                        //Content Box Link
                                        {
                                                type: 'textbox',
                                                name: 'boxClickableLink',
                                                label: 'Box Link',
                                                value: 'none'
                                        }],
                                        onsubmit: function( e ) {
                                                editor.insertContent('[trumani_content_box title="' + e.data.contentTitle + '" text_color="' + e.data.boxTextColor + '" background_color="' + e.data.boxBackColor + '" border_type="' + e.data.boxBorderType + '" border_color="' + e.data.boxBorderColor + '" border_width="' + e.data.boxBorderSize + '" rounded_corners="' + e.data.boxBorderCorners + '" icon="' + e.data.boxIcon + '" link="' + e.data.boxLink + '" link_text="' + e.data.boxLinkText + '" icon_position="' + e.data.boxIconPosition + '" box_clickable="' + e.data.boxClickable + '" box_link="' + e.data.boxClickableLink + '"]' + e.data.boxContent + '[/trumani_content_box]');
                                        }
                                });
                        }
                }, // End Client Portal
                
                /* Separator */
                {
                        text: 'Separator',
                        onclick: function() {
                                editor.windowManager.open( {
                                        title: 'Trumani Shortcodes - Separator',
                                        body: [
                
                                        // Separator Margin Top
                                        {
                                                type: 'textbox',
                                                name: 'separatorMarginTop',
                                                label: 'Margin Top',
                                                value: '5'
                                        },
                
                                        // Button URL
                                        {
                                                type: 'textbox',
                                                name: 'separatorMarginBottom',
                                                label: 'Margin Bottom',
                                                value: '5'
                                        }],
                                        onsubmit: function( e ) {
                                                editor.insertContent('[trumani_separator margin_top="' + e.data.separatorMarginTop + '" margin_bottom="' + e.data.separatorMarginBottom + '" /]');
                                        }
                                });
                        }
                }, // End Separator
                /* Font Icons*/
                {
                        text: 'Font Icons',
                        onclick: function() {
                                editor.windowManager.open( {
                                        title: 'Trumani Shortcodes - Font Icons',
                                        body: [
                
                                        // Font Icon Icon
                                        {
                                                type: 'textbox',
                                                name: 'fontIcon',
                                                label: 'Icon Class',
                                                value: ''
                                        },
                
                                        // Font Icon Color
                                        {
                                                type: 'textbox',
                                                name: 'fontIconColor',
                                                label: 'Color',
                                                value: ''
                                        },
                                        // Font Icon Size
                                        {
                                                type: 'textbox',
                                                name: 'fontIconSize',
                                                label: 'Size (use px, em, ect.)',
                                                value: ''
                                        }],
                                        onsubmit: function( e ) {
                                                editor.insertContent('[trumani_icon icon="' + e.data.fontIcon + '" color="' + e.data.fontIconColor + '" size="' + e.data.fontIconSize + '" /]');
                                        }
                                });
                        }
                }, // End Font Icons
            ]
        });
    });
}) ();