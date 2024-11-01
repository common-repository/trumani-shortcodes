<?php
    /*
    Plugin Name: Trumani Shortcodes
    Plugin URI:
    Description: Custom Shortcodes Provided by Trumani, including an icon font set, responsive content boxes, separator, and buttons. A table design is also included.
    Version: 1.0
    Author: Trumani
    Author URI: http://trumani.com
    */
    
    //Add button to visual editor
    function trumani_shortcodes_add_mce_button(){
        if (!current_user_can('edit_posts') && !current_user_can('edit_pages')){
            return;
        }
        if ('true' == get_user_option('rich_editing')){
            add_filter('mce_external_plugins', 'trumani_shortcodes_add_tinymce_plugin');
            add_filter('mce_buttons', 'trumani_shortcodes_register_mce_button');
        }
    }
    add_action('admin_head', 'trumani_shortcodes_add_mce_button');
    
    function trumani_shortcodes_add_tinymce_plugin($plugin_array){
        $plugin_array['trumani_shortcodes_mce_button'] = plugins_url('/scripts/trumani_shortcodes.js',__FILE__ );
        return $plugin_array;
    }
    
    function trumani_shortcodes_register_mce_button($buttons){
        array_push($buttons, 'trumani_shortcodes_mce_button');
        return $buttons;
    }
    
    //Add stylesheet to pages   
    function register_plugin_styles() {
        wp_register_style( 'trumani_shortcodes', plugins_url( '/css/trumani_shortcodes.css', __FILE__ ) );
        wp_enqueue_style( 'trumani_shortcodes' );
    }
    add_action( 'wp_enqueue_scripts', 'register_plugin_styles' );
    
    //Shortcodes
    
    /*Button with link*************************************************************************************************************/
    function button_with_link( $atts, $content = null ){
        extract(shortcode_atts(array('link' => '#',
                                     'new' =>'no',
                                     'grow' =>'no'), $atts));       
        $target = "";
        $growing = "";
        
        if ($new == "yes"){
            $target = ' target="_blank"';
        }
        if ($grow == "yes"){
            $growing = 'grow';
        }
        
        return '<a class="trumani_button ' . $growing . '" href="' . $link . '"' . $target . '>' . $content . '</a>';
    }
    add_shortcode( 'trumani_button', 'button_with_link' );
    /*End Button with Link*********************************************************************************************************/
    
    /*Content Box******************************************************************************************************************/
    function content_box_shortcode( $atts, $content = null ){
        extract(shortcode_atts(array('title' => '',
                                     'text_color' => '#000',
                                     'background_color' => '#fff',
                                     'border_type' => 'none;',
                                     'border_color' => '',
                                     'border_width' => '',
                                     'rounded_corners' => 'no',
                                     'icon' => 'none',
                                     'link' => 'none',
                                     'link_text' => '',
                                     'icon_position' => 'none',
                                     'box_clickable' => 'no',
                                     'box_link' => 'none'), $atts));

        $border = "";
        if ($border_type !== "none"){
            $border = 'border: ' . $border_width . 'px ' . $border_type . ' ' . $border_color . ';';
        }
        $corner = "";
        if ($rounded_corners == "yes"){
            $corner = "content_box_rounded_corners";
        }
        $box_icon = "";
        if ($icon !== "none"){
            $box_icon = $icon;
        }
        $bottom_link = "";
        if ($link !== "none"){
            $bottom_link = '<a href="' . $link . '">' . $link_text . '</a>';
        }
        $icon_location = '<h2> ' . $title . '</h2>';
        if ($icon_position !== "none"){
            switch ($icon_position){
                case "left":
                    $icon_location = '<span class="' . $box_icon . ' icon_left_side"></span><h2>' . $title . '</h2>';
                    break;
                case "right":
                    $icon_location = '<h2>' . $title . '</h2><span class="' . $box_icon . ' icon_right_side"></span>';
                    break;
                case "middle":
                    $icon_location = '<p class="icon_middle"><span class="' . $box_icon . '"></span></p><h2> ' . $title . '</h2>';
                    break;
            }
        }
        if ($box_clickable == "yes"){
            return '<a href="' . $box_link . '" class="trumani_content_box ' . $corner . '" style="' . $border . ' background-color:' . $background_color . '; color:' . $text_color . '">' . $icon_location . '<p>' . $content . '</p><p class="trumani_content_box_link_text">' . $link_text . '</p></a>';
        }
        else{
            return '<div class="trumani_content_box ' . $corner . '" style="' . $border . ' background-color:' . $background_color . ';color:' . $text_color . '">' . $icon_location . '<p>' . $content . '</p>' . $bottom_link . '</div>';
        }
    }
    add_shortcode( 'trumani_content_box', 'content_box_shortcode' );
    /*End Content Box**************************************************************************************************************/
    
    /*Trumani Separator*************************************************************************************************************/
    function trumani_separator_shortcode($atts){
        extract(shortcode_atts(array('margin_top' => '5',
                                     'margin_bottom' => '5'), $atts));

        return '<div class="trumani_separator" style="margin-top:' . $margin_top . 'px;margin-bottom: ' . $margin_bottom . 'px;"></div>';
    }
    add_shortcode( 'trumani_separator', 'trumani_separator_shortcode' );
    /*End Trumani Separator*********************************************************************************************************/
    
    /*Font Icons*******************************************************************************************************************/
    function trumani_icon_shortcode($atts){
        extract(shortcode_atts(array('icon' => '',
                                     'color' => 'default',
                                     'size' => 'default'), $atts));
        $icon_color = "";
        if ($color !== "default"){
            $icon_color = $color;
        }
        $icon_size = "";
        if ($size !== "default"){
            $icon_size = $size;
        }
        $style = 'style="color:' . $icon_color . ';font-size:' . $icon_size . ';"';
        
        return '<span class="' . $icon . '" ' . $style . '></span>';
    }
    add_shortcode( 'trumani_icon', 'trumani_icon_shortcode');
    /*End Font Icons***************************************************************************************************************/