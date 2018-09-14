type Long = protobuf.Long;

/** Namespace protocol. */
declare namespace protocol {

    /** Properties of an AchievementListMsg. */
    interface IAchievementListMsg {

        /** AchievementListMsg achievementMsg */
        achievementMsg?: (protocol.IAchievementMsg[]|null);
    }

    /** Represents an AchievementListMsg. */
    class AchievementListMsg implements IAchievementListMsg {

        /**
         * Constructs a new AchievementListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAchievementListMsg);

        /** AchievementListMsg achievementMsg. */
        public achievementMsg: protocol.IAchievementMsg[];

        /**
         * Creates a new AchievementListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AchievementListMsg instance
         */
        public static create(properties?: protocol.IAchievementListMsg): protocol.AchievementListMsg;

        /**
         * Encodes the specified AchievementListMsg message. Does not implicitly {@link protocol.AchievementListMsg.verify|verify} messages.
         * @param message AchievementListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAchievementListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AchievementListMsg message, length delimited. Does not implicitly {@link protocol.AchievementListMsg.verify|verify} messages.
         * @param message AchievementListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAchievementListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AchievementListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AchievementListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AchievementListMsg;

        /**
         * Decodes an AchievementListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AchievementListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AchievementListMsg;

        /**
         * Verifies an AchievementListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AchievementListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AchievementListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AchievementListMsg;

        /**
         * Creates a plain object from an AchievementListMsg message. Also converts values to other types if specified.
         * @param message AchievementListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AchievementListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AchievementListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AchievementMsg. */
    interface IAchievementMsg {

        /** AchievementMsg achievement */
        achievement: number;
    }

    /** Represents an AchievementMsg. */
    class AchievementMsg implements IAchievementMsg {

        /**
         * Constructs a new AchievementMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAchievementMsg);

        /** AchievementMsg achievement. */
        public achievement: number;

        /**
         * Creates a new AchievementMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AchievementMsg instance
         */
        public static create(properties?: protocol.IAchievementMsg): protocol.AchievementMsg;

        /**
         * Encodes the specified AchievementMsg message. Does not implicitly {@link protocol.AchievementMsg.verify|verify} messages.
         * @param message AchievementMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAchievementMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AchievementMsg message, length delimited. Does not implicitly {@link protocol.AchievementMsg.verify|verify} messages.
         * @param message AchievementMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAchievementMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AchievementMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AchievementMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AchievementMsg;

        /**
         * Decodes an AchievementMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AchievementMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AchievementMsg;

        /**
         * Verifies an AchievementMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AchievementMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AchievementMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AchievementMsg;

        /**
         * Creates a plain object from an AchievementMsg message. Also converts values to other types if specified.
         * @param message AchievementMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AchievementMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AchievementMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityOpenListMsg. */
    interface IActivityOpenListMsg {

        /** ActivityOpenListMsg list */
        list?: (protocol.IActivityOpenMsg[]|null);

        /** ActivityOpenListMsg loginDayNum */
        loginDayNum: number;
    }

    /** Represents an ActivityOpenListMsg. */
    class ActivityOpenListMsg implements IActivityOpenListMsg {

        /**
         * Constructs a new ActivityOpenListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityOpenListMsg);

        /** ActivityOpenListMsg list. */
        public list: protocol.IActivityOpenMsg[];

        /** ActivityOpenListMsg loginDayNum. */
        public loginDayNum: number;

        /**
         * Creates a new ActivityOpenListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityOpenListMsg instance
         */
        public static create(properties?: protocol.IActivityOpenListMsg): protocol.ActivityOpenListMsg;

        /**
         * Encodes the specified ActivityOpenListMsg message. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @param message ActivityOpenListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityOpenListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityOpenListMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @param message ActivityOpenListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityOpenListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityOpenListMsg;

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityOpenListMsg;

        /**
         * Verifies an ActivityOpenListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityOpenListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityOpenListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityOpenListMsg;

        /**
         * Creates a plain object from an ActivityOpenListMsg message. Also converts values to other types if specified.
         * @param message ActivityOpenListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityOpenListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityOpenListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityOpenMsg. */
    interface IActivityOpenMsg {

        /** ActivityOpenMsg activityId */
        activityId: number;

        /** ActivityOpenMsg endTime */
        endTime: string;
    }

    /** Represents an ActivityOpenMsg. */
    class ActivityOpenMsg implements IActivityOpenMsg {

        /**
         * Constructs a new ActivityOpenMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityOpenMsg);

        /** ActivityOpenMsg activityId. */
        public activityId: number;

        /** ActivityOpenMsg endTime. */
        public endTime: string;

        /**
         * Creates a new ActivityOpenMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityOpenMsg instance
         */
        public static create(properties?: protocol.IActivityOpenMsg): protocol.ActivityOpenMsg;

        /**
         * Encodes the specified ActivityOpenMsg message. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @param message ActivityOpenMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityOpenMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityOpenMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @param message ActivityOpenMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityOpenMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityOpenMsg;

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityOpenMsg;

        /**
         * Verifies an ActivityOpenMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityOpenMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityOpenMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityOpenMsg;

        /**
         * Creates a plain object from an ActivityOpenMsg message. Also converts values to other types if specified.
         * @param message ActivityOpenMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityOpenMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityOpenMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerSignMsg. */
    interface IPlayerSignMsg {

        /** PlayerSignMsg signState */
        signState: boolean;

        /** PlayerSignMsg signNum */
        signNum: number;

        /** PlayerSignMsg absenceNum */
        absenceNum: number;
    }

    /** Represents a PlayerSignMsg. */
    class PlayerSignMsg implements IPlayerSignMsg {

        /**
         * Constructs a new PlayerSignMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerSignMsg);

        /** PlayerSignMsg signState. */
        public signState: boolean;

        /** PlayerSignMsg signNum. */
        public signNum: number;

        /** PlayerSignMsg absenceNum. */
        public absenceNum: number;

        /**
         * Creates a new PlayerSignMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerSignMsg instance
         */
        public static create(properties?: protocol.IPlayerSignMsg): protocol.PlayerSignMsg;

        /**
         * Encodes the specified PlayerSignMsg message. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @param message PlayerSignMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerSignMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerSignMsg message, length delimited. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @param message PlayerSignMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerSignMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerSignMsg;

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerSignMsg;

        /**
         * Verifies a PlayerSignMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerSignMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerSignMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerSignMsg;

        /**
         * Creates a plain object from a PlayerSignMsg message. Also converts values to other types if specified.
         * @param message PlayerSignMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerSignMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerSignMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityStateListMsg. */
    interface IActivityStateListMsg {

        /** ActivityStateListMsg list */
        list?: (protocol.IActivityStateMsg[]|null);
    }

    /** Represents an ActivityStateListMsg. */
    class ActivityStateListMsg implements IActivityStateListMsg {

        /**
         * Constructs a new ActivityStateListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityStateListMsg);

        /** ActivityStateListMsg list. */
        public list: protocol.IActivityStateMsg[];

        /**
         * Creates a new ActivityStateListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityStateListMsg instance
         */
        public static create(properties?: protocol.IActivityStateListMsg): protocol.ActivityStateListMsg;

        /**
         * Encodes the specified ActivityStateListMsg message. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @param message ActivityStateListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityStateListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityStateListMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @param message ActivityStateListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityStateListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityStateListMsg;

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityStateListMsg;

        /**
         * Verifies an ActivityStateListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityStateListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityStateListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityStateListMsg;

        /**
         * Creates a plain object from an ActivityStateListMsg message. Also converts values to other types if specified.
         * @param message ActivityStateListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityStateListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityStateListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityStateMsg. */
    interface IActivityStateMsg {

        /** ActivityStateMsg activityId */
        activityId: number;

        /** ActivityStateMsg state */
        state: number;
    }

    /** Represents an ActivityStateMsg. */
    class ActivityStateMsg implements IActivityStateMsg {

        /**
         * Constructs a new ActivityStateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityStateMsg);

        /** ActivityStateMsg activityId. */
        public activityId: number;

        /** ActivityStateMsg state. */
        public state: number;

        /**
         * Creates a new ActivityStateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityStateMsg instance
         */
        public static create(properties?: protocol.IActivityStateMsg): protocol.ActivityStateMsg;

        /**
         * Encodes the specified ActivityStateMsg message. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @param message ActivityStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @param message ActivityStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityStateMsg;

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityStateMsg;

        /**
         * Verifies an ActivityStateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityStateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityStateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityStateMsg;

        /**
         * Creates a plain object from an ActivityStateMsg message. Also converts values to other types if specified.
         * @param message ActivityStateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityStateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityStateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemListMsg. */
    interface IItemListMsg {

        /** ItemListMsg itemList */
        itemList?: (protocol.IItemInfoMsg[]|null);
    }

    /** Represents an ItemListMsg. */
    class ItemListMsg implements IItemListMsg {

        /**
         * Constructs a new ItemListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemListMsg);

        /** ItemListMsg itemList. */
        public itemList: protocol.IItemInfoMsg[];

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemListMsg instance
         */
        public static create(properties?: protocol.IItemListMsg): protocol.ItemListMsg;

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @param message ItemListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemListMsg;

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemListMsg;

        /**
         * Verifies an ItemListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemListMsg;

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @param message ItemListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemInfoMsg. */
    interface IItemInfoMsg {

        /** ItemInfoMsg itemId */
        itemId: number;

        /** ItemInfoMsg num */
        num: string;
    }

    /** Represents an ItemInfoMsg. */
    class ItemInfoMsg implements IItemInfoMsg {

        /**
         * Constructs a new ItemInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemInfoMsg);

        /** ItemInfoMsg itemId. */
        public itemId: number;

        /** ItemInfoMsg num. */
        public num: string;

        /**
         * Creates a new ItemInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemInfoMsg instance
         */
        public static create(properties?: protocol.IItemInfoMsg): protocol.ItemInfoMsg;

        /**
         * Encodes the specified ItemInfoMsg message. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @param message ItemInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemInfoMsg message, length delimited. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @param message ItemInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemInfoMsg;

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemInfoMsg;

        /**
         * Verifies an ItemInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemInfoMsg;

        /**
         * Creates a plain object from an ItemInfoMsg message. Also converts values to other types if specified.
         * @param message ItemInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemMsgCS. */
    interface IItemMsgCS {

        /** ItemMsgCS itemId */
        itemId: number;

        /** ItemMsgCS num */
        num: string;
    }

    /** Represents an ItemMsgCS. */
    class ItemMsgCS implements IItemMsgCS {

        /**
         * Constructs a new ItemMsgCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemMsgCS);

        /** ItemMsgCS itemId. */
        public itemId: number;

        /** ItemMsgCS num. */
        public num: string;

        /**
         * Creates a new ItemMsgCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMsgCS instance
         */
        public static create(properties?: protocol.IItemMsgCS): protocol.ItemMsgCS;

        /**
         * Encodes the specified ItemMsgCS message. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @param message ItemMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemMsgCS message, length delimited. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @param message ItemMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemMsgCS;

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemMsgCS;

        /**
         * Verifies an ItemMsgCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemMsgCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemMsgCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemMsgCS;

        /**
         * Creates a plain object from an ItemMsgCS message. Also converts values to other types if specified.
         * @param message ItemMsgCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemMsgCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemMsgCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemMsgListCS. */
    interface IItemMsgListCS {

        /** ItemMsgListCS list */
        list?: (protocol.IItemMsgCS[]|null);
    }

    /** Represents an ItemMsgListCS. */
    class ItemMsgListCS implements IItemMsgListCS {

        /**
         * Constructs a new ItemMsgListCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemMsgListCS);

        /** ItemMsgListCS list. */
        public list: protocol.IItemMsgCS[];

        /**
         * Creates a new ItemMsgListCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMsgListCS instance
         */
        public static create(properties?: protocol.IItemMsgListCS): protocol.ItemMsgListCS;

        /**
         * Encodes the specified ItemMsgListCS message. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @param message ItemMsgListCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemMsgListCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemMsgListCS message, length delimited. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @param message ItemMsgListCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemMsgListCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemMsgListCS;

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemMsgListCS;

        /**
         * Verifies an ItemMsgListCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemMsgListCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemMsgListCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemMsgListCS;

        /**
         * Creates a plain object from an ItemMsgListCS message. Also converts values to other types if specified.
         * @param message ItemMsgListCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemMsgListCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemMsgListCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopMsgCS. */
    interface IShopMsgCS {

        /** ShopMsgCS itemId */
        itemId: number;

        /** ShopMsgCS time */
        time?: (number|null);
    }

    /** Represents a ShopMsgCS. */
    class ShopMsgCS implements IShopMsgCS {

        /**
         * Constructs a new ShopMsgCS.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IShopMsgCS);

        /** ShopMsgCS itemId. */
        public itemId: number;

        /** ShopMsgCS time. */
        public time: number;

        /**
         * Creates a new ShopMsgCS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopMsgCS instance
         */
        public static create(properties?: protocol.IShopMsgCS): protocol.ShopMsgCS;

        /**
         * Encodes the specified ShopMsgCS message. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @param message ShopMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IShopMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ShopMsgCS message, length delimited. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @param message ShopMsgCS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IShopMsgCS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ShopMsgCS;

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ShopMsgCS;

        /**
         * Verifies a ShopMsgCS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopMsgCS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopMsgCS
         */
        public static fromObject(object: { [k: string]: any }): protocol.ShopMsgCS;

        /**
         * Creates a plain object from a ShopMsgCS message. Also converts values to other types if specified.
         * @param message ShopMsgCS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ShopMsgCS, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopMsgCS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DiamondMsg. */
    interface IDiamondMsg {

        /** DiamondMsg diamondBoxList */
        diamondBoxList?: (protocol.IDiamondBoxList[]|null);
    }

    /** Represents a DiamondMsg. */
    class DiamondMsg implements IDiamondMsg {

        /**
         * Constructs a new DiamondMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDiamondMsg);

        /** DiamondMsg diamondBoxList. */
        public diamondBoxList: protocol.IDiamondBoxList[];

        /**
         * Creates a new DiamondMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiamondMsg instance
         */
        public static create(properties?: protocol.IDiamondMsg): protocol.DiamondMsg;

        /**
         * Encodes the specified DiamondMsg message. Does not implicitly {@link protocol.DiamondMsg.verify|verify} messages.
         * @param message DiamondMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDiamondMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DiamondMsg message, length delimited. Does not implicitly {@link protocol.DiamondMsg.verify|verify} messages.
         * @param message DiamondMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDiamondMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DiamondMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiamondMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.DiamondMsg;

        /**
         * Decodes a DiamondMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiamondMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.DiamondMsg;

        /**
         * Verifies a DiamondMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiamondMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiamondMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.DiamondMsg;

        /**
         * Creates a plain object from a DiamondMsg message. Also converts values to other types if specified.
         * @param message DiamondMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DiamondMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiamondMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DiamondBoxList. */
    interface IDiamondBoxList {

        /** DiamondBoxList boxId */
        boxId: number;
    }

    /** Represents a DiamondBoxList. */
    class DiamondBoxList implements IDiamondBoxList {

        /**
         * Constructs a new DiamondBoxList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDiamondBoxList);

        /** DiamondBoxList boxId. */
        public boxId: number;

        /**
         * Creates a new DiamondBoxList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiamondBoxList instance
         */
        public static create(properties?: protocol.IDiamondBoxList): protocol.DiamondBoxList;

        /**
         * Encodes the specified DiamondBoxList message. Does not implicitly {@link protocol.DiamondBoxList.verify|verify} messages.
         * @param message DiamondBoxList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDiamondBoxList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DiamondBoxList message, length delimited. Does not implicitly {@link protocol.DiamondBoxList.verify|verify} messages.
         * @param message DiamondBoxList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDiamondBoxList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DiamondBoxList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiamondBoxList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.DiamondBoxList;

        /**
         * Decodes a DiamondBoxList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiamondBoxList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.DiamondBoxList;

        /**
         * Verifies a DiamondBoxList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiamondBoxList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiamondBoxList
         */
        public static fromObject(object: { [k: string]: any }): protocol.DiamondBoxList;

