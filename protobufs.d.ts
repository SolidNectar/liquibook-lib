import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace markets. */
export namespace markets {

    /** Properties of a Price. */
    interface IPrice {

        /** Price price */
        price?: (number|Long|null);

        /** Price size */
        size?: (number|Long|null);

        /** Price timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Price. */
    class Price implements IPrice {

        /**
         * Constructs a new Price.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IPrice);

        /** Price price. */
        public price: (number|Long);

        /** Price size. */
        public size: (number|Long);

        /** Price timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Price instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Price instance
         */
        public static create(properties?: markets.IPrice): markets.Price;

        /**
         * Encodes the specified Price message. Does not implicitly {@link markets.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link markets.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Price;

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Price;

        /**
         * Verifies a Price message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Price
         */
        public static fromObject(object: { [k: string]: any }): markets.Price;

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @param message Price
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Price to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Price
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BBO. */
    interface IBBO {

        /** BBO bidPrice */
        bidPrice?: (markets.IPrice|null);

        /** BBO askPrice */
        askPrice?: (markets.IPrice|null);

        /** BBO lastTradePrice */
        lastTradePrice?: (markets.IPrice|null);
    }

    /** Represents a BBO. */
    class BBO implements IBBO {

        /**
         * Constructs a new BBO.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IBBO);

        /** BBO bidPrice. */
        public bidPrice?: (markets.IPrice|null);

        /** BBO askPrice. */
        public askPrice?: (markets.IPrice|null);

        /** BBO lastTradePrice. */
        public lastTradePrice?: (markets.IPrice|null);

        /**
         * Creates a new BBO instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BBO instance
         */
        public static create(properties?: markets.IBBO): markets.BBO;

        /**
         * Encodes the specified BBO message. Does not implicitly {@link markets.BBO.verify|verify} messages.
         * @param message BBO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IBBO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BBO message, length delimited. Does not implicitly {@link markets.BBO.verify|verify} messages.
         * @param message BBO message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IBBO, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BBO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BBO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.BBO;

        /**
         * Decodes a BBO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BBO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.BBO;

        /**
         * Verifies a BBO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BBO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BBO
         */
        public static fromObject(object: { [k: string]: any }): markets.BBO;

        /**
         * Creates a plain object from a BBO message. Also converts values to other types if specified.
         * @param message BBO
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.BBO, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BBO to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BBO
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Side enum. */
    enum Side {
        BUY = 0,
        SELL = 1
    }

    /** Properties of a Trade. */
    interface ITrade {

        /** Trade timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Trade price */
        price?: (number|Long|null);

        /** Trade size */
        size?: (number|Long|null);

        /** Trade taker */
        taker?: (markets.Side|null);

        /** Trade bidID */
        bidID?: (number|null);

        /** Trade askID */
        askID?: (number|null);

        /** Trade buyer */
        buyer?: (number|null);

        /** Trade seller */
        seller?: (number|null);

        /** Trade tradePrice */
        tradePrice?: (markets.IPrice|null);
    }

    /** Represents a Trade. */
    class Trade implements ITrade {

        /**
         * Constructs a new Trade.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ITrade);

        /** Trade timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Trade price. */
        public price: (number|Long);

        /** Trade size. */
        public size: (number|Long);

        /** Trade taker. */
        public taker: markets.Side;

        /** Trade bidID. */
        public bidID: number;

        /** Trade askID. */
        public askID: number;

        /** Trade buyer. */
        public buyer: number;

        /** Trade seller. */
        public seller: number;

        /** Trade tradePrice. */
        public tradePrice?: (markets.IPrice|null);

        /**
         * Creates a new Trade instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trade instance
         */
        public static create(properties?: markets.ITrade): markets.Trade;

        /**
         * Encodes the specified Trade message. Does not implicitly {@link markets.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trade message, length delimited. Does not implicitly {@link markets.Trade.verify|verify} messages.
         * @param message Trade message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ITrade, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trade message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Trade;

        /**
         * Decodes a Trade message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Trade;

        /**
         * Verifies a Trade message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trade message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trade
         */
        public static fromObject(object: { [k: string]: any }): markets.Trade;

        /**
         * Creates a plain object from a Trade message. Also converts values to other types if specified.
         * @param message Trade
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Trade, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trade to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Trade
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Trades. */
    interface ITrades {

        /** Trades trades */
        trades?: (markets.ITrade[]|null);

        /** Trades market */
        market?: (string|null);
    }

    /** Represents a Trades. */
    class Trades implements ITrades {

        /**
         * Constructs a new Trades.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ITrades);

        /** Trades trades. */
        public trades: markets.ITrade[];

        /** Trades market. */
        public market: string;

        /**
         * Creates a new Trades instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Trades instance
         */
        public static create(properties?: markets.ITrades): markets.Trades;

        /**
         * Encodes the specified Trades message. Does not implicitly {@link markets.Trades.verify|verify} messages.
         * @param message Trades message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ITrades, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Trades message, length delimited. Does not implicitly {@link markets.Trades.verify|verify} messages.
         * @param message Trades message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ITrades, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Trades message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Trades;

        /**
         * Decodes a Trades message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Trades;

        /**
         * Verifies a Trades message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Trades message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Trades
         */
        public static fromObject(object: { [k: string]: any }): markets.Trades;

        /**
         * Creates a plain object from a Trades message. Also converts values to other types if specified.
         * @param message Trades
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Trades, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Trades to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Trades
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderType enum. */
    enum OrderType {
        GTC = 0,
        AON = 1,
        IOC = 2,
        FOK = 3,
        STOP = 4
    }

