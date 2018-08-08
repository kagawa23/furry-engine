import React, { Component } from "react";
import { connect } from "react-redux";
import { saveMoney, widthdrawMoney } from "./saving";

const mapPropsToState = saving => ({
  saving
});

const mapDispatchToProps = {
  saveMoney,
  widthdrawMoney
};

class app extends Component {
  render() {
    const { saving, saveMoney, widthdrawMoney } = this.props;
    return (
      <div>
        <div>
          <span>小明</span>
          ¥:<input type="text" value={saving} />
        </div>
        <button onClick={saveMoney}>存钱</button>
        <button onClick={widthdrawMoney}>取钱</button>
        <div />
      </div>
    );
  }
}

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(app);