        /**
         * Creates a plain object from a DiamondBoxList message. Also converts values to other types if specified.
         * @param message DiamondBoxList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DiamondBoxList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiamondBoxList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DayChargeMsg. */
    interface IDayChargeMsg {

        /** DayChargeMsg totalMoney */
        totalMoney: number;

        /** DayChargeMsg dayMoney */
        dayMoney: number;

        /** DayChargeMsg lastAward */
        lastAward: boolean;

        /** DayChargeMsg todayAward */
        todayAward: boolean;

        /** DayChargeMsg firstAward */
        firstAward: boolean;
    }

    /** Represents a DayChargeMsg. */
    class DayChargeMsg implements IDayChargeMsg {

        /**
         * Constructs a new DayChargeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDayChargeMsg);

        /** DayChargeMsg totalMoney. */
        public totalMoney: number;

        /** DayChargeMsg dayMoney. */
        public dayMoney: number;

        /** DayChargeMsg lastAward. */
        public lastAward: boolean;

        /** DayChargeMsg todayAward. */
        public todayAward: boolean;

        /** DayChargeMsg firstAward. */
        public firstAward: boolean;

        /**
         * Creates a new DayChargeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DayChargeMsg instance
         */
        public static create(properties?: protocol.IDayChargeMsg): protocol.DayChargeMsg;

        /**
         * Encodes the specified DayChargeMsg message. Does not implicitly {@link protocol.DayChargeMsg.verify|verify} messages.
         * @param message DayChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDayChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DayChargeMsg message, length delimited. Does not implicitly {@link protocol.DayChargeMsg.verify|verify} messages.
         * @param message DayChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDayChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DayChargeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DayChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.DayChargeMsg;

        /**
         * Decodes a DayChargeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DayChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.DayChargeMsg;

        /**
         * Verifies a DayChargeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DayChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DayChargeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.DayChargeMsg;

        /**
         * Creates a plain object from a DayChargeMsg message. Also converts values to other types if specified.
         * @param message DayChargeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DayChargeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DayChargeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityAwardMsg. */
    interface IActivityAwardMsg {

        /** ActivityAwardMsg activityType */
        activityType: number;

        /** ActivityAwardMsg recievedAwardType */
        recievedAwardType?: (number[]|null);
    }

    /** Represents an ActivityAwardMsg. */
    class ActivityAwardMsg implements IActivityAwardMsg {

        /**
         * Constructs a new ActivityAwardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityAwardMsg);

        /** ActivityAwardMsg activityType. */
        public activityType: number;

        /** ActivityAwardMsg recievedAwardType. */
        public recievedAwardType: number[];

        /**
         * Creates a new ActivityAwardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityAwardMsg instance
         */
        public static create(properties?: protocol.IActivityAwardMsg): protocol.ActivityAwardMsg;

        /**
         * Encodes the specified ActivityAwardMsg message. Does not implicitly {@link protocol.ActivityAwardMsg.verify|verify} messages.
         * @param message ActivityAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityAwardMsg message, length delimited. Does not implicitly {@link protocol.ActivityAwardMsg.verify|verify} messages.
         * @param message ActivityAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityAwardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityAwardMsg;

        /**
         * Decodes an ActivityAwardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityAwardMsg;

        /**
         * Verifies an ActivityAwardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityAwardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityAwardMsg;

        /**
         * Creates a plain object from an ActivityAwardMsg message. Also converts values to other types if specified.
         * @param message ActivityAwardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityAwardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityAwardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerFirstChargeMsg. */
    interface IPlayerFirstChargeMsg {

        /** PlayerFirstChargeMsg productIdList */
        productIdList?: (number[]|null);
    }

    /** Represents a PlayerFirstChargeMsg. */
    class PlayerFirstChargeMsg implements IPlayerFirstChargeMsg {

        /**
         * Constructs a new PlayerFirstChargeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerFirstChargeMsg);

        /** PlayerFirstChargeMsg productIdList. */
        public productIdList: number[];

        /**
         * Creates a new PlayerFirstChargeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerFirstChargeMsg instance
         */
        public static create(properties?: protocol.IPlayerFirstChargeMsg): protocol.PlayerFirstChargeMsg;

        /**
         * Encodes the specified PlayerFirstChargeMsg message. Does not implicitly {@link protocol.PlayerFirstChargeMsg.verify|verify} messages.
         * @param message PlayerFirstChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerFirstChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerFirstChargeMsg message, length delimited. Does not implicitly {@link protocol.PlayerFirstChargeMsg.verify|verify} messages.
         * @param message PlayerFirstChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerFirstChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerFirstChargeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerFirstChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerFirstChargeMsg;

        /**
         * Decodes a PlayerFirstChargeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerFirstChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerFirstChargeMsg;

        /**
         * Verifies a PlayerFirstChargeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerFirstChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerFirstChargeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerFirstChargeMsg;

        /**
         * Creates a plain object from a PlayerFirstChargeMsg message. Also converts values to other types if specified.
         * @param message PlayerFirstChargeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerFirstChargeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerFirstChargeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChargeMsg. */
    interface IChargeMsg {

        /** ChargeMsg card */
        card?: (protocol.ICardMsg|null);

        /** ChargeMsg goldAndDps */
        goldAndDps: number;

        /** ChargeMsg clickHurt */
        clickHurt: number;

        /** ChargeMsg itemAdd */
        itemAdd: number;

        /** ChargeMsg itemSub */
        itemSub: number;
    }

    /** Represents a ChargeMsg. */
    class ChargeMsg implements IChargeMsg {

        /**
         * Constructs a new ChargeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChargeMsg);

        /** ChargeMsg card. */
        public card?: (protocol.ICardMsg|null);

        /** ChargeMsg goldAndDps. */
        public goldAndDps: number;

        /** ChargeMsg clickHurt. */
        public clickHurt: number;

        /** ChargeMsg itemAdd. */
        public itemAdd: number;

        /** ChargeMsg itemSub. */
        public itemSub: number;

        /**
         * Creates a new ChargeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChargeMsg instance
         */
        public static create(properties?: protocol.IChargeMsg): protocol.ChargeMsg;

        /**
         * Encodes the specified ChargeMsg message. Does not implicitly {@link protocol.ChargeMsg.verify|verify} messages.
         * @param message ChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChargeMsg message, length delimited. Does not implicitly {@link protocol.ChargeMsg.verify|verify} messages.
         * @param message ChargeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChargeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChargeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ChargeMsg;

        /**
         * Decodes a ChargeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ChargeMsg;

        /**
         * Verifies a ChargeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChargeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ChargeMsg;

        /**
         * Creates a plain object from a ChargeMsg message. Also converts values to other types if specified.
         * @param message ChargeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ChargeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChargeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardMsg. */
    interface ICardMsg {

        /** CardMsg productId */
        productId: number;

        /** CardMsg validDate */
        validDate: string;

        /** CardMsg privilegeIdList */
        privilegeIdList?: (number[]|null);

        /** CardMsg awardId */
        awardId: number;

        /** CardMsg dayAward */
        dayAward: boolean;
    }

    /** Represents a CardMsg. */
    class CardMsg implements ICardMsg {

        /**
         * Constructs a new CardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardMsg);

        /** CardMsg productId. */
        public productId: number;

        /** CardMsg validDate. */
        public validDate: string;

        /** CardMsg privilegeIdList. */
        public privilegeIdList: number[];

        /** CardMsg awardId. */
        public awardId: number;

        /** CardMsg dayAward. */
        public dayAward: boolean;

        /**
         * Creates a new CardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardMsg instance
         */
        public static create(properties?: protocol.ICardMsg): protocol.CardMsg;

        /**
         * Encodes the specified CardMsg message. Does not implicitly {@link protocol.CardMsg.verify|verify} messages.
         * @param message CardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardMsg message, length delimited. Does not implicitly {@link protocol.CardMsg.verify|verify} messages.
         * @param message CardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardMsg;

        /**
         * Decodes a CardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardMsg;

        /**
         * Verifies a CardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardMsg;

        /**
         * Creates a plain object from a CardMsg message. Also converts values to other types if specified.
         * @param message CardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CSChatProtoMsg. */
    interface ICSChatProtoMsg {

        /** CSChatProtoMsg type */
        type: number;

        /** CSChatProtoMsg content */
        content: string;

        /** CSChatProtoMsg sendToPlayerId */
        sendToPlayerId?: (number|null);
    }

    /** Represents a CSChatProtoMsg. */
    class CSChatProtoMsg implements ICSChatProtoMsg {

        /**
         * Constructs a new CSChatProtoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICSChatProtoMsg);

        /** CSChatProtoMsg type. */
        public type: number;

        /** CSChatProtoMsg content. */
        public content: string;

        /** CSChatProtoMsg sendToPlayerId. */
        public sendToPlayerId: number;

        /**
         * Creates a new CSChatProtoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CSChatProtoMsg instance
         */
        public static create(properties?: protocol.ICSChatProtoMsg): protocol.CSChatProtoMsg;

        /**
         * Encodes the specified CSChatProtoMsg message. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @param message CSChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICSChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CSChatProtoMsg message, length delimited. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @param message CSChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICSChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CSChatProtoMsg;

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CSChatProtoMsg;

        /**
         * Verifies a CSChatProtoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CSChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CSChatProtoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CSChatProtoMsg;

        /**
         * Creates a plain object from a CSChatProtoMsg message. Also converts values to other types if specified.
         * @param message CSChatProtoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CSChatProtoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CSChatProtoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SCChatProtoMsg. */
    interface ISCChatProtoMsg {

        /** SCChatProtoMsg type */
        type: number;

        /** SCChatProtoMsg content */
        content: string;

        /** SCChatProtoMsg playerId */
        playerId: number;

        /** SCChatProtoMsg nickName */
        nickName: string;

        /** SCChatProtoMsg headPic */
        headPic: string;

        /** SCChatProtoMsg sendToPlayerId */
        sendToPlayerId?: (number|null);
    }

    /** Represents a SCChatProtoMsg. */
    class SCChatProtoMsg implements ISCChatProtoMsg {

        /**
         * Constructs a new SCChatProtoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISCChatProtoMsg);

        /** SCChatProtoMsg type. */
        public type: number;

        /** SCChatProtoMsg content. */
        public content: string;

        /** SCChatProtoMsg playerId. */
        public playerId: number;

        /** SCChatProtoMsg nickName. */
        public nickName: string;

        /** SCChatProtoMsg headPic. */
        public headPic: string;

        /** SCChatProtoMsg sendToPlayerId. */
        public sendToPlayerId: number;

        /**
         * Creates a new SCChatProtoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SCChatProtoMsg instance
         */
        public static create(properties?: protocol.ISCChatProtoMsg): protocol.SCChatProtoMsg;

        /**
         * Encodes the specified SCChatProtoMsg message. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @param message SCChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISCChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SCChatProtoMsg message, length delimited. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @param message SCChatProtoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISCChatProtoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SCChatProtoMsg;

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SCChatProtoMsg;

        /**
         * Verifies a SCChatProtoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SCChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SCChatProtoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SCChatProtoMsg;

        /**
         * Creates a plain object from a SCChatProtoMsg message. Also converts values to other types if specified.
         * @param message SCChatProtoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SCChatProtoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SCChatProtoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WorldChatDefMsgList. */
    interface IWorldChatDefMsgList {

        /** WorldChatDefMsgList list */
        list?: (protocol.ISCChatProtoMsg[]|null);
    }

    /** Represents a WorldChatDefMsgList. */
    class WorldChatDefMsgList implements IWorldChatDefMsgList {

        /**
         * Constructs a new WorldChatDefMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IWorldChatDefMsgList);

        /** WorldChatDefMsgList list. */
        public list: protocol.ISCChatProtoMsg[];

        /**
         * Creates a new WorldChatDefMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorldChatDefMsgList instance
         */
        public static create(properties?: protocol.IWorldChatDefMsgList): protocol.WorldChatDefMsgList;

        /**
         * Encodes the specified WorldChatDefMsgList message. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @param message WorldChatDefMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IWorldChatDefMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified WorldChatDefMsgList message, length delimited. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @param message WorldChatDefMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IWorldChatDefMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.WorldChatDefMsgList;

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.WorldChatDefMsgList;

        /**
         * Verifies a WorldChatDefMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorldChatDefMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorldChatDefMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.WorldChatDefMsgList;

        /**
         * Creates a plain object from a WorldChatDefMsgList message. Also converts values to other types if specified.
         * @param message WorldChatDefMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.WorldChatDefMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorldChatDefMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SystemNoticeMsg. */
    interface ISystemNoticeMsg {

        /** SystemNoticeMsg type */
        type: number;

        /** SystemNoticeMsg params */
        params?: (string[]|null);
    }

    /** Represents a SystemNoticeMsg. */
    class SystemNoticeMsg implements ISystemNoticeMsg {

        /**
         * Constructs a new SystemNoticeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISystemNoticeMsg);

        /** SystemNoticeMsg type. */
        public type: number;

        /** SystemNoticeMsg params. */
        public params: string[];

        /**
         * Creates a new SystemNoticeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SystemNoticeMsg instance
         */
        public static create(properties?: protocol.ISystemNoticeMsg): protocol.SystemNoticeMsg;

        /**
         * Encodes the specified SystemNoticeMsg message. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @param message SystemNoticeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISystemNoticeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SystemNoticeMsg message, length delimited. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @param message SystemNoticeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISystemNoticeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SystemNoticeMsg;

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SystemNoticeMsg;

        /**
         * Verifies a SystemNoticeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SystemNoticeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SystemNoticeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SystemNoticeMsg;

        /**
         * Creates a plain object from a SystemNoticeMsg message. Also converts values to other types if specified.
         * @param message SystemNoticeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SystemNoticeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SystemNoticeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarrageMsg. */
    interface IBarrageMsg {

        /** BarrageMsg playerId */
        playerId: number;

        /** BarrageMsg nickName */
        nickName: string;

        /** BarrageMsg headPic */
        headPic: string;

        /** BarrageMsg content */
        content: string;
    }

    /** Represents a BarrageMsg. */
    class BarrageMsg implements IBarrageMsg {

        /**
         * Constructs a new BarrageMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBarrageMsg);

        /** BarrageMsg playerId. */
        public playerId: number;

        /** BarrageMsg nickName. */
        public nickName: string;

        /** BarrageMsg headPic. */
        public headPic: string;

        /** BarrageMsg content. */
        public content: string;

        /**
         * Creates a new BarrageMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BarrageMsg instance
         */
        public static create(properties?: protocol.IBarrageMsg): protocol.BarrageMsg;

        /**
         * Encodes the specified BarrageMsg message. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @param message BarrageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBarrageMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BarrageMsg message, length delimited. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @param message BarrageMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBarrageMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.BarrageMsg;

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.BarrageMsg;

        /**
         * Verifies a BarrageMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BarrageMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BarrageMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.BarrageMsg;

        /**
         * Creates a plain object from a BarrageMsg message. Also converts values to other types if specified.
         * @param message BarrageMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BarrageMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarrageMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarrageMsgList. */
    interface IBarrageMsgList {

        /** BarrageMsgList list */
        list?: (protocol.IBarrageMsg[]|null);
    }

    /** Represents a BarrageMsgList. */
    class BarrageMsgList implements IBarrageMsgList {

        /**
         * Constructs a new BarrageMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IBarrageMsgList);

        /** BarrageMsgList list. */
        public list: protocol.IBarrageMsg[];

        /**
         * Creates a new BarrageMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BarrageMsgList instance
         */
        public static create(properties?: protocol.IBarrageMsgList): protocol.BarrageMsgList;

        /**
         * Encodes the specified BarrageMsgList message. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @param message BarrageMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IBarrageMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BarrageMsgList message, length delimited. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @param message BarrageMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IBarrageMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.BarrageMsgList;

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.BarrageMsgList;

        /**
         * Verifies a BarrageMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BarrageMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BarrageMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.BarrageMsgList;

        /**
         * Creates a plain object from a BarrageMsgList message. Also converts values to other types if specified.
         * @param message BarrageMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.BarrageMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarrageMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardGameListMsg. */
    interface ICardGameListMsg {

        /** CardGameListMsg cardGameMsg */
        cardGameMsg?: (protocol.ICardGameMsg[]|null);
    }

    /** Represents a CardGameListMsg. */
    class CardGameListMsg implements ICardGameListMsg {