    /** ModifyType enum. */
    enum ModifyType {
        PRICE = 0,
        QUANTITY = 1,
        PRICE_AND_QUANTITY = 2
    }

    /** Properties of a NewOrder. */
    interface INewOrder {

        /** NewOrder clOrdID */
        clOrdID?: (string|null);

        /** NewOrder orderIDParent */
        orderIDParent?: (number|null);

        /** NewOrder side */
        side?: (markets.Side|null);

        /** NewOrder orderType */
        orderType?: (markets.OrderType|null);

        /** NewOrder price */
        price?: (number|Long|null);

        /** NewOrder quantity */
        quantity?: (number|Long|null);

        /** NewOrder stopPrice */
        stopPrice?: (number|Long|null);

        /** NewOrder orderID */
        orderID?: (number|null);

        /** NewOrder timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** NewOrder held */
        held?: (number|Long|null);
    }

    /** Represents a NewOrder. */
    class NewOrder implements INewOrder {

        /**
         * Constructs a new NewOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.INewOrder);

        /** NewOrder clOrdID. */
        public clOrdID: string;

        /** NewOrder orderIDParent. */
        public orderIDParent: number;

        /** NewOrder side. */
        public side: markets.Side;

        /** NewOrder orderType. */
        public orderType: markets.OrderType;

        /** NewOrder price. */
        public price: (number|Long);

        /** NewOrder quantity. */
        public quantity: (number|Long);

        /** NewOrder stopPrice. */
        public stopPrice: (number|Long);

        /** NewOrder orderID. */
        public orderID: number;

        /** NewOrder timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** NewOrder held. */
        public held: (number|Long);

        /**
         * Creates a new NewOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewOrder instance
         */
        public static create(properties?: markets.INewOrder): markets.NewOrder;

        /**
         * Encodes the specified NewOrder message. Does not implicitly {@link markets.NewOrder.verify|verify} messages.
         * @param message NewOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.INewOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewOrder message, length delimited. Does not implicitly {@link markets.NewOrder.verify|verify} messages.
         * @param message NewOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.INewOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.NewOrder;

        /**
         * Decodes a NewOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.NewOrder;

        /**
         * Verifies a NewOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewOrder
         */
        public static fromObject(object: { [k: string]: any }): markets.NewOrder;

        /**
         * Creates a plain object from a NewOrder message. Also converts values to other types if specified.
         * @param message NewOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.NewOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NewOrder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientKey. */
    interface IClientKey {

        /** ClientKey pocketID */
        pocketID?: (number|null);

        /** ClientKey clOrdID */
        clOrdID?: (string|null);
    }

    /** Represents a ClientKey. */
    class ClientKey implements IClientKey {

        /**
         * Constructs a new ClientKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IClientKey);

        /** ClientKey pocketID. */
        public pocketID: number;

        /** ClientKey clOrdID. */
        public clOrdID: string;

        /**
         * Creates a new ClientKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientKey instance
         */
        public static create(properties?: markets.IClientKey): markets.ClientKey;

        /**
         * Encodes the specified ClientKey message. Does not implicitly {@link markets.ClientKey.verify|verify} messages.
         * @param message ClientKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IClientKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientKey message, length delimited. Does not implicitly {@link markets.ClientKey.verify|verify} messages.
         * @param message ClientKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IClientKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.ClientKey;

        /**
         * Decodes a ClientKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.ClientKey;

        /**
         * Verifies a ClientKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientKey
         */
        public static fromObject(object: { [k: string]: any }): markets.ClientKey;

        /**
         * Creates a plain object from a ClientKey message. Also converts values to other types if specified.
         * @param message ClientKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.ClientKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CancelOrder. */
    interface ICancelOrder {

        /** CancelOrder requestID */
        requestID?: (string|null);

        /** CancelOrder timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** CancelOrder orderID */
        orderID?: (number|null);

        /** CancelOrder clientKey */
        clientKey?: (markets.IClientKey|null);
    }

    /** Represents a CancelOrder. */
    class CancelOrder implements ICancelOrder {

        /**
         * Constructs a new CancelOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ICancelOrder);

        /** CancelOrder requestID. */
        public requestID: string;

        /** CancelOrder timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** CancelOrder orderID. */
        public orderID?: (number|null);

        /** CancelOrder clientKey. */
        public clientKey?: (markets.IClientKey|null);

        /** CancelOrder key. */
        public key?: ("orderID"|"clientKey");

        /**
         * Creates a new CancelOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelOrder instance
         */
        public static create(properties?: markets.ICancelOrder): markets.CancelOrder;

        /**
         * Encodes the specified CancelOrder message. Does not implicitly {@link markets.CancelOrder.verify|verify} messages.
         * @param message CancelOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ICancelOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelOrder message, length delimited. Does not implicitly {@link markets.CancelOrder.verify|verify} messages.
         * @param message CancelOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ICancelOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.CancelOrder;

        /**
         * Decodes a CancelOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.CancelOrder;

        /**
         * Verifies a CancelOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelOrder
         */
        public static fromObject(object: { [k: string]: any }): markets.CancelOrder;

        /**
         * Creates a plain object from a CancelOrder message. Also converts values to other types if specified.
         * @param message CancelOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.CancelOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelOrder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** CancelStatusCode enum. */
    enum CancelStatusCode {
        CS_NEW = 0,
        CS_PENDING = 1,
        CS_ACCEPTED = 2,
        CS_REJECTED = 3
    }

    /** Properties of a CancelStatus. */
    interface ICancelStatus {

