
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from '../../assets/images/LandingPage/landingPage.jpeg';

export default makeStyles({
    mainContainer: {
        width: "100%",
        height: "100%",
        margin: "0 0 0 0px",
        backgroundColor: "transparent",
        background: `linear-gradient(to bottom, rgba(29 29 29 / 63%), rgba(29 29 29 / 63%)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute"
    },
    logo:{
    textAlign: "center",
    },
    title: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 30,
        margin: 10
    },
    buttonContainer:{
        display: "flex",
        justifyContent: "center"
    },
    button:{
        padding: 12,
        borderRadius: 13,
        backgroundColor: "#FFA000",
        color: "white",
    },
    navLink:{
       color: "white",
       textDecoration: "none"
    }
});