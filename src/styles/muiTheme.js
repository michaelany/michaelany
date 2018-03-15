export const COLORS = {
    black: 'rgb(40, 44, 52)',
    blue: 'rgb(98, 165, 252)',
    darkBlue: 'rgb(88, 149, 224)',
    green: 'rgb(49, 208, 201)',
    darkGreen: 'rgb(45, 179, 167)',
    violet: 'rgb(145, 112, 251)',
    darkViolet: 'rgb(130, 101, 224)'
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
                padding: 0
            },
            raised: {
                borderRadius: 4,
                lineHeight: 1,
                minWidth: 180,
                minHeight: 46
            }
        },
        MuiIcon: {
            root: {
                fontSize: 32
            }
        }
    }
}
