/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Video from 'react-native-video';
import TabViewExample from './TabViewExample';
import SwiperComponent from './SwiperComponent';

import * as Progress from 'react-native-progress';
import Spacer from 'react-native-spacer';
import PhoneInput from 'react-native-phone-input';
import Orientation from 'react-native-orientation';
import ScreenOrientation from './ScreenOrientation';
import Modal from 'react-native-modal';
import KeepAwake from 'react-native-keep-awake';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

Icon.loadFont();
FontAwesome.loadFont();
AntDesign.loadFont();

class App extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>

            <FontAwesome name="rocket" size={30} color="#900" />
            <AntDesign name="info" size={30} color="#900" />

            {/* <Video
              source={{uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}
              style={styles.backgroundVideo}
            /> */}

            <TabViewExample />
            <SwiperComponent />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            />

            {/* <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} /> */}
            {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}

            <ScreenOrientation />
            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{flex: 1}}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={this.toggleModal} />
              </View>
            </Modal>

            {/* <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item
                buttonColor="#9b59b6"
                title="New Task"
                onPress={() => console.log('notes tapped!')}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#3498db"
                title="Notifications"
                onPress={() => {}}>
                <Icon
                  name="md-notifications-off"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="#1abc9c"
                title="All Tasks"
                onPress={() => {}}>
                <Icon name="md-done-all" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton> */}
            {/* <KeepAwake /> */}
            <Button
              title="Show ImagePicker"
              onPress={() => {
                ImagePicker.showImagePicker(
                  {
                    title: 'Select Avatar',
                    customButtons: [
                      {name: 'fb', title: 'Choose Photo from Facebook'},
                    ],
                    storageOptions: {
                      skipBackup: true,
                      path: 'images',
                    },
                  },
                  response => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                      console.log(
                        'User tapped custom button: ',
                        response.customButton,
                      );
                    } else {
                      const source = {uri: response.uri};
                      console.log('response.uri', response.uri);
                    }
                  },
                );
              }}
            />
            <Avatar
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Sign in with Facebook</Text>
            </LinearGradient>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
