import React from "react";
import "./inputPassword.css";
import iconShowPassword from "../../assets/icons/icon-show-password.svg";
import iconHidePassword from "../../assets/icons/icon-hide-password.svg";

class PasswordInput extends React.Component {
  state = {
    type: "password",
  };

  handleClick = () =>
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));

  showTooltip(event) {
    event.preventDefault();
    event.currentTarget.nextElementSibling.style.display = "block";
  }

  hideTooltip(event) {
    event.preventDefault();
    event.currentTarget.nextElementSibling.style.display = "none";
  }

  render() {
    const { label, name, onChangeProp, error } = this.props;

    return (
      <div className="password-input flex-column">       
          <img
            className="password-icon"
            src={
              this.state.type === "password"
                ? iconShowPassword
                : iconHidePassword
            }
            alt="show password"
            onClick={this.handleClick}
          />
          <span className="label">{label}</span>
          <input
            type={this.state.type}
            name={name}
            className="input-text"
            placeholder="••••••••"
            onChange={onChangeProp? onChangeProp : () => {}}
            onFocus={this.showTooltip}
            onBlur={this.hideTooltip}
          />
          <span className="tooltip">
            A senha deve conter no mínimo 8 caracteres, sendo um maiúsculo, um
           minúsculo, um número e um caracter especial.
          </span>
          <span className="label-error">{error}</span>
      </div>
    );
  }
}

export default PasswordInput;
