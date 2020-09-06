import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5A54F2',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#FF5541',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(', '),
        //fontSize: '14px',
        h1: {
            fontWeight: 700,
            fontSize: "20px",
            margin: '10px 0',
            color: '#5A54F2',
        },
        /*  h2: {
             fontWeight: 600,
             fontSize: "25px",
             margin: '10px',
         }, */
        h3: {
            fontWeight: 500,
            fontSize: "18px",
            marginBottom: '10px'
        },
        /*        h4: {
                    fontWeight: 400,
                    fontSize: "16px",
                    margin: '10px'
                },*/
        h5: {
            fontWeight: 500,
            fontSize: "16px",
            marginBottom: '5px'
        },
        body1: {
            fontWeight: 400,
            fontSize: "16px",
            marginBottom: '5px'
        }
    },

    shape: {
        borderRadius: 9
    },

});

export default theme;