        /** CancelStatus requestID */
        requestID?: (string|null);

        /** CancelStatus orderID */
        orderID?: (number|null);

        /** CancelStatus timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** CancelStatus code */
        code?: (markets.CancelStatusCode|null);

        /** CancelStatus reason */
        reason?: (string|null);
    }

    /** Represents a CancelStatus. */
    class CancelStatus implements ICancelStatus {

        /**
         * Constructs a new CancelStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ICancelStatus);

        /** CancelStatus requestID. */
        public requestID: string;

        /** CancelStatus orderID. */
        public orderID: number;

        /** CancelStatus timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** CancelStatus code. */
        public code: markets.CancelStatusCode;

        /** CancelStatus reason. */
        public reason: string;

        /**
         * Creates a new CancelStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelStatus instance
         */
        public static create(properties?: markets.ICancelStatus): markets.CancelStatus;

        /**
         * Encodes the specified CancelStatus message. Does not implicitly {@link markets.CancelStatus.verify|verify} messages.
         * @param message CancelStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ICancelStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelStatus message, length delimited. Does not implicitly {@link markets.CancelStatus.verify|verify} messages.
         * @param message CancelStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ICancelStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.CancelStatus;

        /**
         * Decodes a CancelStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.CancelStatus;

        /**
         * Verifies a CancelStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelStatus
         */
        public static fromObject(object: { [k: string]: any }): markets.CancelStatus;

        /**
         * Creates a plain object from a CancelStatus message. Also converts values to other types if specified.
         * @param message CancelStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.CancelStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CancelStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModifyOrder. */
    interface IModifyOrder {

        /** ModifyOrder userID */
        userID?: (number|null);

        /** ModifyOrder profileID */
        profileID?: (number|null);

        /** ModifyOrder pocketID */
        pocketID?: (number|null);

        /** ModifyOrder orderID */
        orderID?: (number|null);

        /** ModifyOrder modifyType */
        modifyType?: (markets.ModifyType|null);

        /** ModifyOrder price */
        price?: (number|Long|null);

        /** ModifyOrder quantity */
        quantity?: (number|Long|null);
    }

    /** Represents a ModifyOrder. */
    class ModifyOrder implements IModifyOrder {

        /**
         * Constructs a new ModifyOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IModifyOrder);

        /** ModifyOrder userID. */
        public userID: number;

        /** ModifyOrder profileID. */
        public profileID: number;

        /** ModifyOrder pocketID. */
        public pocketID: number;

        /** ModifyOrder orderID. */
        public orderID: number;

        /** ModifyOrder modifyType. */
        public modifyType: markets.ModifyType;

        /** ModifyOrder price. */
        public price: (number|Long);

        /** ModifyOrder quantity. */
        public quantity: (number|Long);

        /**
         * Creates a new ModifyOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyOrder instance
         */
        public static create(properties?: markets.IModifyOrder): markets.ModifyOrder;

        /**
         * Encodes the specified ModifyOrder message. Does not implicitly {@link markets.ModifyOrder.verify|verify} messages.
         * @param message ModifyOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IModifyOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyOrder message, length delimited. Does not implicitly {@link markets.ModifyOrder.verify|verify} messages.
         * @param message ModifyOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IModifyOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.ModifyOrder;

        /**
         * Decodes a ModifyOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.ModifyOrder;

        /**
         * Verifies a ModifyOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyOrder
         */
        public static fromObject(object: { [k: string]: any }): markets.ModifyOrder;

        /**
         * Creates a plain object from a ModifyOrder message. Also converts values to other types if specified.
         * @param message ModifyOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.ModifyOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModifyOrder
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Action newOrder */
        newOrder?: (markets.INewOrder|null);

        /** Action cancelOrder */
        cancelOrder?: (markets.ICancelOrder|null);

        /** Action modifyOrder */
        modifyOrder?: (markets.IModifyOrder|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IAction);

        /** Action timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Action newOrder. */
        public newOrder?: (markets.INewOrder|null);

        /** Action cancelOrder. */
        public cancelOrder?: (markets.ICancelOrder|null);

        /** Action modifyOrder. */
        public modifyOrder?: (markets.IModifyOrder|null);

        /** Action msg. */
        public msg?: ("newOrder"|"cancelOrder"|"modifyOrder");

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: markets.IAction): markets.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link markets.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link markets.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: { [k: string]: any }): markets.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Action
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** OrderStatusCode enum. */
    enum OrderStatusCode {
        OS_NEW = 0,
        OS_PENDING = 1,
        OS_REJECTED = 2,
        OS_OPEN = 3,
        OS_CANCELED = 4,
        OS_PARTIAL_FILL = 5,
        OS_FILLED = 6
    }

    /** Properties of a Fill. */
    interface IFill {

        /** Fill side */
        side?: (markets.Side|null);

        /** Fill price */
        price?: (number|Long|null);

        /** Fill size */
        size?: (number|Long|null);

        /** Fill took */
        took?: (boolean|null);
    }

    /** Represents a Fill. */
    class Fill implements IFill {

        /**
         * Constructs a new Fill.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IFill);

        /** Fill side. */
        public side: markets.Side;

        /** Fill price. */
        public price: (number|Long);

        /** Fill size. */
        public size: (number|Long);

        /** Fill took. */
        public took: boolean;

        /**
         * Creates a new Fill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fill instance
         */
        public static create(properties?: markets.IFill): markets.Fill;

