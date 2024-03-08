import React from "react";
import GlobalState from "../GlobalState";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import { AppButton } from "../components/AppButton";
import DropdownComp from "../components/DropdownComp";
import SwitchComponent from "../components/Switch";
import NumericInput from "../components/NumericInput";
import { MinusButton, PlusButton } from "../components/AppButton";
import { Feather, Entypo } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";

const Scouting = () => {
  const [matchData, setMatchData] = useState(GlobalState);

  const [showHomeInfo, setHomeInfo] = useState(true);
  const [showAutoInfo, setAutoInfo] = useState(false);
  const [showTeleOpInfo, setTeleOpInfo] = useState(false);
  const [showQrCodeinfo, setQrCodeInfo] = useState(false);

  const [showAutoPickupInfo, setAutoPickupInfo] = useState(false);
  const [showAutoScoreInfo, setAutoScoreInfo] = useState(false);

  const [showTeleOpPickupInfo, setTeleOpPickupInfo] = useState(false);
  const [showTeleOpScoreInfo, setTeleOpScoreInfo] = useState(false);
  const [showMiscInfo, setMiscInfo] = useState(false);
  const [showEndGameinfo, setEndGameInfo] = useState(false);

  const [qrCodeText, setQRCodeText] = useState("");
  const [displayedMatchData, setDisplayedMatchData] = useState(null);

  const teamNumberData = [
    { label: "188", value: "frc188" },
    { label: "854", value: "frc854" },
    { label: "1310", value: "frc1310" },
    { label: "1325", value: "frc1325" },
    { label: "2198", value: "frc2198" },
    { label: "2852", value: "frc2852" },
    { label: "4069", value: "frc4069" },
    { label: "5031", value: "frc5031" },
    { label: "5032", value: "frc5032" },
    { label: "5036", value: "frc5036" },
    { label: "5719", value: "frc5719" },
    { label: "5834", value: "frc5824" },
    { label: "6135", value: "frc6135" },
    { label: "6140", value: "frc6140" },
    { label: "6141", value: "frc6141" },
    { label: "6977", value: "frc6977" },
    { label: "7520", value: "frc7520" },
    { label: "7558", value: "frc7558" },
    { label: "7603", value: "frc7603" },
    { label: "7659", value: "frc7659" },
    { label: "7712", value: "frc7712" },
    { label: "7902", value: "frc7902" },
    { label: "8574", value: "frc8574" },
    { label: "9262", value: "frc9262" },
    { label: "9263", value: "frc9263" },
    { label: "9527", value: "frc9527" },
    { label: "9569", value: "frc9569" },
    { label: "9621", value: "frc9621" },
    { label: "9659", value: "frc9659" },
  ];

  const driverStationData = [
    { label: "Red 1", value: "red1" },
    { label: "Red 2", value: "red2" },
    { label: "Red 3", value: "red3" },
    { label: "Blue 1", value: "blue1" },
    { label: "Blue 2", value: "blue2" },
    { label: "Blue 3", value: "blue3" },
  ];

  const startingPositionData = [
    { label: "Score Table", value: "scoreTable" },
    { label: "Middle", value: "middle" },
    { label: "Near Side", value: "near" },
  ];

  const updateTeamNumber = (teamNumber) => {
    setMatchData((prevState) => ({
      ...prevState,
      teamNumber: teamNumber,
    }));
  };

  const updateDriverStation = (driverStation) => {
    setMatchData((prevState) => ({
      ...prevState,
      driverStation: driverStation,
    }));
  };

  const updateStartingPosition = (startingPosition) => {
    setMatchData((prevState) => ({
      ...prevState,
      startingPosition: startingPosition,
    }));
  };

  const onTogglePreloadSwitch = () => {
    setMatchData((prevState) => ({
      ...prevState,
      preload: !prevState.preload,
    }));
  };

  const handleInputChange = (matchNumber) => {
    // Check if the input is a valid number
    if (!isNaN(matchNumber)) {
      // Update the state if it's a valid number
      setMatchData((prevState) => ({
        ...prevState,
        matchNumber: Number(matchNumber),
      }));
    }
  };

  const decreaseMatchCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      matchNumber: prevState.matchNumber - 1,
    }));
  };

  const increaseMatchCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      matchNumber: prevState.matchNumber + 1,
    }));
  };

  const resetData = () => {
    setMatchData((prevState) => ({
      ...prevState,
      wingPickupAuto: 0,
      totalPickupAuto: 0,
      centerLine1: false,
      centerLine2: false,
      centerLine3: false,
      centerLine4: false,
      centerLine5: false,
      leave: false,
      scoredAmpAuto: 0,
      scoredSpeakerAuto: 0,
      missedAmpAuto: 0,
      missedSpeakerAuto: 0,
      droppedAuto: 0,
      humanLoadPickup: 0,
      wingPickupTele: 0,
      noMansLandPickup: 0,
      totalPickupTele: 0,
      droppedTele: 0,
      dies: 0,
      beaches: 0,
      tips: 0,
      ampScoredTele: 0,
      ampMissedTele: 0,
      speakerScoredTele: 0,
      speakerMissedTele: 0,
      hang: false,
      harmonyHang: false,
      parked: false,
      trap: false,
      comments: "",
    }));
  };

  const handleNavButtonPress1 = () => {
    setHomeInfo(true);
    setAutoInfo(false);
    setTeleOpInfo(false);
    setQrCodeInfo(false);
  };

  const handleNavButtonPress2 = () => {
    setHomeInfo(false);
    setAutoInfo(true);
    setTeleOpInfo(false);
    setQrCodeInfo(false);
  };

  const handleNavButtonPress3 = () => {
    setHomeInfo(false);
    setAutoInfo(false);
    setTeleOpInfo(true);
    setQrCodeInfo(false);
  };

  const handleNavButtonPress4 = () => {
    setHomeInfo(false);
    setAutoInfo(false);
    setTeleOpInfo(false);
    setQrCodeInfo(true);
  };

  const handleAutoPickupButtonPress = () => {
    setAutoPickupInfo(true);
    setAutoScoreInfo(false);
  };

  const handleAutoScoreButtonPress = () => {
    setAutoPickupInfo(false);
    setAutoScoreInfo(true);
  };

  const onToggleSwitchLeave = () => {
    setMatchData((prevState) => ({
      ...prevState,
      leave: !prevState.leave,
    }));
  };

  const onToggleSwitch1 = () => {
    setMatchData((prevState) => ({
      ...prevState,
      centerLine1: !prevState.centerLine1,
      totalPickupAuto:
        prevState.centerLine1 === false
          ? prevState.totalPickupAuto + 1
          : prevState.totalPickupAuto - 1,
    }));
  };

  const onToggleSwitch2 = () => {
    setMatchData((prevState) => ({
      ...prevState,
      centerLine2: !prevState.centerLine2,
      totalPickupAuto:
        prevState.centerLine2 === false
          ? prevState.totalPickupAuto + 1
          : prevState.totalPickupAuto - 1,
    }));
  };

  const onToggleSwitch3 = () => {
    setMatchData((prevState) => ({
      ...prevState,
      centerLine3: !prevState.centerLine3,
      totalPickupAuto:
        prevState.centerLine3 === false
          ? prevState.totalPickupAuto + 1
          : prevState.totalPickupAuto - 1,
    }));
  };

  const onToggleSwitch4 = () => {
    setMatchData((prevState) => ({
      ...prevState,
      centerLine4: !prevState.centerLine4,
      totalPickupAuto:
        prevState.centerLine4 === false
          ? prevState.totalPickupAuto + 1
          : prevState.totalPickupAuto - 1,
    }));
  };

  const onToggleSwitch5 = () => {
    setMatchData((prevState) => ({
      ...prevState,
      centerLine5: !prevState.centerLine5,
      totalPickupAuto:
        prevState.centerLine5 === false
          ? prevState.totalPickupAuto + 1
          : prevState.totalPickupAuto - 1,
    }));
  };

  const decreaseWingCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      wingPickupAuto: prevState.wingPickupAuto - 1,
      totalPickupAuto: prevState.totalPickupAuto - 1,
    }));
  };

  const increaseWingCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      wingPickupAuto: prevState.wingPickupAuto + 1,
      totalPickupAuto: prevState.totalPickupAuto + 1,
    }));
  };

  const ampScoredCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      scoredAmpAuto: prevState.scoredAmpAuto + (isScore ? 1 : -1),
    }));
  };

  const ampMissCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      missedAmpAuto: prevState.missedAmpAuto + (isScore ? 1 : -1),
    }));
  };
  const speakerScoredCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      scoredSpeakerAuto: prevState.scoredSpeakerAuto + (isScore ? 1 : -1),
    }));
  };

  const speakerMissCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      missedSpeakerAuto: prevState.missedSpeakerAuto + (isScore ? 1 : -1),
    }));
  };

  const autoDroppedCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      droppedAuto: prevState.droppedAuto + (isScore ? 1 : -1),
    }));
  };

  const handleTeleOpPickupButtonPress = () => {
    setTeleOpPickupInfo(true);
    setTeleOpScoreInfo(false);
    setMiscInfo(false);
    setEndGameInfo(false);
  };

  const handleTeleOpScoreButtonPress = () => {
    setTeleOpPickupInfo(false);
    setTeleOpScoreInfo(true);
    setMiscInfo(false);
    setEndGameInfo(false);
  };

  const handleMiscInfoButtonPress = () => {
    setTeleOpPickupInfo(false);
    setTeleOpScoreInfo(false);
    setMiscInfo(true);
    setEndGameInfo(false);
  };

  const handleEndGameInfoButtonPress = () => {
    setTeleOpPickupInfo(false);
    setTeleOpScoreInfo(false);
    setMiscInfo(false);
    setEndGameInfo(true);
  };

  const decreaseHumanCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      humanLoadPickup: prevState.humanLoadPickup - 1,
      totalPickupTele: prevState.totalPickupTele - 1,
    }));
  };

  const increaseHumanCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      humanLoadPickup: prevState.humanLoadPickup + 1,
      totalPickupTele: prevState.totalPickupTele + 1,
    }));
  };

  const decreaseNoMansCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      noMansLandPickup: prevState.noMansLandPickup - 1,
      totalPickupTele: prevState.totalPickupTele - 1,
    }));
  };

  const increaseNoMansCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      noMansLandPickup: prevState.noMansLandPickup + 1,
      totalPickupTele: prevState.totalPickupTele + 1,
    }));
  };

  const decreaseTeleWingCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      wingPickupTele: prevState.wingPickupTele - 1,
      totalPickupTele: prevState.totalPickupTele - 1,
    }));
  };

  const increaseTeleWingCounter = () => {
    // Update variable1 and variable2 here
    setMatchData((prevState) => ({
      ...prevState,
      wingPickupTele: prevState.wingPickupTele + 1,
      totalPickupTele: prevState.totalPickupTele + 1,
    }));
  };

  const ampTeleScoredCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      ampScoredTele: prevState.ampScoredTele + (isScore ? 1 : -1),
    }));
  };

  const ampTeleMissCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      ampMissedTele: prevState.ampMissedTele + (isScore ? 1 : -1),
    }));
  };
  const speakerTeleScoredCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      speakerScoredTele: prevState.speakerScoredTele + (isScore ? 1 : -1),
    }));
  };

  const speakerTeleMissCounter = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      speakerMissedTele: prevState.speakerMissedTele + (isScore ? 1 : -1),
    }));
  };

  const noteDropped = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      droppedTele: prevState.droppedTele + (isScore ? 1 : -1),
    }));
  };

  const botDied = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      dies: prevState.dies + (isScore ? 1 : -1),
    }));
  };

  const botBeaches = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      beaches: prevState.beaches + (isScore ? 1 : -1),
    }));
  };

  const botTips = (isScore) => {
    setMatchData((prevState) => ({
      ...prevState,
      tips: prevState.tips + (isScore ? 1 : -1),
    }));
  };

  const onToggleHangSwitch = () => {
    setMatchData((prevState) => ({
      ...prevState,
      hang: !prevState.hang,
    }));
  };

  const onToggleHarmonyHangSwitch = () => {
    setMatchData((prevState) => ({
      ...prevState,
      harmonyHang: !prevState.harmonyHang,
    }));
  };

  const onToggleParkedSwitch = () => {
    setMatchData((prevState) => ({
      ...prevState,
      parked: !prevState.parked,
    }));
  };

  const onToggleTrapSwitch = () => {
    setMatchData((prevState) => ({
      ...prevState,
      trap: !prevState.trap,
    }));
  };

  const handleCommentsChange = (text) => {
    setMatchData((prevState) => ({
      ...prevState,
      comments: text,
    }));
  };
  const generateQRCode = () => {
    const data = JSON.stringify(matchData);
    setQRCodeText(data);
    setDisplayedMatchData(matchData);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../assets/team188logo.png")}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.navButtonWrapper}>
            <AppButton
              title="Home"
              onPress={handleNavButtonPress1}
              isPressed={showHomeInfo}
            />
            <AppButton
              title="Auto"
              onPress={handleNavButtonPress2}
              isPressed={showAutoInfo}
            />
            <AppButton
              title="TeleOp"
              onPress={handleNavButtonPress3}
              isPressed={showTeleOpInfo}
            />
            <AppButton
              title="QR Code"
              onPress={handleNavButtonPress4}
              isPressed={showQrCodeinfo}
            />
          </View>
          {showHomeInfo && (
            <View>
              <View>
                <View style={styles.matchNumberWrapper}>
                  <Text style={styles.matchNumberText}>Match #:</Text>
                  <MinusButton onPress={decreaseMatchCounter} />
                  <View style={styles.matchNumberBox}>
                    <NumericInput
                      placeholder="Enter #"
                      onChangeText={handleInputChange}
                      value={String(matchData.matchNumber)}
                    />
                  </View>
                  <PlusButton onPress={increaseMatchCounter} />
                </View>
              </View>
              <View>
                <DropdownComp
                  options={driverStationData}
                  updateTeamNumber={updateDriverStation}
                  labelText="Driver Station: "
                />
              </View>
              <View>
                <DropdownComp
                  options={teamNumberData}
                  updateTeamNumber={updateTeamNumber}
                  labelText="Team Number: "
                />
              </View>
              <View>
                <DropdownComp
                  options={startingPositionData}
                  updateTeamNumber={updateStartingPosition}
                  labelText="Start Position: "
                />
              </View>
              <View style={styles.switchWrapperHome}>
                <Text style={styles.wingCounterText}>Pre-load?</Text>
                <SwitchComponent
                  onValueChange={onTogglePreloadSwitch}
                  value={matchData.preload}
                />
              </View>
              <View>
                <AppButton title={"Reset Data"} onPress={resetData} />
              </View>
            </View>
          )}

          {showAutoInfo && (
            <View>
              <View style={styles.buttonWrapper}>
                <AppButton
                  title="Pick Up"
                  onPress={handleAutoPickupButtonPress}
                />
                <AppButton title="Score" onPress={handleAutoScoreButtonPress} />
                <View style={styles.leaveSwitchWrapper}>
                  <Text style={styles.wingCounterText}>Leave?</Text>
                  <SwitchComponent
                    onValueChange={onToggleSwitchLeave}
                    value={matchData.leave}
                  />
                </View>
              </View>
              {showAutoPickupInfo && (
                <View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Wing Pick up</Text>
                    <MinusButton onPress={decreaseWingCounter} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.wingPickupAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={increaseWingCounter} />
                  </View>
                  <View style={styles.switchWrapper}>
                    <Text style={styles.speakerText}>Center Line 1</Text>
                    <SwitchComponent
                      onValueChange={onToggleSwitch1}
                      value={matchData.centerLine1}
                    />
                  </View>
                  <View style={styles.switchWrapper}>
                    <Text style={styles.speakerText}>Center Line 2</Text>
                    <SwitchComponent
                      onValueChange={onToggleSwitch2}
                      value={matchData.centerLine2}
                    />
                  </View>
                  <View style={styles.switchWrapper}>
                    <Text style={styles.speakerText}>Center Line 3</Text>
                    <SwitchComponent
                      onValueChange={onToggleSwitch3}
                      value={matchData.centerLine3}
                    />
                  </View>
                  <View style={styles.switchWrapper}>
                    <Text style={styles.speakerText}>Center Line 4</Text>
                    <SwitchComponent
                      onValueChange={onToggleSwitch4}
                      value={matchData.centerLine4}
                    />
                  </View>
                  <View style={styles.switchWrapper}>
                    <Text style={styles.speakerText}>Center Line 5</Text>
                    <SwitchComponent
                      onValueChange={onToggleSwitch5}
                      value={matchData.centerLine5}
                    />
                  </View>
                </View>
              )}
              {showAutoScoreInfo && (
                <View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Amp</Text>
                    <Feather name="speaker" size={30} color="black" />
                  </View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Scored</Text>
                    <MinusButton onPress={() => ampScoredCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.scoredAmpAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={() => ampScoredCounter(true)} />
                  </View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Missed</Text>
                    <MinusButton onPress={() => ampMissCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.missedAmpAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={() => ampMissCounter(true)} />
                  </View>
                  <Divider />
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Speaker</Text>
                    <Entypo name="modern-mic" size={30} color="black" />
                  </View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Scored</Text>
                    <MinusButton onPress={() => speakerScoredCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.scoredSpeakerAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={() => speakerScoredCounter(true)} />
                  </View>
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Missed</Text>
                    <MinusButton onPress={() => speakerMissCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.missedSpeakerAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={() => speakerMissCounter(true)} />
                  </View>
                  <Divider />
                  <View style={styles.wingPickupWrapper}>
                    <Text style={styles.speakerText}>Dropped</Text>
                    <MinusButton onPress={() => autoDroppedCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.droppedAuto}
                      </Text>
                    </View>
                    <PlusButton onPress={() => autoDroppedCounter(true)} />
                  </View>
                </View>
              )}
            </View>
          )}
          {showTeleOpInfo && (
            <View>
              <View style={styles.buttonWrapper}>
                <AppButton
                  title="Pick Up"
                  onPress={handleTeleOpPickupButtonPress}
                />
                <AppButton
                  title="Score"
                  onPress={handleTeleOpScoreButtonPress}
                />
                <AppButton title="Misc" onPress={handleMiscInfoButtonPress} />
                <AppButton
                  title="EndGame"
                  onPress={handleEndGameInfoButtonPress}
                />
              </View>
              {showTeleOpPickupInfo && (
                <View>
                  <View style={styles.wingTelePickupWrapper}>
                    <Text style={styles.pickupTeleCounterText}>Human Load</Text>
                    <MinusButton onPress={decreaseHumanCounter} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.humanLoadPickup}
                      </Text>
                    </View>
                    <PlusButton onPress={increaseHumanCounter} />
                  </View>
                  <Divider />
                  <View style={styles.wingTelePickupWrapper}>
                    <Text style={styles.pickupTeleCounterText}>
                      Middle Zone
                    </Text>
                    <MinusButton onPress={decreaseNoMansCounter} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.noMansLandPickup}
                      </Text>
                    </View>
                    <PlusButton onPress={increaseNoMansCounter} />
                  </View>
                  <Divider />
                  <View style={styles.wingTelePickupWrapper}>
                    <Text style={styles.pickupTeleCounterText}>Wing</Text>
                    <MinusButton onPress={decreaseTeleWingCounter} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.wingPickupTele}
                      </Text>
                    </View>
                    <PlusButton onPress={increaseTeleWingCounter} />
                  </View>
                </View>
              )}
              {showTeleOpScoreInfo && (
                <View>
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Amp</Text>
                    <Feather name="speaker" size={30} color="black" />
                  </View>
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Scored</Text>
                    <MinusButton onPress={() => ampTeleScoredCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.ampScoredTele}
                      </Text>
                    </View>
                    <PlusButton onPress={() => ampTeleScoredCounter(true)} />
                  </View>
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Missed</Text>
                    <MinusButton onPress={() => ampTeleMissCounter(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.ampMissedTele}
                      </Text>
                    </View>
                    <PlusButton onPress={() => ampTeleMissCounter(true)} />
                  </View>
                  <Divider />
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Speaker</Text>
                    <Entypo name="modern-mic" size={30} color="black" />
                  </View>
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Scored</Text>
                    <MinusButton
                      onPress={() => speakerTeleScoredCounter(false)}
                    />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.speakerScoredTele}
                      </Text>
                    </View>
                    <PlusButton
                      onPress={() => speakerTeleScoredCounter(true)}
                    />
                  </View>
                  <View style={styles.teleScoreWrapper}>
                    <Text style={styles.speakerText}>Missed</Text>
                    <MinusButton
                      onPress={() => speakerTeleMissCounter(false)}
                    />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.speakerMissedTele}
                      </Text>
                    </View>
                    <PlusButton onPress={() => speakerTeleMissCounter(true)} />
                  </View>
                </View>
              )}
              {showMiscInfo && (
                <View>
                  <View style={styles.miscWrapper}>
                    <Text style={styles.speakerText}>Bot Dies</Text>
                    <MinusButton onPress={() => botDied(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.dies}
                      </Text>
                    </View>
                    <PlusButton onPress={() => botDied(true)} />
                  </View>
                  <Divider />
                  <View style={styles.miscWrapper}>
                    <Text style={styles.speakerText}>Bot Beached</Text>
                    <MinusButton onPress={() => botBeaches(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.beaches}
                      </Text>
                    </View>
                    <PlusButton onPress={() => botBeaches(true)} />
                  </View>
                  <Divider />
                  <View style={styles.miscWrapper}>
                    <Text style={styles.speakerText}>Dropped Note</Text>
                    <MinusButton onPress={() => noteDropped(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.droppedTele}
                      </Text>
                    </View>
                    <PlusButton onPress={() => noteDropped(true)} />
                  </View>
                  <Divider />
                  <View style={styles.miscWrapper}>
                    <Text style={styles.speakerText}>Bot Tipped</Text>
                    <MinusButton onPress={() => botTips(false)} />
                    <View style={styles.wingCounter}>
                      <Text style={styles.wingCounterText2}>
                        {matchData.tips}
                      </Text>
                    </View>
                    <PlusButton onPress={() => botTips(true)} />
                  </View>
                </View>
              )}
              {showEndGameinfo && (
                <View>
                  <View style={styles.endGameWrapper}>
                    <Text style={styles.speakerText}>Hang</Text>
                    <SwitchComponent
                      onValueChange={onToggleHangSwitch}
                      value={matchData.hang}
                    />
                  </View>
                  <View style={styles.endGameWrapper}>
                    <Text style={styles.speakerText}>Harmony Hang</Text>
                    <SwitchComponent
                      onValueChange={onToggleHarmonyHangSwitch}
                      value={matchData.harmonyHang}
                    />
                  </View>
                  <View style={styles.endGameWrapper}>
                    <Text style={styles.speakerText}>Parked</Text>
                    <SwitchComponent
                      onValueChange={onToggleParkedSwitch}
                      value={matchData.parked}
                    />
                  </View>
                  <View style={styles.endGameWrapper}>
                    <Text style={styles.speakerText}>Scored Trap</Text>
                    <SwitchComponent
                      onValueChange={onToggleTrapSwitch}
                      value={matchData.trap}
                    />
                  </View>
                  <View>
                    <Text style={styles.commentsText}>Comments: </Text>
                  </View>
                  <View style={styles.commentsContainer}>
                    <TextInput
                      style={styles.commentsInput}
                      onChangeText={handleCommentsChange}
                      value={matchData.comments}
                      placeholder="Type here..."
                      multiline={true}
                      scrollEnabled={true}
                      textAlignVertical="top"
                    />
                  </View>
                </View>
              )}
            </View>
          )}
          {showQrCodeinfo && (
            <View>
              <View style={styles.qrButton}>
                <AppButton title="Generate QR Code" onPress={generateQRCode} />
                {qrCodeText ? (
                  <View style={{ alignItems: "center" }}>
                    <QRCode value={qrCodeText} size={200} />
                    {displayedMatchData && (
                      <Text style={styles.matchDataText}>
                        Match Data: {JSON.stringify(displayedMatchData)}
                      </Text>
                    )}
                  </View>
                ) : null}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  logoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  wingCounterText: {
    paddingRight: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  switchWrapperHome: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 20,
  },
  matchNumberBox: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "red",
    width: 100,
    marginRight: 2,
    marginLeft: 2,
  },
  matchNumberText: {
    paddingRight: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  matchNumberWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 15,
    marginRight: 30,
  },
  navButtonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: "red",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    backgroundColor: "#E0E0E0",
    marginBottom: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  image: {
    width: 380,
    height: 200,
    resizeMode: "cover",
  },
  leaveSwitchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  wingCounterText2: {
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 25,
  },
  switchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginbottom: 20,
    marginTop: 20,
  },
  wingPickupWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  speakerText: {
    paddingRight: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  pickupTeleCounterText: {
    paddingRight: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  wingTelePickupWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 30,
  },
  teleScoreWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  miscWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 15,
    marginBottom: 15,
    marginRight: 30,
  },
  commentsContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  commentsInput: {
    height: 100,
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 18,
  },
  commentsText: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
  endGameWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginbottom: 20,
    marginTop: 20,
    marginRight: 110,
  },
  qrButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Scouting;
