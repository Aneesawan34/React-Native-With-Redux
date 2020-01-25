import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {appActionFakeApi} from '../../Redux/Actions/Action';

class Testone extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: 'blue'}}>{this.props.myName}</Text>
        </View>
        <View
          style={{
            width: '70%',
            alignSelf: 'center',
            height: 300,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => this.props.stateChange()}
            style={{
              backgroundColor: 'red',
              width: '50%',
              alignSelf: 'center',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16, color: '#fff'}}>Press me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    myName: state.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stateChange: () => dispatch(appActionFakeApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testone);