        /**
         * Encodes the specified Fill message. Does not implicitly {@link markets.Fill.verify|verify} messages.
         * @param message Fill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IFill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Fill message, length delimited. Does not implicitly {@link markets.Fill.verify|verify} messages.
         * @param message Fill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IFill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Fill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Fill;

        /**
         * Decodes a Fill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Fill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Fill;

        /**
         * Verifies a Fill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Fill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Fill
         */
        public static fromObject(object: { [k: string]: any }): markets.Fill;

        /**
         * Creates a plain object from a Fill message. Also converts values to other types if specified.
         * @param message Fill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Fill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Fill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Fill
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FillEvent. */
    interface IFillEvent {

        /** FillEvent timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** FillEvent market */
        market?: (string|null);

        /** FillEvent orderID */
        orderID?: (number|null);

        /** FillEvent clOrdID */
        clOrdID?: (string|null);

        /** FillEvent fill */
        fill?: (markets.IFill|null);
    }

    /** Represents a FillEvent. */
    class FillEvent implements IFillEvent {

        /**
         * Constructs a new FillEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IFillEvent);

        /** FillEvent timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** FillEvent market. */
        public market: string;

        /** FillEvent orderID. */
        public orderID: number;

        /** FillEvent clOrdID. */
        public clOrdID: string;

        /** FillEvent fill. */
        public fill?: (markets.IFill|null);

        /**
         * Creates a new FillEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FillEvent instance
         */
        public static create(properties?: markets.IFillEvent): markets.FillEvent;

        /**
         * Encodes the specified FillEvent message. Does not implicitly {@link markets.FillEvent.verify|verify} messages.
         * @param message FillEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IFillEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FillEvent message, length delimited. Does not implicitly {@link markets.FillEvent.verify|verify} messages.
         * @param message FillEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IFillEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FillEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FillEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.FillEvent;

        /**
         * Decodes a FillEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FillEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.FillEvent;

        /**
         * Verifies a FillEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FillEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FillEvent
         */
        public static fromObject(object: { [k: string]: any }): markets.FillEvent;

        /**
         * Creates a plain object from a FillEvent message. Also converts values to other types if specified.
         * @param message FillEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.FillEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FillEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FillEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FillEventList. */
    interface IFillEventList {

        /** FillEventList fills */
        fills?: (markets.IFillEvent[]|null);
    }

    /** Represents a FillEventList. */
    class FillEventList implements IFillEventList {

        /**
         * Constructs a new FillEventList.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IFillEventList);

        /** FillEventList fills. */
        public fills: markets.IFillEvent[];

        /**
         * Creates a new FillEventList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FillEventList instance
         */
        public static create(properties?: markets.IFillEventList): markets.FillEventList;

        /**
         * Encodes the specified FillEventList message. Does not implicitly {@link markets.FillEventList.verify|verify} messages.
         * @param message FillEventList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IFillEventList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FillEventList message, length delimited. Does not implicitly {@link markets.FillEventList.verify|verify} messages.
         * @param message FillEventList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IFillEventList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FillEventList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FillEventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.FillEventList;

        /**
         * Decodes a FillEventList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FillEventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.FillEventList;

        /**
         * Verifies a FillEventList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FillEventList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FillEventList
         */
        public static fromObject(object: { [k: string]: any }): markets.FillEventList;

        /**
         * Creates a plain object from a FillEventList message. Also converts values to other types if specified.
         * @param message FillEventList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.FillEventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FillEventList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FillEventList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderStatusEvent. */
    interface IOrderStatusEvent {

        /** OrderStatusEvent timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** OrderStatusEvent code */
        code?: (markets.OrderStatusCode|null);

        /** OrderStatusEvent reason */
        reason?: (string|null);

        /** OrderStatusEvent fill */
        fill?: (markets.IFill|null);

        /** OrderStatusEvent market */
        market?: (string|null);

        /** OrderStatusEvent side */
        side?: (markets.Side|null);

        /** OrderStatusEvent orderType */
        orderType?: (markets.OrderType|null);

        /** OrderStatusEvent price */
        price?: (number|Long|null);

        /** OrderStatusEvent quantity */
        quantity?: (number|Long|null);

        /** OrderStatusEvent stopPrice */
        stopPrice?: (number|Long|null);
    }

    /** Represents an OrderStatusEvent. */
    class OrderStatusEvent implements IOrderStatusEvent {

        /**
         * Constructs a new OrderStatusEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IOrderStatusEvent);

        /** OrderStatusEvent timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** OrderStatusEvent code. */
        public code: markets.OrderStatusCode;

        /** OrderStatusEvent reason. */
        public reason?: (string|null);

        /** OrderStatusEvent fill. */
        public fill?: (markets.IFill|null);

        /** OrderStatusEvent market. */
        public market: string;

        /** OrderStatusEvent side. */
        public side: markets.Side;

        /** OrderStatusEvent orderType. */
        public orderType: markets.OrderType;

        /** OrderStatusEvent price. */
        public price: (number|Long);

        /** OrderStatusEvent quantity. */
        public quantity: (number|Long);

        /** OrderStatusEvent stopPrice. */
        public stopPrice: (number|Long);

        /** OrderStatusEvent msg. */
        public msg?: ("reason"|"fill");

        /**
         * Creates a new OrderStatusEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderStatusEvent instance
         */
        public static create(properties?: markets.IOrderStatusEvent): markets.OrderStatusEvent;

