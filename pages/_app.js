import React from 'react'
import App from 'next/app'

import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Head from 'next/head'

import { makeStore } from '../Redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../common/styles/style.css'

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Head>
          {/* Common tags */}
          <title>Simnoor Yazdan | innovation in Electric industry</title>
          <meta name="keywords" content="Sim, Cable" />
          <meta name="description" content="Simnoor Yazdan " />
          <meta name="subject" content="Sim, Cable" />

          <meta name="language" content="EN" />

          {/* OpenGraph tags */}
          <meta name="og:email" content="simnooryazdan@yahoo.com" />
          <meta name="og:phone_number" content="(+98)21 44012650" />
          <meta name="og:fax_number" content="(+98)21 44074833" />
          <meta name="og:country-name" content="IRI" />
          <meta name="og:region" content="TEH" />



          {/* Apple meta tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta content="yes" name="apple-touch-fullscreen" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />

          {/* Apple Tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width = device-width" />

          <meta name="viewport" content="width = device-width, initial-scale = 1.0, user-scalable = no" />


        </Head>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp))
