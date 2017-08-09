import React, {Component} from 'react';
import RN from 'react-native';
import LibQ from 'purple-lib-q';
import LibR from 'purple-lib-r';

var _engine;

class ModuleComponent extends Component {
  render() {
    return (
      <RN.View style={{backgroundColor: 'cyan'}}>
        <RN.Text style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'purple'
          }}>
          PurpleModB
        </RN.Text>
        <RN.Text style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'blue'
          }}>
          lib-q version: {LibQ.version()}{'\n'}
          lib-r version: {LibR.version()}{'\n'}
          lib-q used by lib-r: {LibR.libQVersion()}
        </RN.Text>
      </RN.View>
    );
  }
}

export default class PurpleModA {
  static version() {
    return '0.1.0'
  }

  static name() {
    return 'purple-mod-b';
  }

  static init(purpleEngine) {
    _engine = purpleEngine;
    purpleEngine.registerComponent(ModuleComponent);
  }
}