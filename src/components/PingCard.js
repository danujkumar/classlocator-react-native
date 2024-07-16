import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomePing from "../../assets/images/homePing.svg";
import SInfo from "react-native-encrypted-storage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
import Tutorial from "./Tutorial";
const PingCard = () => {
  const [Nickname, onChangeNickname] = React.useState("");
  const [nameDone, setNameDone] = React.useState(false);
  const [state, setState] = React.useState(false);

  return (
    <>
      {!state ? (<View
        onTouchStart={() => {
          if(nameDone) { setState(true)}
        }}
        style={{
          width: wp(100),
          height: hp(100),
          position: "absolute",
          zIndex: 5,
          backgroundColor: "rgba(256, 256, 256, 0.5)",
          display: state ? "none" : "flex"
        }}

      >
        {!nameDone ? (
          <View
            style={{
              paddingVertical: hp(3.5),
              height: hp(52.8),
              width: wp(100),
              backgroundColor: "#fff",
              marginTop: hp(16),
              borderRadius: wp(8),
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: wp(5.4),
                fontWeight: "500",
                textAlign: "center",
                color: "#455A64",
              }}
            >
              🎉 Congrats on your first step!
            </Text>
            <HomePing width={wp(22.66)} height={wp(20.32)} />
            <Text
              style={{
                fontSize: wp(4.2),
                textAlign: "center",
                width: wp(86),
                lineHeight: hp(2.7),
              }}
            >
              Let's get to know you better. Please share your name to begin your
              journey with us
            </Text>
            <Text
              style={{
                fontSize: wp(4.8),
                textAlign: "center",
                width: wp(86),
                lineHeight: hp(2.7),
                color: theme.maincolor,
                fontWeight: "600",
              }}
            >
              What can we call you?
            </Text>
            <TextInput
              style={{
                paddingHorizontal: wp(4),
                width: wp(83.73),
                height: hp(7.2),
                borderWidth: wp(0.3),
                borderColor: "rgba(0,0,0,0.3)",
                borderRadius: wp(3.4),
                fontSize: wp(4.2),
                // textAlign: "center",
              }}
              onChangeText={onChangeNickname}
              value={Nickname}
              placeholder="Enter your name/nickname"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                {
                  backgroundColor: theme.maincolor,
                  width: wp(84),
                  height: hp(6),
                  borderRadius: wp(8),
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                },
              ]}
              onPress={() => {
                if (Nickname !== "") {
                  SInfo.setItem("nick_name", Nickname)
                    .then(() => {
                      setNameDone(true);
                    })
                    .catch((error) => console.log(error));
                }
              }}
            >
              <Text style={[styles.btnText, { color: "#fff" }]}>
                Let’s Heart It Out Together!
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              paddingVertical: hp(3.5),
              height: hp(52.8),
              width: wp(100),
              backgroundColor: "#fff",
              marginTop: hp(16),
              borderRadius: wp(8),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/hii.gif")}
              style={{ height: hp(16.74), width: wp(25.41) }}
            />
            <Text
              style={{
                fontSize: wp(5.4),
                fontWeight: "500",
                textAlign: "center",
                color: "#455A64",
                marginTop: hp(0.8),
              }}
            >
              Nice to meet you,
            </Text>
            <Text
              style={{
                fontSize: wp(5.4),
                fontWeight: "500",
                textAlign: "center",
                color: theme.maincolor,
              }}
            >
              {Nickname}!
            </Text>
            <Text
              style={{
                fontSize: wp(4.2),
                // fontWeight: "500",
                textAlign: "center",
                color: theme.black,
              }}
            >
              Please tap to continue...
            </Text>
          </View>
        )}
      </View>) : (<Tutorial />)}
    </>

  );
};

export default PingCard;

const styles = StyleSheet.create({});
