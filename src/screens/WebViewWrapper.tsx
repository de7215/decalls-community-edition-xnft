import React from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface WebViewWrapperProps {
  uri: string;
}

export function WebViewWrapper({ uri }: WebViewWrapperProps) {
  if (Platform.OS === 'web') {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <iframe src={uri} style={{height: '100%', width: '100%'}} />
      </View>
    );
  } else {
    return (
      <WebView
        source={{ uri }}
      />
    );
  }
}