        /**
         * Constructs a new CardGameListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardGameListMsg);

        /** CardGameListMsg cardGameMsg. */
        public cardGameMsg: protocol.ICardGameMsg[];

        /**
         * Creates a new CardGameListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardGameListMsg instance
         */
        public static create(properties?: protocol.ICardGameListMsg): protocol.CardGameListMsg;

        /**
         * Encodes the specified CardGameListMsg message. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @param message CardGameListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardGameListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardGameListMsg message, length delimited. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @param message CardGameListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardGameListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardGameListMsg;

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardGameListMsg;

        /**
         * Verifies a CardGameListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardGameListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardGameListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardGameListMsg;

        /**
         * Creates a plain object from a CardGameListMsg message. Also converts values to other types if specified.
         * @param message CardGameListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardGameListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardGameListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardGameMsg. */
    interface ICardGameMsg {

        /** CardGameMsg gameId */
        gameId: number;

        /** CardGameMsg name */
        name: string;

        /** CardGameMsg iconPath */
        iconPath: string;

        /** CardGameMsg totalNum */
        totalNum?: (number|null);
    }

    /** Represents a CardGameMsg. */
    class CardGameMsg implements ICardGameMsg {

        /**
         * Constructs a new CardGameMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICardGameMsg);

        /** CardGameMsg gameId. */
        public gameId: number;

        /** CardGameMsg name. */
        public name: string;

        /** CardGameMsg iconPath. */
        public iconPath: string;

        /** CardGameMsg totalNum. */
        public totalNum: number;

        /**
         * Creates a new CardGameMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardGameMsg instance
         */
        public static create(properties?: protocol.ICardGameMsg): protocol.CardGameMsg;

        /**
         * Encodes the specified CardGameMsg message. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @param message CardGameMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICardGameMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardGameMsg message, length delimited. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @param message CardGameMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICardGameMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CardGameMsg;

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CardGameMsg;

        /**
         * Verifies a CardGameMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardGameMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardGameMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CardGameMsg;

        /**
         * Creates a plain object from a CardGameMsg message. Also converts values to other types if specified.
         * @param message CardGameMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CardGameMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardGameMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonMsg. */
    interface ICommonMsg {

        /** CommonMsg intPar1 */
        intPar1?: (number|null);

        /** CommonMsg intPar2 */
        intPar2?: (number|null);

        /** CommonMsg intPar3 */
        intPar3?: (number|null);

        /** CommonMsg strPar1 */
        strPar1?: (string|null);

        /** CommonMsg strPar2 */
        strPar2?: (string|null);

        /** CommonMsg strPar3 */
        strPar3?: (string|null);

        /** CommonMsg boolPar1 */
        boolPar1?: (boolean|null);

        /** CommonMsg boolPar2 */
        boolPar2?: (boolean|null);

        /** CommonMsg boolPar3 */
        boolPar3?: (boolean|null);

        /** CommonMsg longPar1 */
        longPar1?: (number|Long|null);

        /** CommonMsg longPar2 */
        longPar2?: (number|Long|null);

        /** CommonMsg longPar3 */
        longPar3?: (number|Long|null);

        /** CommonMsg longPar4 */
        longPar4?: (number|Long|null);

        /** CommonMsg floatPar1 */
        floatPar1?: (number|null);

        /** CommonMsg floatPar2 */
        floatPar2?: (number|null);

        /** CommonMsg floatPar3 */
        floatPar3?: (number|null);
    }

    /** Represents a CommonMsg. */
    class CommonMsg implements ICommonMsg {

        /**
         * Constructs a new CommonMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommonMsg);

        /** CommonMsg intPar1. */
        public intPar1: number;

        /** CommonMsg intPar2. */
        public intPar2: number;

        /** CommonMsg intPar3. */
        public intPar3: number;

        /** CommonMsg strPar1. */
        public strPar1: string;

        /** CommonMsg strPar2. */
        public strPar2: string;

        /** CommonMsg strPar3. */
        public strPar3: string;

        /** CommonMsg boolPar1. */
        public boolPar1: boolean;

        /** CommonMsg boolPar2. */
        public boolPar2: boolean;

        /** CommonMsg boolPar3. */
        public boolPar3: boolean;

        /** CommonMsg longPar1. */
        public longPar1: (number|Long);

        /** CommonMsg longPar2. */
        public longPar2: (number|Long);

        /** CommonMsg longPar3. */
        public longPar3: (number|Long);

        /** CommonMsg longPar4. */
        public longPar4: (number|Long);

        /** CommonMsg floatPar1. */
        public floatPar1: number;

        /** CommonMsg floatPar2. */
        public floatPar2: number;

        /** CommonMsg floatPar3. */
        public floatPar3: number;

        /**
         * Creates a new CommonMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonMsg instance
         */
        public static create(properties?: protocol.ICommonMsg): protocol.CommonMsg;

        /**
         * Encodes the specified CommonMsg message. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @param message CommonMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommonMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CommonMsg message, length delimited. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @param message CommonMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommonMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CommonMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.CommonMsg;

        /**
         * Decodes a CommonMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.CommonMsg;

        /**
         * Verifies a CommonMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommonMsg;

        /**
         * Creates a plain object from a CommonMsg message. Also converts values to other types if specified.
         * @param message CommonMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommonMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GamePlayerInfoMsg. */
    interface IGamePlayerInfoMsg {

        /** GamePlayerInfoMsg playerId */
        playerId: number;

        /** GamePlayerInfoMsg nickName */
        nickName: string;

        /** GamePlayerInfoMsg level */
        level: number;

        /** GamePlayerInfoMsg headPic */
        headPic: string;

        /** GamePlayerInfoMsg remark */
        remark: string;

        /** GamePlayerInfoMsg winNum */
        winNum: number;
    }

    /** Represents a GamePlayerInfoMsg. */
    class GamePlayerInfoMsg implements IGamePlayerInfoMsg {

        /**
         * Constructs a new GamePlayerInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGamePlayerInfoMsg);

        /** GamePlayerInfoMsg playerId. */
        public playerId: number;

        /** GamePlayerInfoMsg nickName. */
        public nickName: string;

        /** GamePlayerInfoMsg level. */
        public level: number;

        /** GamePlayerInfoMsg headPic. */
        public headPic: string;

        /** GamePlayerInfoMsg remark. */
        public remark: string;

        /** GamePlayerInfoMsg winNum. */
        public winNum: number;

        /**
         * Creates a new GamePlayerInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePlayerInfoMsg instance
         */
        public static create(properties?: protocol.IGamePlayerInfoMsg): protocol.GamePlayerInfoMsg;

        /**
         * Encodes the specified GamePlayerInfoMsg message. Does not implicitly {@link protocol.GamePlayerInfoMsg.verify|verify} messages.
         * @param message GamePlayerInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGamePlayerInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GamePlayerInfoMsg message, length delimited. Does not implicitly {@link protocol.GamePlayerInfoMsg.verify|verify} messages.
         * @param message GamePlayerInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGamePlayerInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GamePlayerInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePlayerInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.GamePlayerInfoMsg;

        /**
         * Decodes a GamePlayerInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePlayerInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.GamePlayerInfoMsg;

        /**
         * Verifies a GamePlayerInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamePlayerInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamePlayerInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.GamePlayerInfoMsg;

        /**
         * Creates a plain object from a GamePlayerInfoMsg message. Also converts values to other types if specified.
         * @param message GamePlayerInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GamePlayerInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamePlayerInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChallengeMsg. */
    interface IChallengeMsg {

        /** ChallengeMsg list */
        list?: (protocol.IGamePlayerInfoMsg[]|null);

        /** ChallengeMsg gameId */
        gameId: number;
    }

    /** Represents a ChallengeMsg. */
    class ChallengeMsg implements IChallengeMsg {

        /**
         * Constructs a new ChallengeMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IChallengeMsg);

        /** ChallengeMsg list. */
        public list: protocol.IGamePlayerInfoMsg[];

        /** ChallengeMsg gameId. */
        public gameId: number;

        /**
         * Creates a new ChallengeMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChallengeMsg instance
         */
        public static create(properties?: protocol.IChallengeMsg): protocol.ChallengeMsg;

        /**
         * Encodes the specified ChallengeMsg message. Does not implicitly {@link protocol.ChallengeMsg.verify|verify} messages.
         * @param message ChallengeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IChallengeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChallengeMsg message, length delimited. Does not implicitly {@link protocol.ChallengeMsg.verify|verify} messages.
         * @param message ChallengeMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IChallengeMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChallengeMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChallengeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ChallengeMsg;

        /**
         * Decodes a ChallengeMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChallengeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ChallengeMsg;

        /**
         * Verifies a ChallengeMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChallengeMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChallengeMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ChallengeMsg;

        /**
         * Creates a plain object from a ChallengeMsg message. Also converts values to other types if specified.
         * @param message ChallengeMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ChallengeMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChallengeMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PVPPlayerGameLoadingMsg. */
    interface IPVPPlayerGameLoadingMsg {

        /** PVPPlayerGameLoadingMsg players */
        players?: (protocol.IPVPPlayerGameHeros[]|null);
    }

    /** Represents a PVPPlayerGameLoadingMsg. */
    class PVPPlayerGameLoadingMsg implements IPVPPlayerGameLoadingMsg {

        /**
         * Constructs a new PVPPlayerGameLoadingMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPVPPlayerGameLoadingMsg);

        /** PVPPlayerGameLoadingMsg players. */
        public players: protocol.IPVPPlayerGameHeros[];

        /**
         * Creates a new PVPPlayerGameLoadingMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PVPPlayerGameLoadingMsg instance
         */
        public static create(properties?: protocol.IPVPPlayerGameLoadingMsg): protocol.PVPPlayerGameLoadingMsg;

        /**
         * Encodes the specified PVPPlayerGameLoadingMsg message. Does not implicitly {@link protocol.PVPPlayerGameLoadingMsg.verify|verify} messages.
         * @param message PVPPlayerGameLoadingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPVPPlayerGameLoadingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PVPPlayerGameLoadingMsg message, length delimited. Does not implicitly {@link protocol.PVPPlayerGameLoadingMsg.verify|verify} messages.
         * @param message PVPPlayerGameLoadingMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPVPPlayerGameLoadingMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PVPPlayerGameLoadingMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PVPPlayerGameLoadingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PVPPlayerGameLoadingMsg;

        /**
         * Decodes a PVPPlayerGameLoadingMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PVPPlayerGameLoadingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PVPPlayerGameLoadingMsg;

        /**
         * Verifies a PVPPlayerGameLoadingMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PVPPlayerGameLoadingMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PVPPlayerGameLoadingMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PVPPlayerGameLoadingMsg;

        /**
         * Creates a plain object from a PVPPlayerGameLoadingMsg message. Also converts values to other types if specified.
         * @param message PVPPlayerGameLoadingMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PVPPlayerGameLoadingMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PVPPlayerGameLoadingMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PVPPlayerGameHeros. */
    interface IPVPPlayerGameHeros {

        /** PVPPlayerGameHeros playerId */
        playerId: number;

        /** PVPPlayerGameHeros campType */
        campType: number;

        /** PVPPlayerGameHeros nickName */
        nickName: string;

        /** PVPPlayerGameHeros headPic */
        headPic: string;

        /** PVPPlayerGameHeros robot */
        robot: boolean;

        /** PVPPlayerGameHeros winNum */
        winNum: number;
    }

    /** Represents a PVPPlayerGameHeros. */
    class PVPPlayerGameHeros implements IPVPPlayerGameHeros {

        /**
         * Constructs a new PVPPlayerGameHeros.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPVPPlayerGameHeros);

        /** PVPPlayerGameHeros playerId. */
        public playerId: number;

        /** PVPPlayerGameHeros campType. */
        public campType: number;

        /** PVPPlayerGameHeros nickName. */
        public nickName: string;

        /** PVPPlayerGameHeros headPic. */
        public headPic: string;

        /** PVPPlayerGameHeros robot. */
        public robot: boolean;

        /** PVPPlayerGameHeros winNum. */
        public winNum: number;

        /**
         * Creates a new PVPPlayerGameHeros instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PVPPlayerGameHeros instance
         */
        public static create(properties?: protocol.IPVPPlayerGameHeros): protocol.PVPPlayerGameHeros;

        /**
         * Encodes the specified PVPPlayerGameHeros message. Does not implicitly {@link protocol.PVPPlayerGameHeros.verify|verify} messages.
         * @param message PVPPlayerGameHeros message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPVPPlayerGameHeros, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PVPPlayerGameHeros message, length delimited. Does not implicitly {@link protocol.PVPPlayerGameHeros.verify|verify} messages.
         * @param message PVPPlayerGameHeros message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPVPPlayerGameHeros, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PVPPlayerGameHeros message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PVPPlayerGameHeros
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PVPPlayerGameHeros;

        /**
         * Decodes a PVPPlayerGameHeros message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PVPPlayerGameHeros
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PVPPlayerGameHeros;

        /**
         * Verifies a PVPPlayerGameHeros message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PVPPlayerGameHeros message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PVPPlayerGameHeros
         */
        public static fromObject(object: { [k: string]: any }): protocol.PVPPlayerGameHeros;

        /**
         * Creates a plain object from a PVPPlayerGameHeros message. Also converts values to other types if specified.
         * @param message PVPPlayerGameHeros
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PVPPlayerGameHeros, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PVPPlayerGameHeros to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLoadingProcessMsg. */
    interface IGameLoadingProcessMsg {

        /** GameLoadingProcessMsg playerId */
        playerId: number;

        /** GameLoadingProcessMsg process */
        process: number;
    }

    /** Represents a GameLoadingProcessMsg. */
    class GameLoadingProcessMsg implements IGameLoadingProcessMsg {

        /**
         * Constructs a new GameLoadingProcessMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGameLoadingProcessMsg);

        /** GameLoadingProcessMsg playerId. */
        public playerId: number;

        /** GameLoadingProcessMsg process. */
        public process: number;

        /**
         * Creates a new GameLoadingProcessMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLoadingProcessMsg instance
         */
        public static create(properties?: protocol.IGameLoadingProcessMsg): protocol.GameLoadingProcessMsg;

        /**
         * Encodes the specified GameLoadingProcessMsg message. Does not implicitly {@link protocol.GameLoadingProcessMsg.verify|verify} messages.
         * @param message GameLoadingProcessMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGameLoadingProcessMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameLoadingProcessMsg message, length delimited. Does not implicitly {@link protocol.GameLoadingProcessMsg.verify|verify} messages.
         * @param message GameLoadingProcessMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGameLoadingProcessMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameLoadingProcessMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLoadingProcessMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.GameLoadingProcessMsg;

        /**
         * Decodes a GameLoadingProcessMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLoadingProcessMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.GameLoadingProcessMsg;

        /**
         * Verifies a GameLoadingProcessMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLoadingProcessMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLoadingProcessMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.GameLoadingProcessMsg;

        /**
         * Creates a plain object from a GameLoadingProcessMsg message. Also converts values to other types if specified.
         * @param message GameLoadingProcessMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GameLoadingProcessMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLoadingProcessMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendInfoListMsg. */
    interface IFriendInfoListMsg {

        /** FriendInfoListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendInfoListMsg. */
    class FriendInfoListMsg implements IFriendInfoListMsg {

        /**
         * Constructs a new FriendInfoListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoListMsg);

        /** FriendInfoListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendInfoListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoListMsg instance
         */
        public static create(properties?: protocol.IFriendInfoListMsg): protocol.FriendInfoListMsg;

        /**
         * Encodes the specified FriendInfoListMsg message. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @param message FriendInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendInfoListMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @param message FriendInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoListMsg;

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendInfoListMsg;

        /**
         * Verifies a FriendInfoListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoListMsg;

        /**
         * Creates a plain object from a FriendInfoListMsg message. Also converts values to other types if specified.
         * @param message FriendInfoListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendInfoMsg. */
    interface IFriendInfoMsg {

        /** FriendInfoMsg friendId */
        friendId: number;

        /** FriendInfoMsg nickName */
        nickName: string;

        /** FriendInfoMsg headPic */
        headPic: string;

        /** FriendInfoMsg distance */
        distance: number;

