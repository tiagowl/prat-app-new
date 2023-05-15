import { extendTheme } from "native-base";

const theme = extendTheme({
        colors:{
            praticantes:{
                one: "#23568A",
                two: "#29B1C1",
                three: "#0189A4",
                four: "#ff467d"
            },
            main:{
                brown: "#592e0c"
            },
            header:{
                gray: "#666666",
                gray2: "#333333",
            },
            background:{
                silver: "#f7f7f7",
                silver2: "#f1f1f1",
                gray: "#a4a4a4",
                gray2: "#d0d0d0",
                gray3: "#e8e8e8",
                gray4: "#f5f5f5",
                gray5: "#fcfcfc",
                blue: "#232f3f",
                blue2: "#324359",
            },
            primary:{
                yellow: "#fec93f",
                blue1: "#3566a8",
                blue2: "#375e93",
                blue3: "#447dca",
                blue4: "#88a1c179",
                green1: "#339c28",
                green2: "#2ade75",
                green3: "#48cb99",
                red1: "#ff0000",
                red2: "#ca4444",
                red3: "#e56e6e",
                red4: "#c56060",
            },
            secondary:{
                yellow: "#e4b438"
            },
            sociais:{
                googleRed: "#e94335",
                facebookBlue: "#3b5998",
                appleBlack: "#000000",
                whatsapp: "#24d366"
            },
            line:{
                gray1: "#d2d2d2",
                gray2: "#cccccc",
            },
            text: {
                gray1: "#79828e",
                gray2: "#6f6f6f",
                gray3: "#999999",
                gray4: "#939393",
                gray5: "#b3b3b3",
                gray6: "#9f9f9f",
                gray7: "#808080",
            },
            light:{
                gray: "#f7f7f7"
            },
            needType:{
                Events:"#fb5d5d",
                PrayerFasting: "#3baccc",
                GoodsItems:"#fbaf5d",
                Services: "#44ca99",
                FinancialResources: "#c988e8"
            },
            avatar:{
                one: "#95c6d9",
                two: "#98d995",
                three: "#fbaf5d",
                four: "#fb5d5d",
                five: "#c270e8",
                six: "#9595d9"
            },
            greenBadge: "#44ca99",
            newsSignage: "#f49e39",
            transparent: "transparent",
            online: "#29B1C1"
        },
        fontConfig:{
            Roboto:{
                black: {
                    normal: "Roboto-Black",
                    italic: "Roboto-BlackItalic"
                },
                bold: {
                    normal: "Roboto-Bold",
                    italic: "Roboto-BoldItalic",
                },
                italic:{
                    normal: "Roboto-Italic"
                },
                light:{
                    normal: "Roboto-Light",
                    italic: "Roboto-LightItalic"
                },
                medium:{
                    normal: "Roboto-Medium",
                    light: "Roboto-MediumItalic"
                },
                regular:{
                    normal: "Roboto-Regular"
                },
                thin:{
                    normal: "Roboto-Thin",
                    italic: "Roboto-ThinItalic"
                }
            }
        },
        fonts:{
            heading: "Roboto",
            body: "Roboto"
        }   
})

export default theme;
