// Theme JS
page.includeJSFooterlibs.theme = EXT:kreativanttheme/Resources/Public/JavaScript/theme.js

// Theme Scss
page.includeCSS.custom = EXT:kreativanttheme/Resources/Private/Scss/custom.scss

#################
### Textmedia ###
#################
tt_content.textmedia {
    templateName = TEXT
    templateName.stdWrap.cObject = CASE
    templateName.stdWrap.cObject {
        key.field = layout

        default = TEXT
        default.value = Textmedia
    }
}

## minfiy html
plugin.tx_min.tinysource {
    enable = 1
    head {
        stripTabs = 1
        stripNewLines = 1
        stripDoubleSpaces = 1
        stripTwoLinesToOne = 1
        # Caution with this option! Indention sensitive code may break.
        stripSpacesBetweenTags = 0
    }
    body {
        stripComments = 1
        stripTabs = 1
        stripNewLines = 1
        stripDoubleSpaces = 1
        # Caution with this option! Indention sensitive code may break.
        stripSpacesBetweenTags = 0
        stripTwoLinesToOne = 0
        preventStripOfSearchComment = 1

        protectCode {
            10 = /(<textarea.*?>.*?<\/textarea>)/is
            20 = /(<pre.*?>.*?<\/pre>)/is
        }
    }
    oneLineMode = 1
}

## disable minfied if beuser
[globalVar = TSFE : beUserLogin > 0] && [globalVar = GP:debug = 1]
    plugin.tx_min.tinysource.enable = 0
    config {
        linkVars := addToList(debug(1))
        compressCss = 0
        concatenateCss = 0
        compressJs = 0
        concatenateJs = 0
    }
[global]