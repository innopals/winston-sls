import * as Transport from 'winston-transport';

export interface SlsTransportOptions extends Transport.TransportStreamOptions {
  accessKey: string;
  accessSecret: string;
  endpoint: string;
  logstore: string;
  hashkey?: string;
}

class SlsTransport extends Transport {
  private options: SlsTransportOptions;
  constructor(opts: SlsTransportOptions) {
    super(opts);
    this.options = opts;
  }
  public log(info: any, next?: () => void): any {
    // TODO: implement this
    console.log(info, this.options);
    if (next) setImmediate(next);
  }
}

export default SlsTransport;
