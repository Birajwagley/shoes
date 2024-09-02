var Currency = {
  rates: {"USD":1.0,"EUR":1.07673,"GBP":1.25594,"CAD":0.731476,"ARS":0.00113601,"AUD":0.662375,"BRL":0.196973,"CLP":0.00107525,"CNY":0.138742,"CYP":0.397899,"CZK":0.0430546,"DKK":0.144362,"EEK":0.0706676,"HKD":0.127902,"HUF":0.00277092,"ISK":0.00716346,"INR":0.0119801,"JMD":0.00639134,"JPY":0.00648254,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0592205,"NZD":0.600884,"NOK":0.0923073,"PLN":0.250051,"SGD":0.739793,"SKK":21.5517,"SIT":175.439,"ZAR":0.0541113,"KRW":0.000738952,"SEK":0.0924841,"CHF":1.1028,"TWD":0.0309721,"UYU":0.0262514,"MYR":0.210985,"BSD":1.0,"CRC":0.00196732,"RON":0.21658,"PHP":0.0174653,"AED":0.272294,"VEB":2.73739e-10,"IDR":6.23176e-05,"TRY":0.0309805,"THB":0.0271991,"TTD":0.146684,"ILS":0.268054,"SYP":7.69121e-05,"XCD":0.370084,"COP":0.000256906,"RUB":0.0109812,"HRK":0.142906,"KZT":0.0022733,"TZS":0.000386136,"XPT":959.082,"SAR":0.266667,"NIO":0.0272154,"LAK":4.67667e-05,"OMR":2.59779,"AMD":0.00259531,"CDF":0.000357029,"KPW":0.00111104,"SPL":6.0,"KES":0.00735343,"ZWD":0.00276319,"KHR":0.000245573,"MVR":0.0648815,"GTQ":0.128891,"BZD":0.493979,"BYR":3.05815e-05,"LYD":0.205351,"DZD":0.00743858,"BIF":0.000348138,"GIP":1.25594,"BOB":0.144882,"XOF":0.00164146,"STD":4.32568e-05,"NGN":0.000721391,"PGK":0.260491,"ERN":0.0666667,"MWK":0.000575065,"CUP":0.0417487,"GMD":0.0147527,"CVE":0.00976445,"BTN":0.0119801,"XAF":0.00164146,"UGX":0.000265894,"MAD":0.0996442,"MNT":0.000294488,"LSL":0.0541113,"XAG":27.4545,"TOP":0.422047,"SHP":1.25594,"RSD":0.00919448,"HTG":0.00755163,"MGA":0.000225017,"MZN":0.015689,"FKP":1.25594,"BWP":0.0731409,"HNL":0.0405622,"PYG":0.000133576,"JEP":1.25594,"EGP":0.0208556,"LBP":1.09843e-05,"ANG":0.557843,"WST":0.363418,"TVD":0.662375,"GYD":0.00479684,"GGP":1.25594,"NPR":0.00748408,"KMF":0.00218861,"IRR":2.39084e-05,"XPD":982.682,"SRD":0.0303173,"TMM":5.70849e-05,"SZL":0.0541113,"MOP":0.124177,"BMD":1.0,"XPF":0.00902296,"ETB":0.0175123,"JOD":1.41044,"MDL":0.0566139,"MRO":0.00251066,"YER":0.00399423,"BAM":0.550521,"AWG":0.558659,"PEN":0.2681,"VEF":2.7374e-07,"SLL":4.32138e-05,"KYD":1.2165,"AOA":0.00118686,"TND":0.319375,"TJS":0.0915814,"SCR":0.0735134,"LKR":0.0033675,"DJF":0.00561168,"GNF":0.00011656,"VUV":0.00832597,"SDG":0.00166527,"IMP":1.25594,"GEL":0.373865,"FJD":0.443865,"DOP":0.0172444,"XDR":1.32201,"MUR":0.0216139,"MMK":0.000477121,"LRD":0.00516805,"BBD":0.5,"ZMK":3.68285e-05,"XAU":2326.12,"VND":3.96432e-05,"UAH":0.0254261,"TMT":0.285425,"IQD":0.000763635,"BGN":0.550521,"KGS":0.0112772,"RWF":0.000770421,"BHD":2.65957,"UZS":7.90075e-05,"PKR":0.00359063,"MKD":0.0174983,"AFN":0.0138228,"NAD":0.0541113,"BDT":0.0091122,"AZN":0.588252,"SOS":0.00175356,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.119969,"ALL":0.0107092,"BND":0.739793,"KWD":3.25293,"GHS":0.0726927,"ZMW":0.0368285,"XBT":63488.7,"NTD":0.0337206,"BYN":0.305815,"CNH":0.138557,"MRU":0.0251066,"STN":0.0432568,"VES":0.027374,"MXV":0.480808,"VED":0.027374,"SLE":0.0432138},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};
