export const COLORS = {
    black: 'rgb(40, 44, 52)',
    black12: 'rgba(40, 44, 52, 0.12)',
    grey: 'rgb(155, 151, 152)',
    yellow: 'rgb(247, 188, 63)',
    blue: 'rgb(98, 165, 252)',
    darkBlue: 'rgb(88, 149, 224)',
    green: 'rgb(49, 208, 201)',
    darkGreen: 'rgb(45, 179, 167)',
    violet: 'rgb(145, 112, 251)',
    darkViolet: 'rgb(130, 101, 224)',
    red: 'rgb(250, 136, 97)'
};

export const STYLES = {
    gridContainer: {
        height: '100%'
    }
};

export default {
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif'
    },
    overrides: {
        MuiButton: {
            root: {
                fontSize: 18,
                padding: 0,
                borderRadius: 4,
                color: COLORS.black,
                '&:hover': {
                    backgroundColor: COLORS.black12
                }
            },
            raised: {
                lineHeight: 1,
                minWidth: 180,
                minHeight: 46
            }
        },
        MuiIcon: {
            root: {
                fontSize: 32
            }
        },
        Paper: {
            root: {
                borderRadius: 4
            }
        },
        MuiExpansionPanel: {
            root: {
                '&:first-child': {
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4
                },
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }
        }
    }
}
