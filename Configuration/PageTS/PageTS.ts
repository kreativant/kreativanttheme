// define layout stuff
TCEFORM {
    tt_content {

        frame_class {
            addItems {

            }
        }

        layout {
            types {
                textmedia {
                    addItems {

                    }
                }

                slider {
                    removeItems = 1, 2, 3
                }

                teaser {
                    removeItems = 1, 2, 3

                    addItems {

                    }
                }
            }
        }
    }

    tx_kreativant_slider.layout_style.addItems {
        0 = Default
    }

    tx_kreativant_teaser.layout_style.addItems {
        0 = Default
    }

    tx_kreativant_masonrygrid.layout_style.addItems {
        0 = Default
    }

    tx_kreativant_masonrygrid.tile_size.addItems {
        0 = Default
    }
}

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kreativanttheme/Configuration/PageTS/BackendLayouts/Default.ts">