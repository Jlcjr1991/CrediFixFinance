CrediFixApp.js
CrediFix/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── plaidRoutes.js
│   │   └── stripeRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── plaidController.js
│   │   └── stripeController.js
│   └── models/
│       └── User.js
│
├── frontend/
│   ├── App.js
│   ├── index.js
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── RegisterScreen.js
│   │   ├── DashboardScreen.js
│   │   ├── SplitBillScreen.js
│   │   ├── DisputeGeneratorScreen.js
│   │   └── DebtOptionsScreen.js
│   └── components/
│       └── Chart.js
│
└── .env.example
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const plaidRoutes = require('./routes/plaidRoutes');
const stripeRoutes = require('./routes/stripeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/plaid', plaidRoutes);
app.use('/api/stripe', stripeRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000, () => console.log('Server started on port 5000'));
    })
    .catch((err) => console.error(err));
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SplitBillScreen from './screens/SplitBillScreen';
import DisputeGeneratorScreen from './screens/DisputeGeneratorScreen';
import DebtOptionsScreen from
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // connect to backend login endpoint
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Text>Password</Text>
      <TextInput secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // connect to backend register endpoint
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Text>Password</Text>
      <TextInput secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
import React from 'react';
import { View, Button, Text } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to CrediFix</Text>
      <Button title="Split Bill" onPress={() => navigation.navigate('Split Bill')} />
      <Button title="Dispute Generator" onPress={() => navigation.navigate('Dispute Generator')} />
      <Button title="Debt Options" onPress={() => navigation.navigate('Debt Options')} />
      <Button title="Credit Score Chart" onPress={() => navigation.navigate('Credit Score Chart')} />
      <Button title="Budget Chart" onPress={() => navigation.navigate('Budget Chart')} />
    </View>
  );
};

export default DashboardScreen;
import React from 'react';
import { View, Text } from 'react-native';

const SplitBillScreen = () => {
  return (
    <View>
      <Text>Split your bills with others</Text>
      {/* Add form fields to split and send amounts */}
    </View>
  );
};

export default SplitBillScreen;
import React from 'react';
import { View, Text } from 'react-native';

const DisputeGeneratorScreen = () => {
  return (
    <View>
      <Text>Automatically generate disputes for credit errors</Text>
      {/* Add GPT integration */}
    </View>
  );
};

export default DisputeGeneratorScreen;
import React from 'react';
import { View, Text } from 'react-native';

const DebtOptionsScreen = () => {
  return (
    <View>
      <Text>Explore debt relief options and payment plans</Text>
    </View>
  );
};

export default DebtOptionsScreen;
import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const BudgetChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [{ data: [500, 400, 450, 600] }],
        }}
        width={320}
        height={220}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: () => `#ffffff`,
        }}
        bezier
      />
    </View>
  );
};

export default BudgetChart;
import React from 'react';
import { View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const CreditScoreChart = () => {
  return (
    <View>
      <ProgressChart
        data={{ data: [0.65] }} // Represents 650/850 credit score
        width={320}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: () => `#00e0ff`,
        }}
      />
    </View>
  );
};

export default CreditScoreChart;
{
  "name": "credifix",
  "version": "1.0.0",
  "main": "App.js",
  "scripts": {
    "start": "expo start"
  },
  "dependencies": {
    "expo": "~50.0.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "react-native-chart-kit": "^6.13.0",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12"
  }
}
