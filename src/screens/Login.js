import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base";
import { Image ,View} from "react-native";
export default function ({ navigation }) {
  return (
    <View style={{backgroundColor:"white", width:"100%", height:"100%"}}>
    <Image
    source={{
      uri: "https://kalbelearningcentre.kalbe.co.id/Portals/0/EasyDNNnews/52/img-IP.png",
    }}
    style={{ width: "100%", height: "250px", position: "absolute", marginTop: 60 }}
  />
  
    <Image
      source={{
        uri: "https://online.ider.edu.mn/pluginfile.php/1/theme_moove/logo/1642383289/Final%20logo%2002-1green-web.png",
      }}
      style={{ height: 60, position: "relative" }}
    />
  
    <NativeBaseProvider>
      <Center mt="150px" w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="3xl"
            width="1/2"
            color="blue.700"
            fontWeight="600"
            borderRadius="3xl"
            p="0"
            opacity="0.9"
            bg="white"
            _dark={{
              color: "warmGray.50",
            }}
          >
           IU-22
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Тавтай Морилно уу! 
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label></FormControl.Label>
              <Input placeholder="Нэвтрэх нэр"/>
            </FormControl>
            <FormControl>
              <FormControl.Label></FormControl.Label>
              <Input type="password" placeholder="Нууц үг" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Нууц үгээ мартсан уу?
              </Link>
            </FormControl>
            <Button style={{backgroundColor:"blue"}} onPress={() => navigation.navigate("Home")}>Нэвтрэх</Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
    </View>
  );
}