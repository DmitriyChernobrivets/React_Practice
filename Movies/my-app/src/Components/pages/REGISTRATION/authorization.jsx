import React, { Fragment } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "./styles.css";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
const Autorization = () => (
  <form className={styles.autorization_form}>
    <h3>Welcome to KinoBase</h3>
    <FormControl className={styles.margin}>
      <InputLabel
        htmlFor="login"
        classes={{
          // root: styles.cssLabel,
          focused: styles.focus
        }}
      >
        Login
      </InputLabel>
      <Input
        id="login"
        classes={{
          underline: styles.underline
        }}
        required={true}
      />
    </FormControl>
    <FormControl className={styles.margin}>
      <InputLabel
        htmlFor="password"
        classes={{
          focused: styles.focus
        }}
      >
        Password
      </InputLabel>
      <Input
        id="password"
        classes={{
          underline: styles.underline
        }}
        required={true}
        type="password"
      />
    </FormControl>
    <Button>Log In</Button>
  </form>
);

export default Autorization;