        /** FriendInfoMsg online */
        online: boolean;

        /** FriendInfoMsg sex */
        sex: number;

        /** FriendInfoMsg age */
        age: number;

        /** FriendInfoMsg constellation */
        constellation: string;

        /** FriendInfoMsg signature */
        signature: string;
    }

    /** Represents a FriendInfoMsg. */
    class FriendInfoMsg implements IFriendInfoMsg {

        /**
         * Constructs a new FriendInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendInfoMsg);

        /** FriendInfoMsg friendId. */
        public friendId: number;

        /** FriendInfoMsg nickName. */
        public nickName: string;

        /** FriendInfoMsg headPic. */
        public headPic: string;

        /** FriendInfoMsg distance. */
        public distance: number;

        /** FriendInfoMsg online. */
        public online: boolean;

        /** FriendInfoMsg sex. */
        public sex: number;

        /** FriendInfoMsg age. */
        public age: number;

        /** FriendInfoMsg constellation. */
        public constellation: string;

        /** FriendInfoMsg signature. */
        public signature: string;

        /**
         * Creates a new FriendInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendInfoMsg instance
         */
        public static create(properties?: protocol.IFriendInfoMsg): protocol.FriendInfoMsg;

        /**
         * Encodes the specified FriendInfoMsg message. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @param message FriendInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendInfoMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @param message FriendInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendInfoMsg;

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendInfoMsg;

        /**
         * Verifies a FriendInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendInfoMsg;

        /**
         * Creates a plain object from a FriendInfoMsg message. Also converts values to other types if specified.
         * @param message FriendInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRecentListMsg. */
    interface IFriendRecentListMsg {

        /** FriendRecentListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendRecentListMsg. */
    class FriendRecentListMsg implements IFriendRecentListMsg {

        /**
         * Constructs a new FriendRecentListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendRecentListMsg);

        /** FriendRecentListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendRecentListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRecentListMsg instance
         */
        public static create(properties?: protocol.IFriendRecentListMsg): protocol.FriendRecentListMsg;

        /**
         * Encodes the specified FriendRecentListMsg message. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @param message FriendRecentListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendRecentListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendRecentListMsg message, length delimited. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @param message FriendRecentListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendRecentListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendRecentListMsg;

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendRecentListMsg;

        /**
         * Verifies a FriendRecentListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRecentListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRecentListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendRecentListMsg;

        /**
         * Creates a plain object from a FriendRecentListMsg message. Also converts values to other types if specified.
         * @param message FriendRecentListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendRecentListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRecentListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendNearbyListMsg. */
    interface IFriendNearbyListMsg {

        /** FriendNearbyListMsg list */
        list?: (protocol.IFriendInfoMsg[]|null);
    }

    /** Represents a FriendNearbyListMsg. */
    class FriendNearbyListMsg implements IFriendNearbyListMsg {

        /**
         * Constructs a new FriendNearbyListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFriendNearbyListMsg);

        /** FriendNearbyListMsg list. */
        public list: protocol.IFriendInfoMsg[];

        /**
         * Creates a new FriendNearbyListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendNearbyListMsg instance
         */
        public static create(properties?: protocol.IFriendNearbyListMsg): protocol.FriendNearbyListMsg;

        /**
         * Encodes the specified FriendNearbyListMsg message. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @param message FriendNearbyListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFriendNearbyListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified FriendNearbyListMsg message, length delimited. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @param message FriendNearbyListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFriendNearbyListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.FriendNearbyListMsg;

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.FriendNearbyListMsg;

        /**
         * Verifies a FriendNearbyListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendNearbyListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendNearbyListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.FriendNearbyListMsg;

        /**
         * Creates a plain object from a FriendNearbyListMsg message. Also converts values to other types if specified.
         * @param message FriendNearbyListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FriendNearbyListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendNearbyListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverReqMsg. */
    interface IGameOverReqMsg {

        /** GameOverReqMsg missionId */
        missionId: number;

        /** GameOverReqMsg process */
        process: number;

        /** GameOverReqMsg gold */
        gold: string;

        /** GameOverReqMsg clickNum */
        clickNum: string;

        /** GameOverReqMsg dps */
        dps: string;

        /** GameOverReqMsg clickHurt */
        clickHurt: string;

        /** GameOverReqMsg monsterHp */
        monsterHp: string;

        /** GameOverReqMsg secondClickNum */
        secondClickNum: number;

        /** GameOverReqMsg criticalClickNum */
        criticalClickNum: string;

        /** GameOverReqMsg secondCriticalClickNum */
        secondCriticalClickNum: number;

        /** GameOverReqMsg heroSouls */
        heroSouls: string;

        /** GameOverReqMsg monsterNum */
        monsterNum: number;

        /** GameOverReqMsg bossNum */
        bossNum: number;

        /** GameOverReqMsg boxMonsterNum */
        boxMonsterNum: number;
    }

    /** Represents a GameOverReqMsg. */
    class GameOverReqMsg implements IGameOverReqMsg {

        /**
         * Constructs a new GameOverReqMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGameOverReqMsg);

        /** GameOverReqMsg missionId. */
        public missionId: number;

        /** GameOverReqMsg process. */
        public process: number;

        /** GameOverReqMsg gold. */
        public gold: string;

        /** GameOverReqMsg clickNum. */
        public clickNum: string;

        /** GameOverReqMsg dps. */
        public dps: string;

        /** GameOverReqMsg clickHurt. */
        public clickHurt: string;

        /** GameOverReqMsg monsterHp. */
        public monsterHp: string;

        /** GameOverReqMsg secondClickNum. */
        public secondClickNum: number;

        /** GameOverReqMsg criticalClickNum. */
        public criticalClickNum: string;

        /** GameOverReqMsg secondCriticalClickNum. */
        public secondCriticalClickNum: number;

        /** GameOverReqMsg heroSouls. */
        public heroSouls: string;

        /** GameOverReqMsg monsterNum. */
        public monsterNum: number;

        /** GameOverReqMsg bossNum. */
        public bossNum: number;

        /** GameOverReqMsg boxMonsterNum. */
        public boxMonsterNum: number;

        /**
         * Creates a new GameOverReqMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverReqMsg instance
         */
        public static create(properties?: protocol.IGameOverReqMsg): protocol.GameOverReqMsg;

        /**
         * Encodes the specified GameOverReqMsg message. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @param message GameOverReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGameOverReqMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameOverReqMsg message, length delimited. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @param message GameOverReqMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGameOverReqMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.GameOverReqMsg;

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.GameOverReqMsg;

        /**
         * Verifies a GameOverReqMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverReqMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverReqMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.GameOverReqMsg;

        /**
         * Creates a plain object from a GameOverReqMsg message. Also converts values to other types if specified.
         * @param message GameOverReqMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GameOverReqMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverReqMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HandleOfflineAwardMsg. */
    interface IHandleOfflineAwardMsg {

        /** HandleOfflineAwardMsg missionNum */
        missionNum: number;

        /** HandleOfflineAwardMsg goldNum */
        goldNum: string;

        /** HandleOfflineAwardMsg heroSouls */
        heroSouls: string;
    }

    /** Represents a HandleOfflineAwardMsg. */
    class HandleOfflineAwardMsg implements IHandleOfflineAwardMsg {

        /**
         * Constructs a new HandleOfflineAwardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHandleOfflineAwardMsg);

        /** HandleOfflineAwardMsg missionNum. */
        public missionNum: number;

        /** HandleOfflineAwardMsg goldNum. */
        public goldNum: string;

        /** HandleOfflineAwardMsg heroSouls. */
        public heroSouls: string;

        /**
         * Creates a new HandleOfflineAwardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandleOfflineAwardMsg instance
         */
        public static create(properties?: protocol.IHandleOfflineAwardMsg): protocol.HandleOfflineAwardMsg;

        /**
         * Encodes the specified HandleOfflineAwardMsg message. Does not implicitly {@link protocol.HandleOfflineAwardMsg.verify|verify} messages.
         * @param message HandleOfflineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHandleOfflineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HandleOfflineAwardMsg message, length delimited. Does not implicitly {@link protocol.HandleOfflineAwardMsg.verify|verify} messages.
         * @param message HandleOfflineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHandleOfflineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HandleOfflineAwardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandleOfflineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HandleOfflineAwardMsg;

        /**
         * Decodes a HandleOfflineAwardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandleOfflineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HandleOfflineAwardMsg;

        /**
         * Verifies a HandleOfflineAwardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HandleOfflineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HandleOfflineAwardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HandleOfflineAwardMsg;

        /**
         * Creates a plain object from a HandleOfflineAwardMsg message. Also converts values to other types if specified.
         * @param message HandleOfflineAwardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HandleOfflineAwardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HandleOfflineAwardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InviteFriendListMsg. */
    interface IInviteFriendListMsg {

        /** InviteFriendListMsg list */
        list?: (protocol.IInviteFriendMsg[]|null);
    }

    /** Represents an InviteFriendListMsg. */
    class InviteFriendListMsg implements IInviteFriendListMsg {

        /**
         * Constructs a new InviteFriendListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IInviteFriendListMsg);

        /** InviteFriendListMsg list. */
        public list: protocol.IInviteFriendMsg[];

        /**
         * Creates a new InviteFriendListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteFriendListMsg instance
         */
        public static create(properties?: protocol.IInviteFriendListMsg): protocol.InviteFriendListMsg;

        /**
         * Encodes the specified InviteFriendListMsg message. Does not implicitly {@link protocol.InviteFriendListMsg.verify|verify} messages.
         * @param message InviteFriendListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IInviteFriendListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InviteFriendListMsg message, length delimited. Does not implicitly {@link protocol.InviteFriendListMsg.verify|verify} messages.
         * @param message InviteFriendListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IInviteFriendListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InviteFriendListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteFriendListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.InviteFriendListMsg;

        /**
         * Decodes an InviteFriendListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteFriendListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.InviteFriendListMsg;

        /**
         * Verifies an InviteFriendListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InviteFriendListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InviteFriendListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.InviteFriendListMsg;

        /**
         * Creates a plain object from an InviteFriendListMsg message. Also converts values to other types if specified.
         * @param message InviteFriendListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.InviteFriendListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InviteFriendListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InviteFriendMsg. */
    interface IInviteFriendMsg {

        /** InviteFriendMsg userName */
        userName: string;

        /** InviteFriendMsg nickName */
        nickName: string;

        /** InviteFriendMsg headPic */
        headPic: string;

        /** InviteFriendMsg missionId */
        missionId: number;

        /** InviteFriendMsg awardState */
        awardState: string;
    }

    /** Represents an InviteFriendMsg. */
    class InviteFriendMsg implements IInviteFriendMsg {

        /**
         * Constructs a new InviteFriendMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IInviteFriendMsg);

        /** InviteFriendMsg userName. */
        public userName: string;

        /** InviteFriendMsg nickName. */
        public nickName: string;

        /** InviteFriendMsg headPic. */
        public headPic: string;

        /** InviteFriendMsg missionId. */
        public missionId: number;

        /** InviteFriendMsg awardState. */
        public awardState: string;

        /**
         * Creates a new InviteFriendMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteFriendMsg instance
         */
        public static create(properties?: protocol.IInviteFriendMsg): protocol.InviteFriendMsg;

        /**
         * Encodes the specified InviteFriendMsg message. Does not implicitly {@link protocol.InviteFriendMsg.verify|verify} messages.
         * @param message InviteFriendMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IInviteFriendMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InviteFriendMsg message, length delimited. Does not implicitly {@link protocol.InviteFriendMsg.verify|verify} messages.
         * @param message InviteFriendMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IInviteFriendMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InviteFriendMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.InviteFriendMsg;

        /**
         * Decodes an InviteFriendMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.InviteFriendMsg;

        /**
         * Verifies an InviteFriendMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InviteFriendMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InviteFriendMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.InviteFriendMsg;

        /**
         * Creates a plain object from an InviteFriendMsg message. Also converts values to other types if specified.
         * @param message InviteFriendMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.InviteFriendMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InviteFriendMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InviteUserNamesMsg. */
    interface IInviteUserNamesMsg {

        /** InviteUserNamesMsg userNameList */
        userNameList?: (string[]|null);
    }

    /** Represents an InviteUserNamesMsg. */
    class InviteUserNamesMsg implements IInviteUserNamesMsg {

        /**
         * Constructs a new InviteUserNamesMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IInviteUserNamesMsg);

        /** InviteUserNamesMsg userNameList. */
        public userNameList: string[];

        /**
         * Creates a new InviteUserNamesMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InviteUserNamesMsg instance
         */
        public static create(properties?: protocol.IInviteUserNamesMsg): protocol.InviteUserNamesMsg;

        /**
         * Encodes the specified InviteUserNamesMsg message. Does not implicitly {@link protocol.InviteUserNamesMsg.verify|verify} messages.
         * @param message InviteUserNamesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IInviteUserNamesMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InviteUserNamesMsg message, length delimited. Does not implicitly {@link protocol.InviteUserNamesMsg.verify|verify} messages.
         * @param message InviteUserNamesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IInviteUserNamesMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InviteUserNamesMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InviteUserNamesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.InviteUserNamesMsg;

        /**
         * Decodes an InviteUserNamesMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InviteUserNamesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.InviteUserNamesMsg;

        /**
         * Verifies an InviteUserNamesMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InviteUserNamesMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InviteUserNamesMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.InviteUserNamesMsg;

        /**
         * Creates a plain object from an InviteUserNamesMsg message. Also converts values to other types if specified.
         * @param message InviteUserNamesMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.InviteUserNamesMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InviteUserNamesMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerOnlineAwardMsg. */
    interface IPlayerOnlineAwardMsg {

        /** PlayerOnlineAwardMsg coodTime */
        coodTime: string;

        /** PlayerOnlineAwardMsg onlineAwardNum */
        onlineAwardNum: number;
    }

    /** Represents a PlayerOnlineAwardMsg. */
    class PlayerOnlineAwardMsg implements IPlayerOnlineAwardMsg {

        /**
         * Constructs a new PlayerOnlineAwardMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerOnlineAwardMsg);

        /** PlayerOnlineAwardMsg coodTime. */
        public coodTime: string;

        /** PlayerOnlineAwardMsg onlineAwardNum. */
        public onlineAwardNum: number;

        /**
         * Creates a new PlayerOnlineAwardMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerOnlineAwardMsg instance
         */
        public static create(properties?: protocol.IPlayerOnlineAwardMsg): protocol.PlayerOnlineAwardMsg;

        /**
         * Encodes the specified PlayerOnlineAwardMsg message. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @param message PlayerOnlineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerOnlineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerOnlineAwardMsg message, length delimited. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @param message PlayerOnlineAwardMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerOnlineAwardMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerOnlineAwardMsg;

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerOnlineAwardMsg;

        /**
         * Verifies a PlayerOnlineAwardMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerOnlineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerOnlineAwardMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerOnlineAwardMsg;

        /**
         * Creates a plain object from a PlayerOnlineAwardMsg message. Also converts values to other types if specified.
         * @param message PlayerOnlineAwardMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerOnlineAwardMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerOnlineAwardMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerMonthLoginMsg. */
    interface IPlayerMonthLoginMsg {

        /** PlayerMonthLoginMsg loginDayNum */
        loginDayNum: number;

        /** PlayerMonthLoginMsg awardState */
        awardState?: (number[]|null);

        /** PlayerMonthLoginMsg flushTime */
        flushTime: string;
    }

    /** Represents a PlayerMonthLoginMsg. */
    class PlayerMonthLoginMsg implements IPlayerMonthLoginMsg {

        /**
         * Constructs a new PlayerMonthLoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerMonthLoginMsg);

        /** PlayerMonthLoginMsg loginDayNum. */
        public loginDayNum: number;

        /** PlayerMonthLoginMsg awardState. */
        public awardState: number[];

        /** PlayerMonthLoginMsg flushTime. */
        public flushTime: string;

        /**
         * Creates a new PlayerMonthLoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMonthLoginMsg instance
         */
        public static create(properties?: protocol.IPlayerMonthLoginMsg): protocol.PlayerMonthLoginMsg;

