/** @format */

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dropzone from "react-dropzone";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import uploadIcon from "../../assets/images/upload.png";

const useStyles = makeStyles({
	dialogContainer: {
		display: "flex",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#FFA000",
		color: "white",
	},
	dialogContentContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		border: "2px dashed #ccc",
		margin: 25,
	},
	uploadImageContainer: {
		display: "flex",
		justifyContent: "center",
	},
	imageUpload: {
		width: "35%",
	},
	imagePreview: {
		borderRadius: 10,
		width: 100,
		height: 100,
	},
	thumbsContainer: {
		display: "flex",
		marginTop: 10,
		marginLeft: 25,
	},
});

const FileUploaderDialog = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.dialogContainer}>
      <Dialog
        fullWidth
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        className={classes.dialogContainer}
        PaperProps={{
          style: {
            height: 500,
            width: 500,
            backgroundColor: "white",
            borderRadius: 10,
          },
        }}
      >
        <DialogTitle id="max-width-dialog-title">
          Upload your file here
        </DialogTitle>
        <DialogContent className={classes.dialogContentContainer}>
          <Dropzone onDrop={props.handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className={classes.uploadImageContainer}>
                    <img
                      className={classes.imageUpload}
                      src={uploadIcon}
                      alt="Upload-Icon"
                    />
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </DialogContent>
        {props.file ? (
          <div className={classes.thumbsContainer}>
            <img className={classes.imagePreview} src={props.file.preview} alt="a upload preview"/>
          </div>
        ) : (
          <></>
        )}
        <DialogActions className={classes.dialogActionContainer}>
          <Button
            variant="contained"
            disabled={props.loading}
            onClick={props.close}
            color="primary"
            size="large"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={props.loading || !props.file}
            onClick={props.submit}
            color="primary"
            size="large"
            className={classes.button}
          >
            Save
          </Button>
        </DialogActions>
        {props.loading && <LinearProgress color="secondary" />}
      </Dialog>
    </div>
  );
};

export default FileUploaderDialog;