        /**
         * Encodes the specified OrderStatusEvent message. Does not implicitly {@link markets.OrderStatusEvent.verify|verify} messages.
         * @param message OrderStatusEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IOrderStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderStatusEvent message, length delimited. Does not implicitly {@link markets.OrderStatusEvent.verify|verify} messages.
         * @param message OrderStatusEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IOrderStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderStatusEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderStatusEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.OrderStatusEvent;

        /**
         * Decodes an OrderStatusEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderStatusEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.OrderStatusEvent;

        /**
         * Verifies an OrderStatusEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderStatusEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderStatusEvent
         */
        public static fromObject(object: { [k: string]: any }): markets.OrderStatusEvent;

        /**
         * Creates a plain object from an OrderStatusEvent message. Also converts values to other types if specified.
         * @param message OrderStatusEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.OrderStatusEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderStatusEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderStatusEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderStatus. */
    interface IOrderStatus {

        /** OrderStatus orderID */
        orderID?: (number|null);

        /** OrderStatus orderIDParent */
        orderIDParent?: (number|null);

        /** OrderStatus clOrdID */
        clOrdID?: (string|null);

        /** OrderStatus event */
        event?: (markets.IOrderStatusEvent|null);

        /** OrderStatus filled */
        filled?: (number|Long|null);

        /** OrderStatus filledCost */
        filledCost?: (number|Long|null);
    }

    /** Represents an OrderStatus. */
    class OrderStatus implements IOrderStatus {

        /**
         * Constructs a new OrderStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IOrderStatus);

        /** OrderStatus orderID. */
        public orderID: number;

        /** OrderStatus orderIDParent. */
        public orderIDParent: number;

        /** OrderStatus clOrdID. */
        public clOrdID: string;

        /** OrderStatus event. */
        public event?: (markets.IOrderStatusEvent|null);

        /** OrderStatus filled. */
        public filled: (number|Long);

        /** OrderStatus filledCost. */
        public filledCost: (number|Long);

        /**
         * Creates a new OrderStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderStatus instance
         */
        public static create(properties?: markets.IOrderStatus): markets.OrderStatus;

        /**
         * Encodes the specified OrderStatus message. Does not implicitly {@link markets.OrderStatus.verify|verify} messages.
         * @param message OrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderStatus message, length delimited. Does not implicitly {@link markets.OrderStatus.verify|verify} messages.
         * @param message OrderStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.OrderStatus;

        /**
         * Decodes an OrderStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.OrderStatus;

        /**
         * Verifies an OrderStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderStatus
         */
        public static fromObject(object: { [k: string]: any }): markets.OrderStatus;

        /**
         * Creates a plain object from an OrderStatus message. Also converts values to other types if specified.
         * @param message OrderStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.OrderStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order userID */
        userID?: (number|null);

        /** Order profileID */
        profileID?: (number|null);

        /** Order pocketID */
        pocketID?: (number|null);

        /** Order clOrdID */
        clOrdID?: (string|null);

        /** Order orderID */
        orderID?: (number|null);

        /** Order orderIDParent */
        orderIDParent?: (number|null);

        /** Order market */
        market?: (string|null);

        /** Order side */
        side?: (markets.Side|null);

        /** Order orderType */
        orderType?: (markets.OrderType|null);

        /** Order price */
        price?: (number|Long|null);

        /** Order quantity */
        quantity?: (number|Long|null);

        /** Order stopPrice */
        stopPrice?: (number|Long|null);

        /** Order timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Order status */
        status?: (markets.OrderStatusCode|null);

        /** Order filled */
        filled?: (number|Long|null);

        /** Order filledCost */
        filledCost?: (number|Long|null);

        /** Order history */
        history?: (markets.IOrderStatusEvent[]|null);
    }

    /** Represents an Order. */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IOrder);

        /** Order userID. */
        public userID: number;

        /** Order profileID. */
        public profileID: number;

        /** Order pocketID. */
        public pocketID: number;

        /** Order clOrdID. */
        public clOrdID: string;

        /** Order orderID. */
        public orderID: number;

        /** Order orderIDParent. */
        public orderIDParent: number;

        /** Order market. */
        public market: string;

        /** Order side. */
        public side: markets.Side;

        /** Order orderType. */
        public orderType: markets.OrderType;

        /** Order price. */
        public price: (number|Long);

        /** Order quantity. */
        public quantity: (number|Long);

        /** Order stopPrice. */
        public stopPrice: (number|Long);

        /** Order timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Order status. */
        public status: markets.OrderStatusCode;

        /** Order filled. */
        public filled: (number|Long);

        /** Order filledCost. */
        public filledCost: (number|Long);

        /** Order history. */
        public history: markets.IOrderStatusEvent[];

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: markets.IOrder): markets.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link markets.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link markets.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): markets.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Order
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OrderList. */
    interface IOrderList {

        /** OrderList orders */
        orders?: (markets.IOrder[]|null);
    }

    /** Represents an OrderList. */
    class OrderList implements IOrderList {

        /**
         * Constructs a new OrderList.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IOrderList);

        /** OrderList orders. */
        public orders: markets.IOrder[];

        /**
         * Creates a new OrderList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderList instance
         */
        public static create(properties?: markets.IOrderList): markets.OrderList;

        /**
         * Encodes the specified OrderList message. Does not implicitly {@link markets.OrderList.verify|verify} messages.
         * @param message OrderList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IOrderList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderList message, length delimited. Does not implicitly {@link markets.OrderList.verify|verify} messages.
         * @param message OrderList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IOrderList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.OrderList;

        /**
         * Decodes an OrderList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.OrderList;

        /**
         * Verifies an OrderList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderList
         */
        public static fromObject(object: { [k: string]: any }): markets.OrderList;