        /**
         * Encodes the specified PlayerMonthLoginMsg message. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @param message PlayerMonthLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerMonthLoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerMonthLoginMsg message, length delimited. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @param message PlayerMonthLoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerMonthLoginMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerMonthLoginMsg;

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerMonthLoginMsg;

        /**
         * Verifies a PlayerMonthLoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerMonthLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerMonthLoginMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerMonthLoginMsg;

        /**
         * Creates a plain object from a PlayerMonthLoginMsg message. Also converts values to other types if specified.
         * @param message PlayerMonthLoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerMonthLoginMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMonthLoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailItemMsg. */
    interface IMailItemMsg {

        /** MailItemMsg mailId */
        mailId: number;
    }

    /** Represents a MailItemMsg. */
    class MailItemMsg implements IMailItemMsg {

        /**
         * Constructs a new MailItemMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailItemMsg);

        /** MailItemMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailItemMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailItemMsg instance
         */
        public static create(properties?: protocol.IMailItemMsg): protocol.MailItemMsg;

        /**
         * Encodes the specified MailItemMsg message. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @param message MailItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailItemMsg message, length delimited. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @param message MailItemMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailItemMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailItemMsg;

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailItemMsg;

        /**
         * Verifies a MailItemMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailItemMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailItemMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailItemMsg;

        /**
         * Creates a plain object from a MailItemMsg message. Also converts values to other types if specified.
         * @param message MailItemMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailItemMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailItemMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemResMsgList. */
    interface IItemResMsgList {

        /** ItemResMsgList itemList */
        itemList?: (protocol.IItemResMsg[]|null);

        /** ItemResMsgList activityId */
        activityId?: (number|null);
    }

    /** Represents an ItemResMsgList. */
    class ItemResMsgList implements IItemResMsgList {

        /**
         * Constructs a new ItemResMsgList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemResMsgList);

        /** ItemResMsgList itemList. */
        public itemList: protocol.IItemResMsg[];

        /** ItemResMsgList activityId. */
        public activityId: number;

        /**
         * Creates a new ItemResMsgList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemResMsgList instance
         */
        public static create(properties?: protocol.IItemResMsgList): protocol.ItemResMsgList;

        /**
         * Encodes the specified ItemResMsgList message. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @param message ItemResMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemResMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemResMsgList message, length delimited. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @param message ItemResMsgList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemResMsgList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemResMsgList;

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemResMsgList;

        /**
         * Verifies an ItemResMsgList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemResMsgList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemResMsgList
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemResMsgList;

        /**
         * Creates a plain object from an ItemResMsgList message. Also converts values to other types if specified.
         * @param message ItemResMsgList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemResMsgList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemResMsgList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemResMsg. */
    interface IItemResMsg {

        /** ItemResMsg itemId */
        itemId: number;

        /** ItemResMsg num */
        num: string;

        /** ItemResMsg type */
        type: number;
    }

    /** Represents an ItemResMsg. */
    class ItemResMsg implements IItemResMsg {

        /**
         * Constructs a new ItemResMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IItemResMsg);

        /** ItemResMsg itemId. */
        public itemId: number;

        /** ItemResMsg num. */
        public num: string;

        /** ItemResMsg type. */
        public type: number;

        /**
         * Creates a new ItemResMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemResMsg instance
         */
        public static create(properties?: protocol.IItemResMsg): protocol.ItemResMsg;

        /**
         * Encodes the specified ItemResMsg message. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @param message ItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IItemResMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemResMsg message, length delimited. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @param message ItemResMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IItemResMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ItemResMsg;

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ItemResMsg;

        /**
         * Verifies an ItemResMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemResMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ItemResMsg;

        /**
         * Creates a plain object from an ItemResMsg message. Also converts values to other types if specified.
         * @param message ItemResMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ItemResMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemResMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailInfoListMsg. */
    interface IMailInfoListMsg {

        /** MailInfoListMsg list */
        list?: (protocol.IMailInfoMsg[]|null);
    }

    /** Represents a MailInfoListMsg. */
    class MailInfoListMsg implements IMailInfoListMsg {

        /**
         * Constructs a new MailInfoListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailInfoListMsg);

        /** MailInfoListMsg list. */
        public list: protocol.IMailInfoMsg[];

        /**
         * Creates a new MailInfoListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoListMsg instance
         */
        public static create(properties?: protocol.IMailInfoListMsg): protocol.MailInfoListMsg;

        /**
         * Encodes the specified MailInfoListMsg message. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @param message MailInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoListMsg message, length delimited. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @param message MailInfoListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailInfoListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailInfoListMsg;

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailInfoListMsg;

        /**
         * Verifies a MailInfoListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailInfoListMsg;

        /**
         * Creates a plain object from a MailInfoListMsg message. Also converts values to other types if specified.
         * @param message MailInfoListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailInfoListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailInfoMsg. */
    interface IMailInfoMsg {

        /** MailInfoMsg mailId */
        mailId: number;

        /** MailInfoMsg sendDate */
        sendDate: (number|Long);

        /** MailInfoMsg senderUserId */
        senderUserId: number;

        /** MailInfoMsg senderNickname */
        senderNickname: string;

        /** MailInfoMsg type */
        type: number;

        /** MailInfoMsg title */
        title: string;

        /** MailInfoMsg content */
        content: string;

        /** MailInfoMsg read */
        read: boolean;

        /** MailInfoMsg itemList */
        itemList: string;
    }

    /** Represents a MailInfoMsg. */
    class MailInfoMsg implements IMailInfoMsg {

        /**
         * Constructs a new MailInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailInfoMsg);

        /** MailInfoMsg mailId. */
        public mailId: number;

        /** MailInfoMsg sendDate. */
        public sendDate: (number|Long);

        /** MailInfoMsg senderUserId. */
        public senderUserId: number;

        /** MailInfoMsg senderNickname. */
        public senderNickname: string;

        /** MailInfoMsg type. */
        public type: number;

        /** MailInfoMsg title. */
        public title: string;

        /** MailInfoMsg content. */
        public content: string;

        /** MailInfoMsg read. */
        public read: boolean;

        /** MailInfoMsg itemList. */
        public itemList: string;

        /**
         * Creates a new MailInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfoMsg instance
         */
        public static create(properties?: protocol.IMailInfoMsg): protocol.MailInfoMsg;

        /**
         * Encodes the specified MailInfoMsg message. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @param message MailInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailInfoMsg message, length delimited. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @param message MailInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailInfoMsg;

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailInfoMsg;

        /**
         * Verifies a MailInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailInfoMsg;

        /**
         * Creates a plain object from a MailInfoMsg message. Also converts values to other types if specified.
         * @param message MailInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailReadMsg. */
    interface IMailReadMsg {

        /** MailReadMsg mailId */
        mailId: number;
    }

    /** Represents a MailReadMsg. */
    class MailReadMsg implements IMailReadMsg {

        /**
         * Constructs a new MailReadMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailReadMsg);

        /** MailReadMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailReadMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailReadMsg instance
         */
        public static create(properties?: protocol.IMailReadMsg): protocol.MailReadMsg;

        /**
         * Encodes the specified MailReadMsg message. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @param message MailReadMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailReadMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailReadMsg message, length delimited. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @param message MailReadMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailReadMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailReadMsg;

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailReadMsg;

        /**
         * Verifies a MailReadMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailReadMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailReadMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailReadMsg;

        /**
         * Creates a plain object from a MailReadMsg message. Also converts values to other types if specified.
         * @param message MailReadMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailReadMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailReadMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailOneUpMsg. */
    interface IMailOneUpMsg {

        /** MailOneUpMsg force */
        force: boolean;
    }

    /** Represents a MailOneUpMsg. */
    class MailOneUpMsg implements IMailOneUpMsg {

        /**
         * Constructs a new MailOneUpMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailOneUpMsg);

        /** MailOneUpMsg force. */
        public force: boolean;

        /**
         * Creates a new MailOneUpMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailOneUpMsg instance
         */
        public static create(properties?: protocol.IMailOneUpMsg): protocol.MailOneUpMsg;

        /**
         * Encodes the specified MailOneUpMsg message. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @param message MailOneUpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailOneUpMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailOneUpMsg message, length delimited. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @param message MailOneUpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailOneUpMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailOneUpMsg;

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailOneUpMsg;

        /**
         * Verifies a MailOneUpMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailOneUpMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailOneUpMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailOneUpMsg;

        /**
         * Creates a plain object from a MailOneUpMsg message. Also converts values to other types if specified.
         * @param message MailOneUpMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailOneUpMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailOneUpMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailDeleteMsg. */
    interface IMailDeleteMsg {

        /** MailDeleteMsg mailId */
        mailId: number;
    }

    /** Represents a MailDeleteMsg. */
    class MailDeleteMsg implements IMailDeleteMsg {

        /**
         * Constructs a new MailDeleteMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailDeleteMsg);

        /** MailDeleteMsg mailId. */
        public mailId: number;

        /**
         * Creates a new MailDeleteMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDeleteMsg instance
         */
        public static create(properties?: protocol.IMailDeleteMsg): protocol.MailDeleteMsg;

        /**
         * Encodes the specified MailDeleteMsg message. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @param message MailDeleteMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailDeleteMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailDeleteMsg message, length delimited. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @param message MailDeleteMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailDeleteMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailDeleteMsg;

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailDeleteMsg;

        /**
         * Verifies a MailDeleteMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailDeleteMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailDeleteMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailDeleteMsg;

        /**
         * Creates a plain object from a MailDeleteMsg message. Also converts values to other types if specified.
         * @param message MailDeleteMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailDeleteMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDeleteMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailDeleteMsgSC. */
    interface IMailDeleteMsgSC {

        /** MailDeleteMsgSC mailId */
        mailId: number;
    }

    /** Represents a MailDeleteMsgSC. */
    class MailDeleteMsgSC implements IMailDeleteMsgSC {

        /**
         * Constructs a new MailDeleteMsgSC.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMailDeleteMsgSC);

        /** MailDeleteMsgSC mailId. */
        public mailId: number;

        /**
         * Creates a new MailDeleteMsgSC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDeleteMsgSC instance
         */
        public static create(properties?: protocol.IMailDeleteMsgSC): protocol.MailDeleteMsgSC;

        /**
         * Encodes the specified MailDeleteMsgSC message. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @param message MailDeleteMsgSC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMailDeleteMsgSC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailDeleteMsgSC message, length delimited. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @param message MailDeleteMsgSC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMailDeleteMsgSC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MailDeleteMsgSC;

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MailDeleteMsgSC;

        /**
         * Verifies a MailDeleteMsgSC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailDeleteMsgSC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailDeleteMsgSC
         */
        public static fromObject(object: { [k: string]: any }): protocol.MailDeleteMsgSC;

        /**
         * Creates a plain object from a MailDeleteMsgSC message. Also converts values to other types if specified.
         * @param message MailDeleteMsgSC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MailDeleteMsgSC, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDeleteMsgSC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MercenaryDataListMsg. */
    interface IMercenaryDataListMsg {

        /** MercenaryDataListMsg list */
        list?: (protocol.IMercenaryDataMsg[]|null);
    }

    /** Represents a MercenaryDataListMsg. */
    class MercenaryDataListMsg implements IMercenaryDataListMsg {

        /**
         * Constructs a new MercenaryDataListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMercenaryDataListMsg);

        /** MercenaryDataListMsg list. */
        public list: protocol.IMercenaryDataMsg[];

        /**
         * Creates a new MercenaryDataListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MercenaryDataListMsg instance
         */
        public static create(properties?: protocol.IMercenaryDataListMsg): protocol.MercenaryDataListMsg;

        /**
         * Encodes the specified MercenaryDataListMsg message. Does not implicitly {@link protocol.MercenaryDataListMsg.verify|verify} messages.
         * @param message MercenaryDataListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMercenaryDataListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MercenaryDataListMsg message, length delimited. Does not implicitly {@link protocol.MercenaryDataListMsg.verify|verify} messages.
         * @param message MercenaryDataListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMercenaryDataListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MercenaryDataListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MercenaryDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MercenaryDataListMsg;

        /**
         * Decodes a MercenaryDataListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MercenaryDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MercenaryDataListMsg;

        /**
         * Verifies a MercenaryDataListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MercenaryDataListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MercenaryDataListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MercenaryDataListMsg;

        /**
         * Creates a plain object from a MercenaryDataListMsg message. Also converts values to other types if specified.
         * @param message MercenaryDataListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MercenaryDataListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MercenaryDataListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MercenaryDataMsg. */
    interface IMercenaryDataMsg {

        /** MercenaryDataMsg id */
        id: number;

        /** MercenaryDataMsg mercenaryId */
        mercenaryId: number;

        /** MercenaryDataMsg name */
        name: string;

        /** MercenaryDataMsg attributeIdList */
        attributeIdList?: (number[]|null);

        /** MercenaryDataMsg level */
        level: number;

        /** MercenaryDataMsg exp */
        exp: number;

        /** MercenaryDataMsg curTaskId */
        curTaskId: number;

        /** MercenaryDataMsg taskList */
        taskList?: (protocol.IMercenaryTaskMsg[]|null);

        /** MercenaryDataMsg lifeNum */
        lifeNum: number;

        /** MercenaryDataMsg leftTime */
        leftTime: number;

        /** MercenaryDataMsg revieveTime */
        revieveTime: string;

        /** MercenaryDataMsg index */
        index: number;

        /** MercenaryDataMsg isNewMercenary */
        isNewMercenary: boolean;
    }

    /** Represents a MercenaryDataMsg. */
    class MercenaryDataMsg implements IMercenaryDataMsg {

        /**
         * Constructs a new MercenaryDataMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMercenaryDataMsg);

        /** MercenaryDataMsg id. */
        public id: number;

        /** MercenaryDataMsg mercenaryId. */
        public mercenaryId: number;

        /** MercenaryDataMsg name. */
        public name: string;

        /** MercenaryDataMsg attributeIdList. */
        public attributeIdList: number[];

        /** MercenaryDataMsg level. */
        public level: number;

        /** MercenaryDataMsg exp. */
        public exp: number;

        /** MercenaryDataMsg curTaskId. */
        public curTaskId: number;

        /** MercenaryDataMsg taskList. */
        public taskList: protocol.IMercenaryTaskMsg[];

        /** MercenaryDataMsg lifeNum. */
        public lifeNum: number;

        /** MercenaryDataMsg leftTime. */
        public leftTime: number;

        /** MercenaryDataMsg revieveTime. */
        public revieveTime: string;

        /** MercenaryDataMsg index. */
        public index: number;

        /** MercenaryDataMsg isNewMercenary. */
        public isNewMercenary: boolean;

        /**
         * Creates a new MercenaryDataMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MercenaryDataMsg instance
         */
        public static create(properties?: protocol.IMercenaryDataMsg): protocol.MercenaryDataMsg;

        /**
         * Encodes the specified MercenaryDataMsg message. Does not implicitly {@link protocol.MercenaryDataMsg.verify|verify} messages.
         * @param message MercenaryDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMercenaryDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MercenaryDataMsg message, length delimited. Does not implicitly {@link protocol.MercenaryDataMsg.verify|verify} messages.
         * @param message MercenaryDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMercenaryDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MercenaryDataMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MercenaryDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MercenaryDataMsg;

        /**
         * Decodes a MercenaryDataMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MercenaryDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MercenaryDataMsg;

        /**
         * Verifies a MercenaryDataMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MercenaryDataMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MercenaryDataMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MercenaryDataMsg;

        /**
         * Creates a plain object from a MercenaryDataMsg message. Also converts values to other types if specified.
         * @param message MercenaryDataMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MercenaryDataMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MercenaryDataMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MercenaryTaskMsg. */
    interface IMercenaryTaskMsg {

        /** MercenaryTaskMsg taskId */
        taskId: number;

        /** MercenaryTaskMsg useTime */
        useTime: number;

        /** MercenaryTaskMsg rate */
        rate?: (number|null);

        /** MercenaryTaskMsg gold */
        gold?: (string|null);

        /** MercenaryTaskMsg levelRate */
        levelRate?: (number|null);
    }

    /** Represents a MercenaryTaskMsg. */
    class MercenaryTaskMsg implements IMercenaryTaskMsg {

        /**
         * Constructs a new MercenaryTaskMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMercenaryTaskMsg);

        /** MercenaryTaskMsg taskId. */
        public taskId: number;

        /** MercenaryTaskMsg useTime. */
        public useTime: number;

        /** MercenaryTaskMsg rate. */
        public rate: number;

        /** MercenaryTaskMsg gold. */
        public gold: string;

        /** MercenaryTaskMsg levelRate. */
        public levelRate: number;

        /**
         * Creates a new MercenaryTaskMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MercenaryTaskMsg instance
         */
        public static create(properties?: protocol.IMercenaryTaskMsg): protocol.MercenaryTaskMsg;

        /**
         * Encodes the specified MercenaryTaskMsg message. Does not implicitly {@link protocol.MercenaryTaskMsg.verify|verify} messages.
         * @param message MercenaryTaskMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMercenaryTaskMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MercenaryTaskMsg message, length delimited. Does not implicitly {@link protocol.MercenaryTaskMsg.verify|verify} messages.
         * @param message MercenaryTaskMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMercenaryTaskMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MercenaryTaskMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MercenaryTaskMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.MercenaryTaskMsg;

        /**
         * Decodes a MercenaryTaskMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MercenaryTaskMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.MercenaryTaskMsg;

        /**
         * Verifies a MercenaryTaskMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MercenaryTaskMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MercenaryTaskMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.MercenaryTaskMsg;

        /**
         * Creates a plain object from a MercenaryTaskMsg message. Also converts values to other types if specified.
         * @param message MercenaryTaskMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MercenaryTaskMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MercenaryTaskMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewbiewListMsg. */
    interface INewbiewListMsg {

        /** NewbiewListMsg list */
        list?: (protocol.INewbiewMsg[]|null);
    }

    /** Represents a NewbiewListMsg. */
    class NewbiewListMsg implements INewbiewListMsg {

        /**
         * Constructs a new NewbiewListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INewbiewListMsg);

        /** NewbiewListMsg list. */
        public list: protocol.INewbiewMsg[];

        /**
         * Creates a new NewbiewListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewbiewListMsg instance
         */
        public static create(properties?: protocol.INewbiewListMsg): protocol.NewbiewListMsg;

        /**
         * Encodes the specified NewbiewListMsg message. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @param message NewbiewListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INewbiewListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NewbiewListMsg message, length delimited. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @param message NewbiewListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INewbiewListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.NewbiewListMsg;

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.NewbiewListMsg;

        /**
         * Verifies a NewbiewListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewbiewListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewbiewListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.NewbiewListMsg;

        /**
         * Creates a plain object from a NewbiewListMsg message. Also converts values to other types if specified.
         * @param message NewbiewListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NewbiewListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewbiewListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewbiewMsg. */
    interface INewbiewMsg {

        /** NewbiewMsg type */
        type: number;

        /** NewbiewMsg stepId */
        stepId: number;

        /** NewbiewMsg param */
        param: string;
    }

    /** Represents a NewbiewMsg. */
    class NewbiewMsg implements INewbiewMsg {

        /**
         * Constructs a new NewbiewMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INewbiewMsg);

        /** NewbiewMsg type. */
        public type: number;

        /** NewbiewMsg stepId. */
        public stepId: number;

        /** NewbiewMsg param. */
        public param: string;

        /**
         * Creates a new NewbiewMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewbiewMsg instance
         */
        public static create(properties?: protocol.INewbiewMsg): protocol.NewbiewMsg;

        /**
         * Encodes the specified NewbiewMsg message. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @param message NewbiewMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INewbiewMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NewbiewMsg message, length delimited. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @param message NewbiewMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INewbiewMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.NewbiewMsg;

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.NewbiewMsg;

        /**
         * Verifies a NewbiewMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewbiewMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewbiewMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.NewbiewMsg;

        /**
         * Creates a plain object from a NewbiewMsg message. Also converts values to other types if specified.
         * @param message NewbiewMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NewbiewMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewbiewMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountMsg. */
    interface IAccountMsg {

        /** AccountMsg nickName */
        nickName: string;

        /** AccountMsg birth */
        birth: string;

        /** AccountMsg remark */
        remark: string;
    }

    /** Represents an AccountMsg. */
    class AccountMsg implements IAccountMsg {

        /**
         * Constructs a new AccountMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAccountMsg);

        /** AccountMsg nickName. */
        public nickName: string;

        /** AccountMsg birth. */
        public birth: string;

        /** AccountMsg remark. */
        public remark: string;

        /**
         * Creates a new AccountMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountMsg instance
         */
        public static create(properties?: protocol.IAccountMsg): protocol.AccountMsg;

        /**
         * Encodes the specified AccountMsg message. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @param message AccountMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAccountMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AccountMsg message, length delimited. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @param message AccountMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAccountMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AccountMsg;

        /**
         * Decodes an AccountMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AccountMsg;

        /**
         * Verifies an AccountMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AccountMsg;

        /**
         * Creates a plain object from an AccountMsg message. Also converts values to other types if specified.
         * @param message AccountMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AccountMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountInfoMsg. */
    interface IAccountInfoMsg {

        /** AccountInfoMsg nickName */
        nickName: string;

        /** AccountInfoMsg playerId */
        playerId: number;

        /** AccountInfoMsg headPic */
        headPic: string;

        /** AccountInfoMsg missionId */
        missionId: number;

        /** AccountInfoMsg process */
        process: number;

        /** AccountInfoMsg onlineTime */
        onlineTime: number;

        /** AccountInfoMsg clientSet */
        clientSet: string;

        /** AccountInfoMsg currentMissionId */
        currentMissionId: number;

        /** AccountInfoMsg HighestMissionId */
        HighestMissionId: number;

        /** AccountInfoMsg heroSwitchSet */
        heroSwitchSet: boolean;
    }

    /** Represents an AccountInfoMsg. */
    class AccountInfoMsg implements IAccountInfoMsg {

        /**
         * Constructs a new AccountInfoMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAccountInfoMsg);

        /** AccountInfoMsg nickName. */
        public nickName: string;

        /** AccountInfoMsg playerId. */
        public playerId: number;

        /** AccountInfoMsg headPic. */
        public headPic: string;

        /** AccountInfoMsg missionId. */
        public missionId: number;

        /** AccountInfoMsg process. */
        public process: number;

        /** AccountInfoMsg onlineTime. */
        public onlineTime: number;

        /** AccountInfoMsg clientSet. */
        public clientSet: string;

        /** AccountInfoMsg currentMissionId. */
        public currentMissionId: number;

        /** AccountInfoMsg HighestMissionId. */
        public HighestMissionId: number;

        /** AccountInfoMsg heroSwitchSet. */
        public heroSwitchSet: boolean;

        /**
         * Creates a new AccountInfoMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountInfoMsg instance
         */
        public static create(properties?: protocol.IAccountInfoMsg): protocol.AccountInfoMsg;

        /**
         * Encodes the specified AccountInfoMsg message. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @param message AccountInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAccountInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AccountInfoMsg message, length delimited. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @param message AccountInfoMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAccountInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.AccountInfoMsg;

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.AccountInfoMsg;

        /**
         * Verifies an AccountInfoMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountInfoMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.AccountInfoMsg;

        /**
         * Creates a plain object from an AccountInfoMsg message. Also converts values to other types if specified.
         * @param message AccountInfoMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AccountInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInfoMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinThemList. */
    interface IJoinThemList {

        /** JoinThemList list */
        list?: (protocol.IAccountInfoMsg[]|null);
    }

    /** Represents a JoinThemList. */
    class JoinThemList implements IJoinThemList {

        /**
         * Constructs a new JoinThemList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IJoinThemList);

        /** JoinThemList list. */
        public list: protocol.IAccountInfoMsg[];

        /**
         * Creates a new JoinThemList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinThemList instance
         */
        public static create(properties?: protocol.IJoinThemList): protocol.JoinThemList;

        /**
         * Encodes the specified JoinThemList message. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @param message JoinThemList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IJoinThemList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinThemList message, length delimited. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @param message JoinThemList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IJoinThemList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinThemList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.JoinThemList;

        /**
         * Decodes a JoinThemList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.JoinThemList;

        /**
         * Verifies a JoinThemList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinThemList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinThemList
         */
        public static fromObject(object: { [k: string]: any }): protocol.JoinThemList;

        /**
         * Creates a plain object from a JoinThemList message. Also converts values to other types if specified.
         * @param message JoinThemList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.JoinThemList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinThemList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroListMsg. */
    interface IHeroListMsg {

        /** HeroListMsg list */
        list?: (protocol.IHeroMsg[]|null);
    }

    /** Represents a HeroListMsg. */
    class HeroListMsg implements IHeroListMsg {

        /**
         * Constructs a new HeroListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroListMsg);

        /** HeroListMsg list. */
        public list: protocol.IHeroMsg[];

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroListMsg instance
         */
        public static create(properties?: protocol.IHeroListMsg): protocol.HeroListMsg;

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @param message HeroListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroListMsg;

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroListMsg;

        /**
         * Verifies a HeroListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroListMsg;

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @param message HeroListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroMsg. */
    interface IHeroMsg {

        /** HeroMsg heroId */
        heroId: number;

        /** HeroMsg level */
        level: number;

        /** HeroMsg skillState */
        skillState: string;

        /** HeroMsg goldLevel */
        goldLevel: number;
    }

    /** Represents a HeroMsg. */
    class HeroMsg implements IHeroMsg {

        /**
         * Constructs a new HeroMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroMsg);

        /** HeroMsg heroId. */
        public heroId: number;

        /** HeroMsg level. */
        public level: number;

        /** HeroMsg skillState. */
        public skillState: string;

        /** HeroMsg goldLevel. */
        public goldLevel: number;

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroMsg instance
         */
        public static create(properties?: protocol.IHeroMsg): protocol.HeroMsg;

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @param message HeroMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroMsg;

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroMsg;

        /**
         * Verifies a HeroMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroMsg;

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @param message HeroMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroGoldListMsg. */
    interface IHeroGoldListMsg {

        /** HeroGoldListMsg list */
        list?: (protocol.IHeroGoldMsg[]|null);
    }

    /** Represents a HeroGoldListMsg. */
    class HeroGoldListMsg implements IHeroGoldListMsg {

        /**
         * Constructs a new HeroGoldListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroGoldListMsg);

        /** HeroGoldListMsg list. */
        public list: protocol.IHeroGoldMsg[];

        /**
         * Creates a new HeroGoldListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroGoldListMsg instance
         */
        public static create(properties?: protocol.IHeroGoldListMsg): protocol.HeroGoldListMsg;

        /**
         * Encodes the specified HeroGoldListMsg message. Does not implicitly {@link protocol.HeroGoldListMsg.verify|verify} messages.
         * @param message HeroGoldListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroGoldListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroGoldListMsg message, length delimited. Does not implicitly {@link protocol.HeroGoldListMsg.verify|verify} messages.
         * @param message HeroGoldListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroGoldListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroGoldListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroGoldListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroGoldListMsg;

        /**
         * Decodes a HeroGoldListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroGoldListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroGoldListMsg;

        /**
         * Verifies a HeroGoldListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroGoldListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroGoldListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroGoldListMsg;

        /**
         * Creates a plain object from a HeroGoldListMsg message. Also converts values to other types if specified.
         * @param message HeroGoldListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroGoldListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroGoldListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroGoldMsg. */
    interface IHeroGoldMsg {

        /** HeroGoldMsg heroId */
        heroId: number;

        /** HeroGoldMsg goldLevel */
        goldLevel: number;
    }

    /** Represents a HeroGoldMsg. */
    class HeroGoldMsg implements IHeroGoldMsg {

        /**
         * Constructs a new HeroGoldMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroGoldMsg);

        /** HeroGoldMsg heroId. */
        public heroId: number;

        /** HeroGoldMsg goldLevel. */
        public goldLevel: number;

        /**
         * Creates a new HeroGoldMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroGoldMsg instance
         */
        public static create(properties?: protocol.IHeroGoldMsg): protocol.HeroGoldMsg;

        /**
         * Encodes the specified HeroGoldMsg message. Does not implicitly {@link protocol.HeroGoldMsg.verify|verify} messages.
         * @param message HeroGoldMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroGoldMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroGoldMsg message, length delimited. Does not implicitly {@link protocol.HeroGoldMsg.verify|verify} messages.
         * @param message HeroGoldMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroGoldMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroGoldMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroGoldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroGoldMsg;

        /**
         * Decodes a HeroGoldMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroGoldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroGoldMsg;

        /**
         * Verifies a HeroGoldMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroGoldMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroGoldMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroGoldMsg;

        /**
         * Creates a plain object from a HeroGoldMsg message. Also converts values to other types if specified.
         * @param message HeroGoldMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroGoldMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroGoldMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactListMsg. */
    interface IArtifactListMsg {

        /** ArtifactListMsg list */
        list?: (protocol.IArtifactMsg[]|null);
    }

    /** Represents an ArtifactListMsg. */
    class ArtifactListMsg implements IArtifactListMsg {

        /**
         * Constructs a new ArtifactListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IArtifactListMsg);

        /** ArtifactListMsg list. */
        public list: protocol.IArtifactMsg[];

        /**
         * Creates a new ArtifactListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactListMsg instance
         */
        public static create(properties?: protocol.IArtifactListMsg): protocol.ArtifactListMsg;

        /**
         * Encodes the specified ArtifactListMsg message. Does not implicitly {@link protocol.ArtifactListMsg.verify|verify} messages.
         * @param message ArtifactListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IArtifactListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArtifactListMsg message, length delimited. Does not implicitly {@link protocol.ArtifactListMsg.verify|verify} messages.
         * @param message ArtifactListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IArtifactListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArtifactListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ArtifactListMsg;

        /**
         * Decodes an ArtifactListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ArtifactListMsg;

        /**
         * Verifies an ArtifactListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ArtifactListMsg;

        /**
         * Creates a plain object from an ArtifactListMsg message. Also converts values to other types if specified.
         * @param message ArtifactListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ArtifactListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactMsg. */
    interface IArtifactMsg {

        /** ArtifactMsg artifactId */
        artifactId: number;

        /** ArtifactMsg level */
        level: number;
    }

    /** Represents an ArtifactMsg. */
    class ArtifactMsg implements IArtifactMsg {

        /**
         * Constructs a new ArtifactMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IArtifactMsg);

        /** ArtifactMsg artifactId. */
        public artifactId: number;

        /** ArtifactMsg level. */
        public level: number;

        /**
         * Creates a new ArtifactMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactMsg instance
         */
        public static create(properties?: protocol.IArtifactMsg): protocol.ArtifactMsg;

        /**
         * Encodes the specified ArtifactMsg message. Does not implicitly {@link protocol.ArtifactMsg.verify|verify} messages.
         * @param message ArtifactMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IArtifactMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArtifactMsg message, length delimited. Does not implicitly {@link protocol.ArtifactMsg.verify|verify} messages.
         * @param message ArtifactMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IArtifactMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArtifactMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ArtifactMsg;

        /**
         * Decodes an ArtifactMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ArtifactMsg;

        /**
         * Verifies an ArtifactMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ArtifactMsg;

        /**
         * Creates a plain object from an ArtifactMsg message. Also converts values to other types if specified.
         * @param message ArtifactMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ArtifactMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipListMsg. */
    interface IEquipListMsg {

        /** EquipListMsg list */
        list?: (protocol.IEquipMsg[]|null);
    }

    /** Represents an EquipListMsg. */
    class EquipListMsg implements IEquipListMsg {

        /**
         * Constructs a new EquipListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEquipListMsg);

        /** EquipListMsg list. */
        public list: protocol.IEquipMsg[];

        /**
         * Creates a new EquipListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipListMsg instance
         */
        public static create(properties?: protocol.IEquipListMsg): protocol.EquipListMsg;

        /**
         * Encodes the specified EquipListMsg message. Does not implicitly {@link protocol.EquipListMsg.verify|verify} messages.
         * @param message EquipListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEquipListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EquipListMsg message, length delimited. Does not implicitly {@link protocol.EquipListMsg.verify|verify} messages.
         * @param message EquipListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEquipListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.EquipListMsg;

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.EquipListMsg;

        /**
         * Verifies an EquipListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.EquipListMsg;

        /**
         * Creates a plain object from an EquipListMsg message. Also converts values to other types if specified.
         * @param message EquipListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EquipListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipMsg. */
    interface IEquipMsg {