        /**
         * Creates a plain object from an OrderList message. Also converts values to other types if specified.
         * @param message OrderList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.OrderList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OrderList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Date. */
    interface IDate {

        /** Date year */
        year?: (number|null);

        /** Date month */
        month?: (number|null);

        /** Date day */
        day?: (number|null);
    }

    /** Represents a Date. */
    class Date implements IDate {

        /**
         * Constructs a new Date.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IDate);

        /** Date year. */
        public year: number;

        /** Date month. */
        public month: number;

        /** Date day. */
        public day: number;

        /**
         * Creates a new Date instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Date instance
         */
        public static create(properties?: markets.IDate): markets.Date;

        /**
         * Encodes the specified Date message. Does not implicitly {@link markets.Date.verify|verify} messages.
         * @param message Date message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Date message, length delimited. Does not implicitly {@link markets.Date.verify|verify} messages.
         * @param message Date message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Date message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Date;

        /**
         * Decodes a Date message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Date;

        /**
         * Verifies a Date message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Date message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Date
         */
        public static fromObject(object: { [k: string]: any }): markets.Date;

        /**
         * Creates a plain object from a Date message. Also converts values to other types if specified.
         * @param message Date
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Date to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Date
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a px. */
    interface Ipx {

        /** px val */
        val?: (number|Long|null);
    }

    /** Represents a px. */
    class px implements Ipx {

        /**
         * Constructs a new px.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.Ipx);

        /** px val. */
        public val: (number|Long);

        /**
         * Creates a new px instance using the specified properties.
         * @param [properties] Properties to set
         * @returns px instance
         */
        public static create(properties?: markets.Ipx): markets.px;

        /**
         * Encodes the specified px message. Does not implicitly {@link markets.px.verify|verify} messages.
         * @param message px message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.Ipx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified px message, length delimited. Does not implicitly {@link markets.px.verify|verify} messages.
         * @param message px message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.Ipx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a px message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns px
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.px;

        /**
         * Decodes a px message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns px
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.px;

        /**
         * Verifies a px message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a px message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns px
         */
        public static fromObject(object: { [k: string]: any }): markets.px;

        /**
         * Creates a plain object from a px message. Also converts values to other types if specified.
         * @param message px
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.px, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this px to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for px
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a sz. */
    interface Isz {

        /** sz val */
        val?: (number|Long|null);
    }

    /** Represents a sz. */
    class sz implements Isz {

        /**
         * Constructs a new sz.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.Isz);

        /** sz val. */
        public val: (number|Long);

        /**
         * Creates a new sz instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sz instance
         */
        public static create(properties?: markets.Isz): markets.sz;

        /**
         * Encodes the specified sz message. Does not implicitly {@link markets.sz.verify|verify} messages.
         * @param message sz message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.Isz, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sz message, length delimited. Does not implicitly {@link markets.sz.verify|verify} messages.
         * @param message sz message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.Isz, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sz message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.sz;

        /**
         * Decodes a sz message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.sz;

        /**
         * Verifies a sz message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sz message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sz
         */
        public static fromObject(object: { [k: string]: any }): markets.sz;

        /**
         * Creates a plain object from a sz message. Also converts values to other types if specified.
         * @param message sz
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.sz, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sz to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for sz
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Summary. */
    interface ISummary {

        /** Summary timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Summary symbol */
        symbol?: (string|null);

        /** Summary day */
        day?: (markets.IDate|null);

        /** Summary closePrior */
        closePrior?: (markets.Ipx|null);

        /** Summary closePrior24 */
        closePrior24?: (markets.Ipx|null);

        /** Summary open */
        open?: (markets.Ipx|null);

        /** Summary open24 */
        open24?: (markets.Ipx|null);

        /** Summary high */
        high?: (markets.Ipx|null);

        /** Summary high24 */
        high24?: (markets.Ipx|null);

        /** Summary low */
        low?: (markets.Ipx|null);

        /** Summary low24 */
        low24?: (markets.Ipx|null);

        /** Summary last */
        last?: (markets.Ipx|null);

        /** Summary lastQty */
        lastQty?: (markets.Isz|null);

        /** Summary lastQtyCum */
        lastQtyCum?: (markets.Isz|null);

        /** Summary lastPrior */
        lastPrior?: (markets.Ipx|null);

        /** Summary lastTime */
        lastTime?: (google.protobuf.ITimestamp|null);

        /** Summary volume */
        volume?: (markets.Isz|null);

        /** Summary volume24 */
        volume24?: (markets.Isz|null);

        /** Summary volumeCum */
        volumeCum?: (markets.Isz|null);

        /** Summary bid */
        bid?: (markets.Ipx|null);

        /** Summary bidQty */
        bidQty?: (markets.Isz|null);

        /** Summary bidPrior */
        bidPrior?: (markets.Ipx|null);

        /** Summary ask */
        ask?: (markets.Ipx|null);

        /** Summary askQty */
        askQty?: (markets.Isz|null);

        /** Summary askPrior */
        askPrior?: (markets.Ipx|null);

        /** Summary flags */
        flags?: (number|null);
    }

    /** Represents a Summary. */
    class Summary implements ISummary {

        /**
         * Constructs a new Summary.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ISummary);

        /** Summary timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Summary symbol. */
        public symbol: string;

        /** Summary day. */
        public day?: (markets.IDate|null);

        /** Summary closePrior. */
        public closePrior?: (markets.Ipx|null);

        /** Summary closePrior24. */
        public closePrior24?: (markets.Ipx|null);

        /** Summary open. */
        public open?: (markets.Ipx|null);