        /** EquipMsg id */
        id: number;

        /** EquipMsg equipId */
        equipId: number;

        /** EquipMsg level */
        level: number;

        /** EquipMsg isWear */
        isWear: boolean;

        /** EquipMsg latticeId */
        latticeId: number;

        /** EquipMsg attributeId */
        attributeId: string;

        /** EquipMsg quality */
        quality: number;

        /** EquipMsg name */
        name: string;

        /** EquipMsg destroyNum */
        destroyNum: number;

        /** EquipMsg isNewEquip */
        isNewEquip: boolean;

        /** EquipMsg lock */
        lock: boolean;
    }

    /** Represents an EquipMsg. */
    class EquipMsg implements IEquipMsg {

        /**
         * Constructs a new EquipMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IEquipMsg);

        /** EquipMsg id. */
        public id: number;

        /** EquipMsg equipId. */
        public equipId: number;

        /** EquipMsg level. */
        public level: number;

        /** EquipMsg isWear. */
        public isWear: boolean;

        /** EquipMsg latticeId. */
        public latticeId: number;

        /** EquipMsg attributeId. */
        public attributeId: string;

        /** EquipMsg quality. */
        public quality: number;

        /** EquipMsg name. */
        public name: string;

        /** EquipMsg destroyNum. */
        public destroyNum: number;

        /** EquipMsg isNewEquip. */
        public isNewEquip: boolean;

        /** EquipMsg lock. */
        public lock: boolean;

        /**
         * Creates a new EquipMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipMsg instance
         */
        public static create(properties?: protocol.IEquipMsg): protocol.EquipMsg;

        /**
         * Encodes the specified EquipMsg message. Does not implicitly {@link protocol.EquipMsg.verify|verify} messages.
         * @param message EquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IEquipMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EquipMsg message, length delimited. Does not implicitly {@link protocol.EquipMsg.verify|verify} messages.
         * @param message EquipMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IEquipMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.EquipMsg;

        /**
         * Decodes an EquipMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.EquipMsg;

        /**
         * Verifies an EquipMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.EquipMsg;

        /**
         * Creates a plain object from an EquipMsg message. Also converts values to other types if specified.
         * @param message EquipMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.EquipMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SkillCdListMsg. */
    interface ISkillCdListMsg {

        /** SkillCdListMsg list */
        list?: (protocol.ISkillCdMsg[]|null);
    }

    /** Represents a SkillCdListMsg. */
    class SkillCdListMsg implements ISkillCdListMsg {

        /**
         * Constructs a new SkillCdListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISkillCdListMsg);

        /** SkillCdListMsg list. */
        public list: protocol.ISkillCdMsg[];

        /**
         * Creates a new SkillCdListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillCdListMsg instance
         */
        public static create(properties?: protocol.ISkillCdListMsg): protocol.SkillCdListMsg;

        /**
         * Encodes the specified SkillCdListMsg message. Does not implicitly {@link protocol.SkillCdListMsg.verify|verify} messages.
         * @param message SkillCdListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISkillCdListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillCdListMsg message, length delimited. Does not implicitly {@link protocol.SkillCdListMsg.verify|verify} messages.
         * @param message SkillCdListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISkillCdListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillCdListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillCdListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SkillCdListMsg;

        /**
         * Decodes a SkillCdListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillCdListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SkillCdListMsg;

        /**
         * Verifies a SkillCdListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillCdListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillCdListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SkillCdListMsg;

        /**
         * Creates a plain object from a SkillCdListMsg message. Also converts values to other types if specified.
         * @param message SkillCdListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SkillCdListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillCdListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SkillCdMsg. */
    interface ISkillCdMsg {

        /** SkillCdMsg skillId */
        skillId: number;

        /** SkillCdMsg endTime */
        endTime: string;

        /** SkillCdMsg effectEndTime */
        effectEndTime?: (string|null);
    }

    /** Represents a SkillCdMsg. */
    class SkillCdMsg implements ISkillCdMsg {

        /**
         * Constructs a new SkillCdMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISkillCdMsg);

        /** SkillCdMsg skillId. */
        public skillId: number;

        /** SkillCdMsg endTime. */
        public endTime: string;

        /** SkillCdMsg effectEndTime. */
        public effectEndTime: string;

        /**
         * Creates a new SkillCdMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkillCdMsg instance
         */
        public static create(properties?: protocol.ISkillCdMsg): protocol.SkillCdMsg;

        /**
         * Encodes the specified SkillCdMsg message. Does not implicitly {@link protocol.SkillCdMsg.verify|verify} messages.
         * @param message SkillCdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISkillCdMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SkillCdMsg message, length delimited. Does not implicitly {@link protocol.SkillCdMsg.verify|verify} messages.
         * @param message SkillCdMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISkillCdMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SkillCdMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkillCdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.SkillCdMsg;

        /**
         * Decodes a SkillCdMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkillCdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.SkillCdMsg;

        /**
         * Verifies a SkillCdMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkillCdMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkillCdMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SkillCdMsg;

        /**
         * Creates a plain object from a SkillCdMsg message. Also converts values to other types if specified.
         * @param message SkillCdMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SkillCdMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkillCdMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryTimelapseListMsg. */
    interface IQueryTimelapseListMsg {

        /** QueryTimelapseListMsg list */
        list?: (protocol.IQueryTimelapse[]|null);
    }

    /** Represents a QueryTimelapseListMsg. */
    class QueryTimelapseListMsg implements IQueryTimelapseListMsg {

        /**
         * Constructs a new QueryTimelapseListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQueryTimelapseListMsg);

        /** QueryTimelapseListMsg list. */
        public list: protocol.IQueryTimelapse[];

        /**
         * Creates a new QueryTimelapseListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTimelapseListMsg instance
         */
        public static create(properties?: protocol.IQueryTimelapseListMsg): protocol.QueryTimelapseListMsg;

        /**
         * Encodes the specified QueryTimelapseListMsg message. Does not implicitly {@link protocol.QueryTimelapseListMsg.verify|verify} messages.
         * @param message QueryTimelapseListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQueryTimelapseListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryTimelapseListMsg message, length delimited. Does not implicitly {@link protocol.QueryTimelapseListMsg.verify|verify} messages.
         * @param message QueryTimelapseListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQueryTimelapseListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryTimelapseListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTimelapseListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.QueryTimelapseListMsg;

        /**
         * Decodes a QueryTimelapseListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTimelapseListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.QueryTimelapseListMsg;

        /**
         * Verifies a QueryTimelapseListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTimelapseListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTimelapseListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.QueryTimelapseListMsg;

        /**
         * Creates a plain object from a QueryTimelapseListMsg message. Also converts values to other types if specified.
         * @param message QueryTimelapseListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QueryTimelapseListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTimelapseListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryTimelapse. */
    interface IQueryTimelapse {

        /** QueryTimelapse buyId */
        buyId: number;

        /** QueryTimelapse goldNum */
        goldNum: string;
    }

    /** Represents a QueryTimelapse. */
    class QueryTimelapse implements IQueryTimelapse {

        /**
         * Constructs a new QueryTimelapse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IQueryTimelapse);

        /** QueryTimelapse buyId. */
        public buyId: number;

        /** QueryTimelapse goldNum. */
        public goldNum: string;

        /**
         * Creates a new QueryTimelapse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryTimelapse instance
         */
        public static create(properties?: protocol.IQueryTimelapse): protocol.QueryTimelapse;

        /**
         * Encodes the specified QueryTimelapse message. Does not implicitly {@link protocol.QueryTimelapse.verify|verify} messages.
         * @param message QueryTimelapse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IQueryTimelapse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryTimelapse message, length delimited. Does not implicitly {@link protocol.QueryTimelapse.verify|verify} messages.
         * @param message QueryTimelapse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IQueryTimelapse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryTimelapse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryTimelapse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.QueryTimelapse;

        /**
         * Decodes a QueryTimelapse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryTimelapse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.QueryTimelapse;

        /**
         * Verifies a QueryTimelapse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryTimelapse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryTimelapse
         */
        public static fromObject(object: { [k: string]: any }): protocol.QueryTimelapse;

        /**
         * Creates a plain object from a QueryTimelapse message. Also converts values to other types if specified.
         * @param message QueryTimelapse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.QueryTimelapse, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryTimelapse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankMsg. */
    interface IRankMsg {

        /** RankMsg playerList */
        playerList?: (protocol.IPlayerMsg[]|null);

        /** RankMsg awardList */
        awardList?: (number[]|null);

        /** RankMsg overNum */
        overNum: number;
    }

    /** Represents a RankMsg. */
    class RankMsg implements IRankMsg {

        /**
         * Constructs a new RankMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRankMsg);

        /** RankMsg playerList. */
        public playerList: protocol.IPlayerMsg[];

        /** RankMsg awardList. */
        public awardList: number[];

        /** RankMsg overNum. */
        public overNum: number;

        /**
         * Creates a new RankMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankMsg instance
         */
        public static create(properties?: protocol.IRankMsg): protocol.RankMsg;

        /**
         * Encodes the specified RankMsg message. Does not implicitly {@link protocol.RankMsg.verify|verify} messages.
         * @param message RankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankMsg message, length delimited. Does not implicitly {@link protocol.RankMsg.verify|verify} messages.
         * @param message RankMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRankMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.RankMsg;

        /**
         * Decodes a RankMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.RankMsg;

        /**
         * Verifies a RankMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.RankMsg;

        /**
         * Creates a plain object from a RankMsg message. Also converts values to other types if specified.
         * @param message RankMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RankMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerMsg. */
    interface IPlayerMsg {

        /** PlayerMsg playerId */
        playerId: number;

        /** PlayerMsg missionId */
        missionId: number;

        /** PlayerMsg nickName */
        nickName: string;

        /** PlayerMsg headPic */
        headPic: string;
    }

    /** Represents a PlayerMsg. */
    class PlayerMsg implements IPlayerMsg {

        /**
         * Constructs a new PlayerMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPlayerMsg);

        /** PlayerMsg playerId. */
        public playerId: number;

        /** PlayerMsg missionId. */
        public missionId: number;

        /** PlayerMsg nickName. */
        public nickName: string;

        /** PlayerMsg headPic. */
        public headPic: string;

        /**
         * Creates a new PlayerMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMsg instance
         */
        public static create(properties?: protocol.IPlayerMsg): protocol.PlayerMsg;

        /**
         * Encodes the specified PlayerMsg message. Does not implicitly {@link protocol.PlayerMsg.verify|verify} messages.
         * @param message PlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPlayerMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerMsg message, length delimited. Does not implicitly {@link protocol.PlayerMsg.verify|verify} messages.
         * @param message PlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPlayerMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.PlayerMsg;

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.PlayerMsg;

        /**
         * Verifies a PlayerMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PlayerMsg;

        /**
         * Creates a plain object from a PlayerMsg message. Also converts values to other types if specified.
         * @param message PlayerMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PlayerMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RiskDataMsg. */
    interface IRiskDataMsg {

        /** RiskDataMsg darkRitualNum */
        darkRitualNum: number;

        /** RiskDataMsg totalClickNum */
        totalClickNum: string;

        /** RiskDataMsg secondClickNum */
        secondClickNum: number;

        /** RiskDataMsg totalCriticalClicks */
        totalCriticalClicks: string;

        /** RiskDataMsg secondCriticalClicks */
        secondCriticalClicks: number;

        /** RiskDataMsg totalGold */
        totalGold: string;

        /** RiskDataMsg heroSoulsTotalSpend */
        heroSoulsTotalSpend: string;

        /** RiskDataMsg killMonster */
        killMonster: number;

        /** RiskDataMsg killBoss */
        killBoss: number;

        /** RiskDataMsg killBoxMonster */
        killBoxMonster: number;

        /** RiskDataMsg rebirthNum */
        rebirthNum: number;

        /** RiskDataMsg mercenaryQuality */
        mercenaryQuality: number;

        /** RiskDataMsg mercenaryLevel */
        mercenaryLevel: number;

        /** RiskDataMsg mercenaryTotalNum */
        mercenaryTotalNum: number;

        /** RiskDataMsg mercenaryReviveNum */
        mercenaryReviveNum: number;

        /** RiskDataMsg diamondTaskNum */
        diamondTaskNum: number;

        /** RiskDataMsg heroSoulsTaskNum */
        heroSoulsTaskNum: number;

        /** RiskDataMsg equipTaskNum */
        equipTaskNum: number;

        /** RiskDataMsg goldTaskNum */
        goldTaskNum: number;

        /** RiskDataMsg skillTaskNum */
        skillTaskNum: number;

        /** RiskDataMsg missionMaxNum */
        missionMaxNum: number;

        /** RiskDataMsg darkRitualTotalNum */
        darkRitualTotalNum: number;

        /** RiskDataMsg equipTotalNum */
        equipTotalNum: number;

        /** RiskDataMsg TotalOnlineTime */
        TotalOnlineTime: number;
    }

    /** Represents a RiskDataMsg. */
    class RiskDataMsg implements IRiskDataMsg {

        /**
         * Constructs a new RiskDataMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRiskDataMsg);

        /** RiskDataMsg darkRitualNum. */
        public darkRitualNum: number;

        /** RiskDataMsg totalClickNum. */
        public totalClickNum: string;

        /** RiskDataMsg secondClickNum. */
        public secondClickNum: number;

        /** RiskDataMsg totalCriticalClicks. */
        public totalCriticalClicks: string;

        /** RiskDataMsg secondCriticalClicks. */
        public secondCriticalClicks: number;

        /** RiskDataMsg totalGold. */
        public totalGold: string;

        /** RiskDataMsg heroSoulsTotalSpend. */
        public heroSoulsTotalSpend: string;

        /** RiskDataMsg killMonster. */
        public killMonster: number;

        /** RiskDataMsg killBoss. */
        public killBoss: number;

        /** RiskDataMsg killBoxMonster. */
        public killBoxMonster: number;

        /** RiskDataMsg rebirthNum. */
        public rebirthNum: number;

        /** RiskDataMsg mercenaryQuality. */
        public mercenaryQuality: number;

        /** RiskDataMsg mercenaryLevel. */
        public mercenaryLevel: number;

        /** RiskDataMsg mercenaryTotalNum. */
        public mercenaryTotalNum: number;

        /** RiskDataMsg mercenaryReviveNum. */
        public mercenaryReviveNum: number;

        /** RiskDataMsg diamondTaskNum. */
        public diamondTaskNum: number;

        /** RiskDataMsg heroSoulsTaskNum. */
        public heroSoulsTaskNum: number;

        /** RiskDataMsg equipTaskNum. */
        public equipTaskNum: number;

        /** RiskDataMsg goldTaskNum. */
        public goldTaskNum: number;

        /** RiskDataMsg skillTaskNum. */
        public skillTaskNum: number;

        /** RiskDataMsg missionMaxNum. */
        public missionMaxNum: number;

        /** RiskDataMsg darkRitualTotalNum. */
        public darkRitualTotalNum: number;

        /** RiskDataMsg equipTotalNum. */
        public equipTotalNum: number;

        /** RiskDataMsg TotalOnlineTime. */
        public TotalOnlineTime: number;

        /**
         * Creates a new RiskDataMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RiskDataMsg instance
         */
        public static create(properties?: protocol.IRiskDataMsg): protocol.RiskDataMsg;

        /**
         * Encodes the specified RiskDataMsg message. Does not implicitly {@link protocol.RiskDataMsg.verify|verify} messages.
         * @param message RiskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRiskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RiskDataMsg message, length delimited. Does not implicitly {@link protocol.RiskDataMsg.verify|verify} messages.
         * @param message RiskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRiskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RiskDataMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RiskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.RiskDataMsg;

        /**
         * Decodes a RiskDataMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RiskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.RiskDataMsg;

        /**
         * Verifies a RiskDataMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RiskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RiskDataMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.RiskDataMsg;

        /**
         * Creates a plain object from a RiskDataMsg message. Also converts values to other types if specified.
         * @param message RiskDataMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RiskDataMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RiskDataMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RebirthDataListMsg. */
    interface IRebirthDataListMsg {

        /** RebirthDataListMsg list */
        list?: (protocol.IRebirthDataMsg[]|null);
    }

    /** Represents a RebirthDataListMsg. */
    class RebirthDataListMsg implements IRebirthDataListMsg {

        /**
         * Constructs a new RebirthDataListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRebirthDataListMsg);

        /** RebirthDataListMsg list. */
        public list: protocol.IRebirthDataMsg[];

        /**
         * Creates a new RebirthDataListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RebirthDataListMsg instance
         */
        public static create(properties?: protocol.IRebirthDataListMsg): protocol.RebirthDataListMsg;

        /**
         * Encodes the specified RebirthDataListMsg message. Does not implicitly {@link protocol.RebirthDataListMsg.verify|verify} messages.
         * @param message RebirthDataListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRebirthDataListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RebirthDataListMsg message, length delimited. Does not implicitly {@link protocol.RebirthDataListMsg.verify|verify} messages.
         * @param message RebirthDataListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRebirthDataListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RebirthDataListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RebirthDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.RebirthDataListMsg;

        /**
         * Decodes a RebirthDataListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RebirthDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.RebirthDataListMsg;

        /**
         * Verifies a RebirthDataListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RebirthDataListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RebirthDataListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.RebirthDataListMsg;

        /**
         * Creates a plain object from a RebirthDataListMsg message. Also converts values to other types if specified.
         * @param message RebirthDataListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RebirthDataListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RebirthDataListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RebirthDataMsg. */
    interface IRebirthDataMsg {

        /** RebirthDataMsg Number */
        Number: number;

        /** RebirthDataMsg GameTime */
        GameTime: number;

        /** RebirthDataMsg MissionNum */
        MissionNum: number;

        /** RebirthDataMsg HeroSouls */
        HeroSouls: string;
    }

    /** Represents a RebirthDataMsg. */
    class RebirthDataMsg implements IRebirthDataMsg {

        /**
         * Constructs a new RebirthDataMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRebirthDataMsg);

        /** RebirthDataMsg Number. */
        public Number: number;

        /** RebirthDataMsg GameTime. */
        public GameTime: number;

        /** RebirthDataMsg MissionNum. */
        public MissionNum: number;

        /** RebirthDataMsg HeroSouls. */
        public HeroSouls: string;

        /**
         * Creates a new RebirthDataMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RebirthDataMsg instance
         */
        public static create(properties?: protocol.IRebirthDataMsg): protocol.RebirthDataMsg;

        /**
         * Encodes the specified RebirthDataMsg message. Does not implicitly {@link protocol.RebirthDataMsg.verify|verify} messages.
         * @param message RebirthDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRebirthDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RebirthDataMsg message, length delimited. Does not implicitly {@link protocol.RebirthDataMsg.verify|verify} messages.
         * @param message RebirthDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRebirthDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RebirthDataMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RebirthDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.RebirthDataMsg;

        /**
         * Decodes a RebirthDataMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RebirthDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.RebirthDataMsg;

        /**
         * Verifies a RebirthDataMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RebirthDataMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RebirthDataMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.RebirthDataMsg;

        /**
         * Creates a plain object from a RebirthDataMsg message. Also converts values to other types if specified.
         * @param message RebirthDataMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RebirthDataMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RebirthDataMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroSkinListMsg. */
    interface IHeroSkinListMsg {

        /** HeroSkinListMsg list */
        list?: (protocol.IHeroSkinMsg[]|null);
    }

    /** Represents a HeroSkinListMsg. */
    class HeroSkinListMsg implements IHeroSkinListMsg {

        /**
         * Constructs a new HeroSkinListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroSkinListMsg);

        /** HeroSkinListMsg list. */
        public list: protocol.IHeroSkinMsg[];

        /**
         * Creates a new HeroSkinListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroSkinListMsg instance
         */
        public static create(properties?: protocol.IHeroSkinListMsg): protocol.HeroSkinListMsg;

        /**
         * Encodes the specified HeroSkinListMsg message. Does not implicitly {@link protocol.HeroSkinListMsg.verify|verify} messages.
         * @param message HeroSkinListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroSkinListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroSkinListMsg message, length delimited. Does not implicitly {@link protocol.HeroSkinListMsg.verify|verify} messages.
         * @param message HeroSkinListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroSkinListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroSkinListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroSkinListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroSkinListMsg;

        /**
         * Decodes a HeroSkinListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroSkinListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroSkinListMsg;

        /**
         * Verifies a HeroSkinListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroSkinListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroSkinListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroSkinListMsg;

        /**
         * Creates a plain object from a HeroSkinListMsg message. Also converts values to other types if specified.
         * @param message HeroSkinListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroSkinListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroSkinListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeroSkinMsg. */
    interface IHeroSkinMsg {

        /** HeroSkinMsg id */
        id: number;

        /** HeroSkinMsg num */
        num: number;

        /** HeroSkinMsg state */
        state: boolean;

        /** HeroSkinMsg isNewSkin */
        isNewSkin: boolean;
    }

    /** Represents a HeroSkinMsg. */
    class HeroSkinMsg implements IHeroSkinMsg {

        /**
         * Constructs a new HeroSkinMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeroSkinMsg);

        /** HeroSkinMsg id. */
        public id: number;

        /** HeroSkinMsg num. */
        public num: number;

        /** HeroSkinMsg state. */
        public state: boolean;

        /** HeroSkinMsg isNewSkin. */
        public isNewSkin: boolean;

        /**
         * Creates a new HeroSkinMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeroSkinMsg instance
         */
        public static create(properties?: protocol.IHeroSkinMsg): protocol.HeroSkinMsg;

        /**
         * Encodes the specified HeroSkinMsg message. Does not implicitly {@link protocol.HeroSkinMsg.verify|verify} messages.
         * @param message HeroSkinMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeroSkinMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeroSkinMsg message, length delimited. Does not implicitly {@link protocol.HeroSkinMsg.verify|verify} messages.
         * @param message HeroSkinMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeroSkinMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeroSkinMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeroSkinMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.HeroSkinMsg;

        /**
         * Decodes a HeroSkinMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeroSkinMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.HeroSkinMsg;

        /**
         * Verifies a HeroSkinMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeroSkinMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeroSkinMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeroSkinMsg;

        /**
         * Creates a plain object from a HeroSkinMsg message. Also converts values to other types if specified.
         * @param message HeroSkinMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeroSkinMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeroSkinMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LotteryStateMsg. */
    interface ILotteryStateMsg {

        /** LotteryStateMsg adEquipNum */
        adEquipNum: number;

        /** LotteryStateMsg adSkinNum */
        adSkinNum: number;

        /** LotteryStateMsg adMercenaryNum */
        adMercenaryNum: number;

        /** LotteryStateMsg freeEquipNum */
        freeEquipNum: number;

        /** LotteryStateMsg freeSkinNum */
        freeSkinNum: number;

        /** LotteryStateMsg freeMercenaryNum */
        freeMercenaryNum: number;

        /** LotteryStateMsg halfEquipNum */
        halfEquipNum: number;

        /** LotteryStateMsg halfSkinNum */
        halfSkinNum: number;

        /** LotteryStateMsg halfMercenaryNum */
        halfMercenaryNum: number;
    }

    /** Represents a LotteryStateMsg. */
    class LotteryStateMsg implements ILotteryStateMsg {

        /**
         * Constructs a new LotteryStateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILotteryStateMsg);

        /** LotteryStateMsg adEquipNum. */
        public adEquipNum: number;

        /** LotteryStateMsg adSkinNum. */
        public adSkinNum: number;

        /** LotteryStateMsg adMercenaryNum. */
        public adMercenaryNum: number;

        /** LotteryStateMsg freeEquipNum. */
        public freeEquipNum: number;

        /** LotteryStateMsg freeSkinNum. */
        public freeSkinNum: number;

        /** LotteryStateMsg freeMercenaryNum. */
        public freeMercenaryNum: number;

        /** LotteryStateMsg halfEquipNum. */
        public halfEquipNum: number;

        /** LotteryStateMsg halfSkinNum. */
        public halfSkinNum: number;

        /** LotteryStateMsg halfMercenaryNum. */
        public halfMercenaryNum: number;

        /**
         * Creates a new LotteryStateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LotteryStateMsg instance
         */
        public static create(properties?: protocol.ILotteryStateMsg): protocol.LotteryStateMsg;

        /**
         * Encodes the specified LotteryStateMsg message. Does not implicitly {@link protocol.LotteryStateMsg.verify|verify} messages.
         * @param message LotteryStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILotteryStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LotteryStateMsg message, length delimited. Does not implicitly {@link protocol.LotteryStateMsg.verify|verify} messages.
         * @param message LotteryStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILotteryStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LotteryStateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LotteryStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.LotteryStateMsg;

        /**
         * Decodes a LotteryStateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LotteryStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.LotteryStateMsg;

        /**
         * Verifies a LotteryStateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LotteryStateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LotteryStateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.LotteryStateMsg;

        /**
         * Creates a plain object from a LotteryStateMsg message. Also converts values to other types if specified.
         * @param message LotteryStateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LotteryStateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LotteryStateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityItemStateMsg. */
    interface IActivityItemStateMsg {

        /** ActivityItemStateMsg activityId */
        activityId: number;

        /** ActivityItemStateMsg receiveState */
        receiveState: string;
    }

    /** Represents an ActivityItemStateMsg. */
    class ActivityItemStateMsg implements IActivityItemStateMsg {

        /**
         * Constructs a new ActivityItemStateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IActivityItemStateMsg);

        /** ActivityItemStateMsg activityId. */
        public activityId: number;

        /** ActivityItemStateMsg receiveState. */
        public receiveState: string;

        /**
         * Creates a new ActivityItemStateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityItemStateMsg instance
         */
        public static create(properties?: protocol.IActivityItemStateMsg): protocol.ActivityItemStateMsg;

        /**
         * Encodes the specified ActivityItemStateMsg message. Does not implicitly {@link protocol.ActivityItemStateMsg.verify|verify} messages.
         * @param message ActivityItemStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IActivityItemStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActivityItemStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityItemStateMsg.verify|verify} messages.
         * @param message ActivityItemStateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IActivityItemStateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActivityItemStateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityItemStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.ActivityItemStateMsg;

        /**
         * Decodes an ActivityItemStateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityItemStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.ActivityItemStateMsg;

        /**
         * Verifies an ActivityItemStateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityItemStateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityItemStateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ActivityItemStateMsg;

        /**
         * Creates a plain object from an ActivityItemStateMsg message. Also converts values to other types if specified.
         * @param message ActivityItemStateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ActivityItemStateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityItemStateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeepLotteryListMsg. */
    interface IKeepLotteryListMsg {

        /** KeepLotteryListMsg keepLotteryList */
        keepLotteryList?: (protocol.IKeepLotteryMsg[]|null);
    }

    /** Represents a KeepLotteryListMsg. */
    class KeepLotteryListMsg implements IKeepLotteryListMsg {

        /**
         * Constructs a new KeepLotteryListMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IKeepLotteryListMsg);

        /** KeepLotteryListMsg keepLotteryList. */
        public keepLotteryList: protocol.IKeepLotteryMsg[];

        /**
         * Creates a new KeepLotteryListMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeepLotteryListMsg instance
         */
        public static create(properties?: protocol.IKeepLotteryListMsg): protocol.KeepLotteryListMsg;

        /**
         * Encodes the specified KeepLotteryListMsg message. Does not implicitly {@link protocol.KeepLotteryListMsg.verify|verify} messages.
         * @param message KeepLotteryListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IKeepLotteryListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KeepLotteryListMsg message, length delimited. Does not implicitly {@link protocol.KeepLotteryListMsg.verify|verify} messages.
         * @param message KeepLotteryListMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IKeepLotteryListMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KeepLotteryListMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeepLotteryListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.KeepLotteryListMsg;

        /**
         * Decodes a KeepLotteryListMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeepLotteryListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.KeepLotteryListMsg;

        /**
         * Verifies a KeepLotteryListMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeepLotteryListMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeepLotteryListMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.KeepLotteryListMsg;

        /**
         * Creates a plain object from a KeepLotteryListMsg message. Also converts values to other types if specified.
         * @param message KeepLotteryListMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.KeepLotteryListMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeepLotteryListMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeepLotteryMsg. */
    interface IKeepLotteryMsg {

        /** KeepLotteryMsg activityId */
        activityId: number;

        /** KeepLotteryMsg lotteryNum */
        lotteryNum: number;

        /** KeepLotteryMsg recievedList */
        recievedList?: (number[]|null);
    }

    /** Represents a KeepLotteryMsg. */
    class KeepLotteryMsg implements IKeepLotteryMsg {

        /**
         * Constructs a new KeepLotteryMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IKeepLotteryMsg);

        /** KeepLotteryMsg activityId. */
        public activityId: number;

        /** KeepLotteryMsg lotteryNum. */
        public lotteryNum: number;

        /** KeepLotteryMsg recievedList. */
        public recievedList: number[];

        /**
         * Creates a new KeepLotteryMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeepLotteryMsg instance
         */
        public static create(properties?: protocol.IKeepLotteryMsg): protocol.KeepLotteryMsg;

        /**
         * Encodes the specified KeepLotteryMsg message. Does not implicitly {@link protocol.KeepLotteryMsg.verify|verify} messages.
         * @param message KeepLotteryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IKeepLotteryMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified KeepLotteryMsg message, length delimited. Does not implicitly {@link protocol.KeepLotteryMsg.verify|verify} messages.
         * @param message KeepLotteryMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IKeepLotteryMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a KeepLotteryMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeepLotteryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.KeepLotteryMsg;

        /**
         * Decodes a KeepLotteryMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeepLotteryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.KeepLotteryMsg;

        /**
         * Verifies a KeepLotteryMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeepLotteryMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeepLotteryMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.KeepLotteryMsg;

        /**
         * Creates a plain object from a KeepLotteryMsg message. Also converts values to other types if specified.
         * @param message KeepLotteryMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.KeepLotteryMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeepLotteryMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskUpdateMsg. */
    interface ITaskUpdateMsg {

        /** TaskUpdateMsg taskDataList */
        taskDataList?: (protocol.ITaskDataMsg[]|null);
    }

    /** Represents a TaskUpdateMsg. */
    class TaskUpdateMsg implements ITaskUpdateMsg {

        /**
         * Constructs a new TaskUpdateMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITaskUpdateMsg);

        /** TaskUpdateMsg taskDataList. */
        public taskDataList: protocol.ITaskDataMsg[];

        /**
         * Creates a new TaskUpdateMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskUpdateMsg instance
         */
        public static create(properties?: protocol.ITaskUpdateMsg): protocol.TaskUpdateMsg;

        /**
         * Encodes the specified TaskUpdateMsg message. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @param message TaskUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITaskUpdateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskUpdateMsg message, length delimited. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @param message TaskUpdateMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITaskUpdateMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.TaskUpdateMsg;

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.TaskUpdateMsg;

        /**
         * Verifies a TaskUpdateMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskUpdateMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.TaskUpdateMsg;

        /**
         * Creates a plain object from a TaskUpdateMsg message. Also converts values to other types if specified.
         * @param message TaskUpdateMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TaskUpdateMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskUpdateMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskDataMsg. */
    interface ITaskDataMsg {

        /** TaskDataMsg taskId */
        taskId: number;

        /** TaskDataMsg isComplete */
        isComplete: boolean;

        /** TaskDataMsg process */
        process: string;
    }

    /** Represents a TaskDataMsg. */
    class TaskDataMsg implements ITaskDataMsg {

        /**
         * Constructs a new TaskDataMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITaskDataMsg);

        /** TaskDataMsg taskId. */
        public taskId: number;

        /** TaskDataMsg isComplete. */
        public isComplete: boolean;

        /** TaskDataMsg process. */
        public process: string;

        /**
         * Creates a new TaskDataMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskDataMsg instance
         */
        public static create(properties?: protocol.ITaskDataMsg): protocol.TaskDataMsg;

        /**
         * Encodes the specified TaskDataMsg message. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @param message TaskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITaskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TaskDataMsg message, length delimited. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @param message TaskDataMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITaskDataMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): protocol.TaskDataMsg;

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): protocol.TaskDataMsg;

        /**
         * Verifies a TaskDataMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskDataMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.TaskDataMsg;

        /**
         * Creates a plain object from a TaskDataMsg message. Also converts values to other types if specified.
         * @param message TaskDataMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TaskDataMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskDataMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