        /** Summary open24. */
        public open24?: (markets.Ipx|null);

        /** Summary high. */
        public high?: (markets.Ipx|null);

        /** Summary high24. */
        public high24?: (markets.Ipx|null);

        /** Summary low. */
        public low?: (markets.Ipx|null);

        /** Summary low24. */
        public low24?: (markets.Ipx|null);

        /** Summary last. */
        public last?: (markets.Ipx|null);

        /** Summary lastQty. */
        public lastQty?: (markets.Isz|null);

        /** Summary lastQtyCum. */
        public lastQtyCum?: (markets.Isz|null);

        /** Summary lastPrior. */
        public lastPrior?: (markets.Ipx|null);

        /** Summary lastTime. */
        public lastTime?: (google.protobuf.ITimestamp|null);

        /** Summary volume. */
        public volume?: (markets.Isz|null);

        /** Summary volume24. */
        public volume24?: (markets.Isz|null);

        /** Summary volumeCum. */
        public volumeCum?: (markets.Isz|null);

        /** Summary bid. */
        public bid?: (markets.Ipx|null);

        /** Summary bidQty. */
        public bidQty?: (markets.Isz|null);

        /** Summary bidPrior. */
        public bidPrior?: (markets.Ipx|null);

        /** Summary ask. */
        public ask?: (markets.Ipx|null);

        /** Summary askQty. */
        public askQty?: (markets.Isz|null);

        /** Summary askPrior. */
        public askPrior?: (markets.Ipx|null);

        /** Summary flags. */
        public flags: number;

        /**
         * Creates a new Summary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Summary instance
         */
        public static create(properties?: markets.ISummary): markets.Summary;

        /**
         * Encodes the specified Summary message. Does not implicitly {@link markets.Summary.verify|verify} messages.
         * @param message Summary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ISummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Summary message, length delimited. Does not implicitly {@link markets.Summary.verify|verify} messages.
         * @param message Summary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ISummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Summary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Summary;

        /**
         * Decodes a Summary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Summary;

        /**
         * Verifies a Summary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Summary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Summary
         */
        public static fromObject(object: { [k: string]: any }): markets.Summary;

        /**
         * Creates a plain object from a Summary message. Also converts values to other types if specified.
         * @param message Summary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Summary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Summary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Summary
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position available */
        available?: (number|Long|null);

        /** Position open */
        open?: (number|Long|null);

        /** Position pending */
        pending?: (number|Long|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IPosition);

        /** Position available. */
        public available: (number|Long);

        /** Position open. */
        public open: (number|Long);

        /** Position pending. */
        public pending: (number|Long);

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: markets.IPosition): markets.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link markets.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link markets.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): markets.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Wallet. */
    interface IWallet {

        /** Wallet asset */
        asset?: (string|null);

        /** Wallet position */
        position?: (markets.IPosition|null);

        /** Wallet id */
        id?: (number|null);
    }

    /** Represents a Wallet. */
    class Wallet implements IWallet {

        /**
         * Constructs a new Wallet.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IWallet);

        /** Wallet asset. */
        public asset: string;

        /** Wallet position. */
        public position?: (markets.IPosition|null);

        /** Wallet id. */
        public id: number;

        /**
         * Creates a new Wallet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Wallet instance
         */
        public static create(properties?: markets.IWallet): markets.Wallet;

        /**
         * Encodes the specified Wallet message. Does not implicitly {@link markets.Wallet.verify|verify} messages.
         * @param message Wallet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IWallet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Wallet message, length delimited. Does not implicitly {@link markets.Wallet.verify|verify} messages.
         * @param message Wallet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IWallet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Wallet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Wallet;

        /**
         * Decodes a Wallet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Wallet;

        /**
         * Verifies a Wallet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Wallet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Wallet
         */
        public static fromObject(object: { [k: string]: any }): markets.Wallet;

        /**
         * Creates a plain object from a Wallet message. Also converts values to other types if specified.
         * @param message Wallet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Wallet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Wallet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Wallet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Pocket. */
    interface IPocket {

        /** Pocket profileID */
        profileID?: (number|null);

        /** Pocket name */
        name?: (string|null);

        /** Pocket wallets */
        wallets?: (markets.IWallet[]|null);
    }

    /** Represents a Pocket. */
    class Pocket implements IPocket {

        /**
         * Constructs a new Pocket.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IPocket);

        /** Pocket profileID. */
        public profileID: number;

        /** Pocket name. */
        public name: string;

        /** Pocket wallets. */
        public wallets: markets.IWallet[];

        /**
         * Creates a new Pocket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pocket instance
         */
        public static create(properties?: markets.IPocket): markets.Pocket;

        /**
         * Encodes the specified Pocket message. Does not implicitly {@link markets.Pocket.verify|verify} messages.
         * @param message Pocket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IPocket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pocket message, length delimited. Does not implicitly {@link markets.Pocket.verify|verify} messages.
         * @param message Pocket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IPocket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pocket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pocket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Pocket;

        /**
         * Decodes a Pocket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pocket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Pocket;

        /**
         * Verifies a Pocket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pocket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pocket
         */
        public static fromObject(object: { [k: string]: any }): markets.Pocket;

        /**
         * Creates a plain object from a Pocket message. Also converts values to other types if specified.
         * @param message Pocket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Pocket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pocket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pocket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Interval. */
    interface IInterval {

        /** Interval begin */
        begin?: (google.protobuf.ITimestamp|null);

        /** Interval end */
        end?: (google.protobuf.ITimestamp|null);
    }

    /** Represents an Interval. */
    class Interval implements IInterval {

        /**
         * Constructs a new Interval.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IInterval);

        /** Interval begin. */
        public begin?: (google.protobuf.ITimestamp|null);

        /** Interval end. */
        public end?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Interval instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Interval instance
         */
        public static create(properties?: markets.IInterval): markets.Interval;

        /**
         * Encodes the specified Interval message. Does not implicitly {@link markets.Interval.verify|verify} messages.
         * @param message Interval message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Interval message, length delimited. Does not implicitly {@link markets.Interval.verify|verify} messages.
         * @param message Interval message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Interval message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Interval;

        /**
         * Decodes an Interval message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Interval;

        /**
         * Verifies an Interval message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Interval message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Interval
         */
        public static fromObject(object: { [k: string]: any }): markets.Interval;

        /**
         * Creates a plain object from an Interval message. Also converts values to other types if specified.
         * @param message Interval
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Interval to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Interval
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Segment. */
    interface ISegment {

        /** Segment domain */
        domain?: (markets.IInterval|null);

        /** Segment trades */
        trades?: (markets.ITrades|null);
    }

    /** Represents a Segment. */
    class Segment implements ISegment {

        /**
         * Constructs a new Segment.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.ISegment);

        /** Segment domain. */
        public domain?: (markets.IInterval|null);

        /** Segment trades. */
        public trades?: (markets.ITrades|null);

        /** Segment series. */
        public series?: "trades";

        /**
         * Creates a new Segment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Segment instance
         */
        public static create(properties?: markets.ISegment): markets.Segment;

        /**
         * Encodes the specified Segment message. Does not implicitly {@link markets.Segment.verify|verify} messages.
         * @param message Segment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.ISegment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Segment message, length delimited. Does not implicitly {@link markets.Segment.verify|verify} messages.
         * @param message Segment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.ISegment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Segment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Segment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Segment;

        /**
         * Decodes a Segment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Segment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Segment;

        /**
         * Verifies a Segment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Segment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Segment
         */
        public static fromObject(object: { [k: string]: any }): markets.Segment;

        /**
         * Creates a plain object from a Segment message. Also converts values to other types if specified.
         * @param message Segment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Segment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Segment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Segment
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Continuum. */
    interface IContinuum {

        /** Continuum topic */
        topic?: (string|null);

        /** Continuum segment */
        segment?: (markets.ISegment|null);

        /** Continuum trade */
        trade?: (markets.ITrade|null);
    }

    /** Represents a Continuum. */
    class Continuum implements IContinuum {

        /**
         * Constructs a new Continuum.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IContinuum);

        /** Continuum topic. */
        public topic: string;

        /** Continuum segment. */
        public segment?: (markets.ISegment|null);

        /** Continuum trade. */
        public trade?: (markets.ITrade|null);

        /** Continuum data. */
        public data?: ("segment"|"trade");

        /**
         * Creates a new Continuum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Continuum instance
         */
        public static create(properties?: markets.IContinuum): markets.Continuum;

        /**
         * Encodes the specified Continuum message. Does not implicitly {@link markets.Continuum.verify|verify} messages.
         * @param message Continuum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IContinuum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Continuum message, length delimited. Does not implicitly {@link markets.Continuum.verify|verify} messages.
         * @param message Continuum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IContinuum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Continuum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Continuum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Continuum;

        /**
         * Decodes a Continuum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Continuum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Continuum;

        /**
         * Verifies a Continuum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Continuum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Continuum
         */
        public static fromObject(object: { [k: string]: any }): markets.Continuum;

        /**
         * Creates a plain object from a Continuum message. Also converts values to other types if specified.
         * @param message Continuum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Continuum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Continuum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Continuum
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Activity. */
    interface IActivity {

        /** Activity id */
        id?: (number|null);

        /** Activity timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** Activity profileId */
        profileId?: (number|null);

        /** Activity type */
        type?: (string|null);

        /** Activity level */
        level?: (string|null);

        /** Activity action */
        action?: (string|null);

        /** Activity actionId */
        actionId?: (number|null);

        /** Activity data */
        data?: (string|null);

        /** Activity unread */
        unread?: (boolean|null);
    }

    /** Represents an Activity. */
    class Activity implements IActivity {

        /**
         * Constructs a new Activity.
         * @param [properties] Properties to set
         */
        constructor(properties?: markets.IActivity);

        /** Activity id. */
        public id: number;

        /** Activity timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** Activity profileId. */
        public profileId: number;

        /** Activity type. */
        public type: string;

        /** Activity level. */
        public level: string;

        /** Activity action. */
        public action: string;

        /** Activity actionId. */
        public actionId: number;

        /** Activity data. */
        public data: string;

        /** Activity unread. */
        public unread: boolean;

        /**
         * Creates a new Activity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Activity instance
         */
        public static create(properties?: markets.IActivity): markets.Activity;

        /**
         * Encodes the specified Activity message. Does not implicitly {@link markets.Activity.verify|verify} messages.
         * @param message Activity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: markets.IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Activity message, length delimited. Does not implicitly {@link markets.Activity.verify|verify} messages.
         * @param message Activity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: markets.IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Activity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Activity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): markets.Activity;

        /**
         * Decodes an Activity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Activity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): markets.Activity;

        /**
         * Verifies an Activity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Activity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Activity
         */
        public static fromObject(object: { [k: string]: any }): markets.Activity;

        /**
         * Creates a plain object from an Activity message. Also converts values to other types if specified.
         * @param message Activity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: markets.Activity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Activity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Activity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
