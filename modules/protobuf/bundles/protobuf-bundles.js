var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    protocol.AchievementListMsg = (function() {

        /**
         * Properties of an AchievementListMsg.
         * @memberof protocol
         * @interface IAchievementListMsg
         * @property {Array.<protocol.IAchievementMsg>|null} [achievementMsg] AchievementListMsg achievementMsg
         */

        /**
         * Constructs a new AchievementListMsg.
         * @memberof protocol
         * @classdesc Represents an AchievementListMsg.
         * @implements IAchievementListMsg
         * @constructor
         * @param {protocol.IAchievementListMsg=} [properties] Properties to set
         */
        function AchievementListMsg(properties) {
            this.achievementMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AchievementListMsg achievementMsg.
         * @member {Array.<protocol.IAchievementMsg>} achievementMsg
         * @memberof protocol.AchievementListMsg
         * @instance
         */
        AchievementListMsg.prototype.achievementMsg = $util.emptyArray;

        /**
         * Creates a new AchievementListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {protocol.IAchievementListMsg=} [properties] Properties to set
         * @returns {protocol.AchievementListMsg} AchievementListMsg instance
         */
        AchievementListMsg.create = function create(properties) {
            return new AchievementListMsg(properties);
        };

        /**
         * Encodes the specified AchievementListMsg message. Does not implicitly {@link protocol.AchievementListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {protocol.IAchievementListMsg} message AchievementListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AchievementListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.achievementMsg != null && message.achievementMsg.length)
                for (var i = 0; i < message.achievementMsg.length; ++i)
                    $root.protocol.AchievementMsg.encode(message.achievementMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AchievementListMsg message, length delimited. Does not implicitly {@link protocol.AchievementListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {protocol.IAchievementListMsg} message AchievementListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AchievementListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AchievementListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AchievementListMsg} AchievementListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AchievementListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AchievementListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.achievementMsg && message.achievementMsg.length))
                        message.achievementMsg = [];
                    message.achievementMsg.push($root.protocol.AchievementMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AchievementListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AchievementListMsg} AchievementListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AchievementListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AchievementListMsg message.
         * @function verify
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AchievementListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.achievementMsg != null && message.hasOwnProperty("achievementMsg")) {
                if (!Array.isArray(message.achievementMsg))
                    return "achievementMsg: array expected";
                for (var i = 0; i < message.achievementMsg.length; ++i) {
                    var error = $root.protocol.AchievementMsg.verify(message.achievementMsg[i]);
                    if (error)
                        return "achievementMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AchievementListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AchievementListMsg} AchievementListMsg
         */
        AchievementListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AchievementListMsg)
                return object;
            var message = new $root.protocol.AchievementListMsg();
            if (object.achievementMsg) {
                if (!Array.isArray(object.achievementMsg))
                    throw TypeError(".protocol.AchievementListMsg.achievementMsg: array expected");
                message.achievementMsg = [];
                for (var i = 0; i < object.achievementMsg.length; ++i) {
                    if (typeof object.achievementMsg[i] !== "object")
                        throw TypeError(".protocol.AchievementListMsg.achievementMsg: object expected");
                    message.achievementMsg[i] = $root.protocol.AchievementMsg.fromObject(object.achievementMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AchievementListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AchievementListMsg
         * @static
         * @param {protocol.AchievementListMsg} message AchievementListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AchievementListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.achievementMsg = [];
            if (message.achievementMsg && message.achievementMsg.length) {
                object.achievementMsg = [];
                for (var j = 0; j < message.achievementMsg.length; ++j)
                    object.achievementMsg[j] = $root.protocol.AchievementMsg.toObject(message.achievementMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this AchievementListMsg to JSON.
         * @function toJSON
         * @memberof protocol.AchievementListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AchievementListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AchievementListMsg;
    })();

    protocol.AchievementMsg = (function() {

        /**
         * Properties of an AchievementMsg.
         * @memberof protocol
         * @interface IAchievementMsg
         * @property {number} achievement AchievementMsg achievement
         */

        /**
         * Constructs a new AchievementMsg.
         * @memberof protocol
         * @classdesc Represents an AchievementMsg.
         * @implements IAchievementMsg
         * @constructor
         * @param {protocol.IAchievementMsg=} [properties] Properties to set
         */
        function AchievementMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AchievementMsg achievement.
         * @member {number} achievement
         * @memberof protocol.AchievementMsg
         * @instance
         */
        AchievementMsg.prototype.achievement = 0;

        /**
         * Creates a new AchievementMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AchievementMsg
         * @static
         * @param {protocol.IAchievementMsg=} [properties] Properties to set
         * @returns {protocol.AchievementMsg} AchievementMsg instance
         */
        AchievementMsg.create = function create(properties) {
            return new AchievementMsg(properties);
        };

        /**
         * Encodes the specified AchievementMsg message. Does not implicitly {@link protocol.AchievementMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AchievementMsg
         * @static
         * @param {protocol.IAchievementMsg} message AchievementMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AchievementMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.achievement);
            return writer;
        };

        /**
         * Encodes the specified AchievementMsg message, length delimited. Does not implicitly {@link protocol.AchievementMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AchievementMsg
         * @static
         * @param {protocol.IAchievementMsg} message AchievementMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AchievementMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AchievementMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AchievementMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AchievementMsg} AchievementMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AchievementMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AchievementMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.achievement = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("achievement"))
                throw $util.ProtocolError("missing required 'achievement'", { instance: message });
            return message;
        };

        /**
         * Decodes an AchievementMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AchievementMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AchievementMsg} AchievementMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AchievementMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AchievementMsg message.
         * @function verify
         * @memberof protocol.AchievementMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AchievementMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.achievement))
                return "achievement: integer expected";
            return null;
        };

        /**
         * Creates an AchievementMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AchievementMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AchievementMsg} AchievementMsg
         */
        AchievementMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AchievementMsg)
                return object;
            var message = new $root.protocol.AchievementMsg();
            if (object.achievement != null)
                message.achievement = object.achievement | 0;
            return message;
        };

        /**
         * Creates a plain object from an AchievementMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AchievementMsg
         * @static
         * @param {protocol.AchievementMsg} message AchievementMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AchievementMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.achievement = 0;
            if (message.achievement != null && message.hasOwnProperty("achievement"))
                object.achievement = message.achievement;
            return object;
        };

        /**
         * Converts this AchievementMsg to JSON.
         * @function toJSON
         * @memberof protocol.AchievementMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AchievementMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AchievementMsg;
    })();

    protocol.ActivityOpenListMsg = (function() {

        /**
         * Properties of an ActivityOpenListMsg.
         * @memberof protocol
         * @interface IActivityOpenListMsg
         * @property {Array.<protocol.IActivityOpenMsg>|null} [list] ActivityOpenListMsg list
         * @property {number} loginDayNum ActivityOpenListMsg loginDayNum
         */

        /**
         * Constructs a new ActivityOpenListMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityOpenListMsg.
         * @implements IActivityOpenListMsg
         * @constructor
         * @param {protocol.IActivityOpenListMsg=} [properties] Properties to set
         */
        function ActivityOpenListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityOpenListMsg list.
         * @member {Array.<protocol.IActivityOpenMsg>} list
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         */
        ActivityOpenListMsg.prototype.list = $util.emptyArray;

        /**
         * ActivityOpenListMsg loginDayNum.
         * @member {number} loginDayNum
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         */
        ActivityOpenListMsg.prototype.loginDayNum = 0;

        /**
         * Creates a new ActivityOpenListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg=} [properties] Properties to set
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg instance
         */
        ActivityOpenListMsg.create = function create(properties) {
            return new ActivityOpenListMsg(properties);
        };

        /**
         * Encodes the specified ActivityOpenListMsg message. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg} message ActivityOpenListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ActivityOpenMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.loginDayNum);
            return writer;
        };

        /**
         * Encodes the specified ActivityOpenListMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.IActivityOpenListMsg} message ActivityOpenListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityOpenListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ActivityOpenMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.loginDayNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("loginDayNum"))
                throw $util.ProtocolError("missing required 'loginDayNum'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityOpenListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityOpenListMsg message.
         * @function verify
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityOpenListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ActivityOpenMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (!$util.isInteger(message.loginDayNum))
                return "loginDayNum: integer expected";
            return null;
        };

        /**
         * Creates an ActivityOpenListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityOpenListMsg} ActivityOpenListMsg
         */
        ActivityOpenListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityOpenListMsg)
                return object;
            var message = new $root.protocol.ActivityOpenListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ActivityOpenListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ActivityOpenListMsg.list: object expected");
                    message.list[i] = $root.protocol.ActivityOpenMsg.fromObject(object.list[i]);
                }
            }
            if (object.loginDayNum != null)
                message.loginDayNum = object.loginDayNum | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityOpenListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityOpenListMsg
         * @static
         * @param {protocol.ActivityOpenListMsg} message ActivityOpenListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityOpenListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.loginDayNum = 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ActivityOpenMsg.toObject(message.list[j], options);
            }
            if (message.loginDayNum != null && message.hasOwnProperty("loginDayNum"))
                object.loginDayNum = message.loginDayNum;
            return object;
        };

        /**
         * Converts this ActivityOpenListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityOpenListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityOpenListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityOpenListMsg;
    })();

    protocol.ActivityOpenMsg = (function() {

        /**
         * Properties of an ActivityOpenMsg.
         * @memberof protocol
         * @interface IActivityOpenMsg
         * @property {number} activityId ActivityOpenMsg activityId
         * @property {string} endTime ActivityOpenMsg endTime
         */

        /**
         * Constructs a new ActivityOpenMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityOpenMsg.
         * @implements IActivityOpenMsg
         * @constructor
         * @param {protocol.IActivityOpenMsg=} [properties] Properties to set
         */
        function ActivityOpenMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityOpenMsg activityId.
         * @member {number} activityId
         * @memberof protocol.ActivityOpenMsg
         * @instance
         */
        ActivityOpenMsg.prototype.activityId = 0;

        /**
         * ActivityOpenMsg endTime.
         * @member {string} endTime
         * @memberof protocol.ActivityOpenMsg
         * @instance
         */
        ActivityOpenMsg.prototype.endTime = "";

        /**
         * Creates a new ActivityOpenMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg=} [properties] Properties to set
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg instance
         */
        ActivityOpenMsg.create = function create(properties) {
            return new ActivityOpenMsg(properties);
        };

        /**
         * Encodes the specified ActivityOpenMsg message. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg} message ActivityOpenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.endTime);
            return writer;
        };

        /**
         * Encodes the specified ActivityOpenMsg message, length delimited. Does not implicitly {@link protocol.ActivityOpenMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.IActivityOpenMsg} message ActivityOpenMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityOpenMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityOpenMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.endTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("endTime"))
                throw $util.ProtocolError("missing required 'endTime'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityOpenMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityOpenMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityOpenMsg message.
         * @function verify
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityOpenMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isString(message.endTime))
                return "endTime: string expected";
            return null;
        };

        /**
         * Creates an ActivityOpenMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityOpenMsg} ActivityOpenMsg
         */
        ActivityOpenMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityOpenMsg)
                return object;
            var message = new $root.protocol.ActivityOpenMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.endTime != null)
                message.endTime = String(object.endTime);
            return message;
        };

        /**
         * Creates a plain object from an ActivityOpenMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityOpenMsg
         * @static
         * @param {protocol.ActivityOpenMsg} message ActivityOpenMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityOpenMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activityId = 0;
                object.endTime = "";
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            return object;
        };

        /**
         * Converts this ActivityOpenMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityOpenMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityOpenMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityOpenMsg;
    })();

    protocol.PlayerSignMsg = (function() {

        /**
         * Properties of a PlayerSignMsg.
         * @memberof protocol
         * @interface IPlayerSignMsg
         * @property {boolean} signState PlayerSignMsg signState
         * @property {number} signNum PlayerSignMsg signNum
         * @property {number} absenceNum PlayerSignMsg absenceNum
         */

        /**
         * Constructs a new PlayerSignMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerSignMsg.
         * @implements IPlayerSignMsg
         * @constructor
         * @param {protocol.IPlayerSignMsg=} [properties] Properties to set
         */
        function PlayerSignMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSignMsg signState.
         * @member {boolean} signState
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.signState = false;

        /**
         * PlayerSignMsg signNum.
         * @member {number} signNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.signNum = 0;

        /**
         * PlayerSignMsg absenceNum.
         * @member {number} absenceNum
         * @memberof protocol.PlayerSignMsg
         * @instance
         */
        PlayerSignMsg.prototype.absenceNum = 0;

        /**
         * Creates a new PlayerSignMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg=} [properties] Properties to set
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg instance
         */
        PlayerSignMsg.create = function create(properties) {
            return new PlayerSignMsg(properties);
        };

        /**
         * Encodes the specified PlayerSignMsg message. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg} message PlayerSignMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSignMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.signState);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.signNum);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.absenceNum);
            return writer;
        };

        /**
         * Encodes the specified PlayerSignMsg message, length delimited. Does not implicitly {@link protocol.PlayerSignMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.IPlayerSignMsg} message PlayerSignMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSignMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSignMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerSignMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.signState = reader.bool();
                    break;
                case 2:
                    message.signNum = reader.int32();
                    break;
                case 3:
                    message.absenceNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("signState"))
                throw $util.ProtocolError("missing required 'signState'", { instance: message });
            if (!message.hasOwnProperty("signNum"))
                throw $util.ProtocolError("missing required 'signNum'", { instance: message });
            if (!message.hasOwnProperty("absenceNum"))
                throw $util.ProtocolError("missing required 'absenceNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerSignMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSignMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSignMsg message.
         * @function verify
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSignMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.signState !== "boolean")
                return "signState: boolean expected";
            if (!$util.isInteger(message.signNum))
                return "signNum: integer expected";
            if (!$util.isInteger(message.absenceNum))
                return "absenceNum: integer expected";
            return null;
        };

        /**
         * Creates a PlayerSignMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerSignMsg} PlayerSignMsg
         */
        PlayerSignMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerSignMsg)
                return object;
            var message = new $root.protocol.PlayerSignMsg();
            if (object.signState != null)
                message.signState = Boolean(object.signState);
            if (object.signNum != null)
                message.signNum = object.signNum | 0;
            if (object.absenceNum != null)
                message.absenceNum = object.absenceNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerSignMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerSignMsg
         * @static
         * @param {protocol.PlayerSignMsg} message PlayerSignMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSignMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.signState = false;
                object.signNum = 0;
                object.absenceNum = 0;
            }
            if (message.signState != null && message.hasOwnProperty("signState"))
                object.signState = message.signState;
            if (message.signNum != null && message.hasOwnProperty("signNum"))
                object.signNum = message.signNum;
            if (message.absenceNum != null && message.hasOwnProperty("absenceNum"))
                object.absenceNum = message.absenceNum;
            return object;
        };

        /**
         * Converts this PlayerSignMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerSignMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSignMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerSignMsg;
    })();

    protocol.ActivityStateListMsg = (function() {

        /**
         * Properties of an ActivityStateListMsg.
         * @memberof protocol
         * @interface IActivityStateListMsg
         * @property {Array.<protocol.IActivityStateMsg>|null} [list] ActivityStateListMsg list
         */

        /**
         * Constructs a new ActivityStateListMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityStateListMsg.
         * @implements IActivityStateListMsg
         * @constructor
         * @param {protocol.IActivityStateListMsg=} [properties] Properties to set
         */
        function ActivityStateListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityStateListMsg list.
         * @member {Array.<protocol.IActivityStateMsg>} list
         * @memberof protocol.ActivityStateListMsg
         * @instance
         */
        ActivityStateListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new ActivityStateListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg=} [properties] Properties to set
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg instance
         */
        ActivityStateListMsg.create = function create(properties) {
            return new ActivityStateListMsg(properties);
        };

        /**
         * Encodes the specified ActivityStateListMsg message. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg} message ActivityStateListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ActivityStateMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActivityStateListMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.IActivityStateListMsg} message ActivityStateListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityStateListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ActivityStateMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActivityStateListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityStateListMsg message.
         * @function verify
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityStateListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ActivityStateMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ActivityStateListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityStateListMsg} ActivityStateListMsg
         */
        ActivityStateListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityStateListMsg)
                return object;
            var message = new $root.protocol.ActivityStateListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ActivityStateListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ActivityStateListMsg.list: object expected");
                    message.list[i] = $root.protocol.ActivityStateMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivityStateListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityStateListMsg
         * @static
         * @param {protocol.ActivityStateListMsg} message ActivityStateListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityStateListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ActivityStateMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this ActivityStateListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityStateListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityStateListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityStateListMsg;
    })();

    protocol.ActivityStateMsg = (function() {

        /**
         * Properties of an ActivityStateMsg.
         * @memberof protocol
         * @interface IActivityStateMsg
         * @property {number} activityId ActivityStateMsg activityId
         * @property {number} state ActivityStateMsg state
         */

        /**
         * Constructs a new ActivityStateMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityStateMsg.
         * @implements IActivityStateMsg
         * @constructor
         * @param {protocol.IActivityStateMsg=} [properties] Properties to set
         */
        function ActivityStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityStateMsg activityId.
         * @member {number} activityId
         * @memberof protocol.ActivityStateMsg
         * @instance
         */
        ActivityStateMsg.prototype.activityId = 0;

        /**
         * ActivityStateMsg state.
         * @member {number} state
         * @memberof protocol.ActivityStateMsg
         * @instance
         */
        ActivityStateMsg.prototype.state = 0;

        /**
         * Creates a new ActivityStateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg=} [properties] Properties to set
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg instance
         */
        ActivityStateMsg.create = function create(properties) {
            return new ActivityStateMsg(properties);
        };

        /**
         * Encodes the specified ActivityStateMsg message. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg} message ActivityStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified ActivityStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.IActivityStateMsg} message ActivityStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityStateMsg message.
         * @function verify
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isInteger(message.state))
                return "state: integer expected";
            return null;
        };

        /**
         * Creates an ActivityStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityStateMsg} ActivityStateMsg
         */
        ActivityStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityStateMsg)
                return object;
            var message = new $root.protocol.ActivityStateMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from an ActivityStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityStateMsg
         * @static
         * @param {protocol.ActivityStateMsg} message ActivityStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activityId = 0;
                object.state = 0;
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this ActivityStateMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityStateMsg;
    })();

    protocol.ItemListMsg = (function() {

        /**
         * Properties of an ItemListMsg.
         * @memberof protocol
         * @interface IItemListMsg
         * @property {Array.<protocol.IItemInfoMsg>|null} [itemList] ItemListMsg itemList
         */

        /**
         * Constructs a new ItemListMsg.
         * @memberof protocol
         * @classdesc Represents an ItemListMsg.
         * @implements IItemListMsg
         * @constructor
         * @param {protocol.IItemListMsg=} [properties] Properties to set
         */
        function ItemListMsg(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemListMsg itemList.
         * @member {Array.<protocol.IItemInfoMsg>} itemList
         * @memberof protocol.ItemListMsg
         * @instance
         */
        ItemListMsg.prototype.itemList = $util.emptyArray;

        /**
         * Creates a new ItemListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg=} [properties] Properties to set
         * @returns {protocol.ItemListMsg} ItemListMsg instance
         */
        ItemListMsg.create = function create(properties) {
            return new ItemListMsg(properties);
        };

        /**
         * Encodes the specified ItemListMsg message. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.protocol.ItemInfoMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemListMsg message, length delimited. Does not implicitly {@link protocol.ItemListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.IItemListMsg} message ItemListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.protocol.ItemInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemListMsg} ItemListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemListMsg message.
         * @function verify
         * @memberof protocol.ItemListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.protocol.ItemInfoMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemListMsg} ItemListMsg
         */
        ItemListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemListMsg)
                return object;
            var message = new $root.protocol.ItemListMsg();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".protocol.ItemListMsg.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".protocol.ItemListMsg.itemList: object expected");
                    message.itemList[i] = $root.protocol.ItemInfoMsg.fromObject(object.itemList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemListMsg
         * @static
         * @param {protocol.ItemListMsg} message ItemListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.protocol.ItemInfoMsg.toObject(message.itemList[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemListMsg;
    })();

    protocol.ItemInfoMsg = (function() {

        /**
         * Properties of an ItemInfoMsg.
         * @memberof protocol
         * @interface IItemInfoMsg
         * @property {number} itemId ItemInfoMsg itemId
         * @property {string} num ItemInfoMsg num
         */

        /**
         * Constructs a new ItemInfoMsg.
         * @memberof protocol
         * @classdesc Represents an ItemInfoMsg.
         * @implements IItemInfoMsg
         * @constructor
         * @param {protocol.IItemInfoMsg=} [properties] Properties to set
         */
        function ItemInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemInfoMsg itemId.
         * @member {number} itemId
         * @memberof protocol.ItemInfoMsg
         * @instance
         */
        ItemInfoMsg.prototype.itemId = 0;

        /**
         * ItemInfoMsg num.
         * @member {string} num
         * @memberof protocol.ItemInfoMsg
         * @instance
         */
        ItemInfoMsg.prototype.num = "";

        /**
         * Creates a new ItemInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg=} [properties] Properties to set
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg instance
         */
        ItemInfoMsg.create = function create(properties) {
            return new ItemInfoMsg(properties);
        };

        /**
         * Encodes the specified ItemInfoMsg message. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg} message ItemInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.num);
            return writer;
        };

        /**
         * Encodes the specified ItemInfoMsg message, length delimited. Does not implicitly {@link protocol.ItemInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.IItemInfoMsg} message ItemInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.itemId = reader.int32();
                    break;
                case 3:
                    message.num = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemInfoMsg message.
         * @function verify
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isString(message.num))
                return "num: string expected";
            return null;
        };

        /**
         * Creates an ItemInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemInfoMsg} ItemInfoMsg
         */
        ItemInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemInfoMsg)
                return object;
            var message = new $root.protocol.ItemInfoMsg();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = String(object.num);
            return message;
        };

        /**
         * Creates a plain object from an ItemInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemInfoMsg
         * @static
         * @param {protocol.ItemInfoMsg} message ItemInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = "";
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this ItemInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemInfoMsg;
    })();

    protocol.ItemMsgCS = (function() {

        /**
         * Properties of an ItemMsgCS.
         * @memberof protocol
         * @interface IItemMsgCS
         * @property {number} itemId ItemMsgCS itemId
         * @property {string} num ItemMsgCS num
         */

        /**
         * Constructs a new ItemMsgCS.
         * @memberof protocol
         * @classdesc Represents an ItemMsgCS.
         * @implements IItemMsgCS
         * @constructor
         * @param {protocol.IItemMsgCS=} [properties] Properties to set
         */
        function ItemMsgCS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMsgCS itemId.
         * @member {number} itemId
         * @memberof protocol.ItemMsgCS
         * @instance
         */
        ItemMsgCS.prototype.itemId = 0;

        /**
         * ItemMsgCS num.
         * @member {string} num
         * @memberof protocol.ItemMsgCS
         * @instance
         */
        ItemMsgCS.prototype.num = "";

        /**
         * Creates a new ItemMsgCS instance using the specified properties.
         * @function create
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS=} [properties] Properties to set
         * @returns {protocol.ItemMsgCS} ItemMsgCS instance
         */
        ItemMsgCS.create = function create(properties) {
            return new ItemMsgCS(properties);
        };

        /**
         * Encodes the specified ItemMsgCS message. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS} message ItemMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.num);
            return writer;
        };

        /**
         * Encodes the specified ItemMsgCS message, length delimited. Does not implicitly {@link protocol.ItemMsgCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.IItemMsgCS} message ItemMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemMsgCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.num = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemMsgCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMsgCS message.
         * @function verify
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMsgCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isString(message.num))
                return "num: string expected";
            return null;
        };

        /**
         * Creates an ItemMsgCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemMsgCS} ItemMsgCS
         */
        ItemMsgCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemMsgCS)
                return object;
            var message = new $root.protocol.ItemMsgCS();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = String(object.num);
            return message;
        };

        /**
         * Creates a plain object from an ItemMsgCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemMsgCS
         * @static
         * @param {protocol.ItemMsgCS} message ItemMsgCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemMsgCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = "";
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this ItemMsgCS to JSON.
         * @function toJSON
         * @memberof protocol.ItemMsgCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemMsgCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemMsgCS;
    })();

    protocol.ItemMsgListCS = (function() {

        /**
         * Properties of an ItemMsgListCS.
         * @memberof protocol
         * @interface IItemMsgListCS
         * @property {Array.<protocol.IItemMsgCS>|null} [list] ItemMsgListCS list
         */

        /**
         * Constructs a new ItemMsgListCS.
         * @memberof protocol
         * @classdesc Represents an ItemMsgListCS.
         * @implements IItemMsgListCS
         * @constructor
         * @param {protocol.IItemMsgListCS=} [properties] Properties to set
         */
        function ItemMsgListCS(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMsgListCS list.
         * @member {Array.<protocol.IItemMsgCS>} list
         * @memberof protocol.ItemMsgListCS
         * @instance
         */
        ItemMsgListCS.prototype.list = $util.emptyArray;

        /**
         * Creates a new ItemMsgListCS instance using the specified properties.
         * @function create
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS=} [properties] Properties to set
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS instance
         */
        ItemMsgListCS.create = function create(properties) {
            return new ItemMsgListCS(properties);
        };

        /**
         * Encodes the specified ItemMsgListCS message. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS} message ItemMsgListCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgListCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ItemMsgCS.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ItemMsgListCS message, length delimited. Does not implicitly {@link protocol.ItemMsgListCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.IItemMsgListCS} message ItemMsgListCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMsgListCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgListCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemMsgListCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ItemMsgCS.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemMsgListCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMsgListCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMsgListCS message.
         * @function verify
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMsgListCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ItemMsgCS.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ItemMsgListCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemMsgListCS} ItemMsgListCS
         */
        ItemMsgListCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemMsgListCS)
                return object;
            var message = new $root.protocol.ItemMsgListCS();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ItemMsgListCS.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ItemMsgListCS.list: object expected");
                    message.list[i] = $root.protocol.ItemMsgCS.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ItemMsgListCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemMsgListCS
         * @static
         * @param {protocol.ItemMsgListCS} message ItemMsgListCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemMsgListCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ItemMsgCS.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this ItemMsgListCS to JSON.
         * @function toJSON
         * @memberof protocol.ItemMsgListCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemMsgListCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemMsgListCS;
    })();

    protocol.ShopMsgCS = (function() {

        /**
         * Properties of a ShopMsgCS.
         * @memberof protocol
         * @interface IShopMsgCS
         * @property {number} itemId ShopMsgCS itemId
         * @property {number|null} [time] ShopMsgCS time
         */

        /**
         * Constructs a new ShopMsgCS.
         * @memberof protocol
         * @classdesc Represents a ShopMsgCS.
         * @implements IShopMsgCS
         * @constructor
         * @param {protocol.IShopMsgCS=} [properties] Properties to set
         */
        function ShopMsgCS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopMsgCS itemId.
         * @member {number} itemId
         * @memberof protocol.ShopMsgCS
         * @instance
         */
        ShopMsgCS.prototype.itemId = 0;

        /**
         * ShopMsgCS time.
         * @member {number} time
         * @memberof protocol.ShopMsgCS
         * @instance
         */
        ShopMsgCS.prototype.time = 0;

        /**
         * Creates a new ShopMsgCS instance using the specified properties.
         * @function create
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS=} [properties] Properties to set
         * @returns {protocol.ShopMsgCS} ShopMsgCS instance
         */
        ShopMsgCS.create = function create(properties) {
            return new ShopMsgCS(properties);
        };

        /**
         * Encodes the specified ShopMsgCS message. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @function encode
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS} message ShopMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsgCS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified ShopMsgCS message, length delimited. Does not implicitly {@link protocol.ShopMsgCS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.IShopMsgCS} message ShopMsgCS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopMsgCS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsgCS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ShopMsgCS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ShopMsgCS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopMsgCS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopMsgCS message.
         * @function verify
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopMsgCS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a ShopMsgCS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ShopMsgCS} ShopMsgCS
         */
        ShopMsgCS.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ShopMsgCS)
                return object;
            var message = new $root.protocol.ShopMsgCS();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a ShopMsgCS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ShopMsgCS
         * @static
         * @param {protocol.ShopMsgCS} message ShopMsgCS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopMsgCS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.time = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this ShopMsgCS to JSON.
         * @function toJSON
         * @memberof protocol.ShopMsgCS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopMsgCS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShopMsgCS;
    })();

    protocol.DiamondMsg = (function() {

        /**
         * Properties of a DiamondMsg.
         * @memberof protocol
         * @interface IDiamondMsg
         * @property {Array.<protocol.IDiamondBoxList>|null} [diamondBoxList] DiamondMsg diamondBoxList
         */

        /**
         * Constructs a new DiamondMsg.
         * @memberof protocol
         * @classdesc Represents a DiamondMsg.
         * @implements IDiamondMsg
         * @constructor
         * @param {protocol.IDiamondMsg=} [properties] Properties to set
         */
        function DiamondMsg(properties) {
            this.diamondBoxList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiamondMsg diamondBoxList.
         * @member {Array.<protocol.IDiamondBoxList>} diamondBoxList
         * @memberof protocol.DiamondMsg
         * @instance
         */
        DiamondMsg.prototype.diamondBoxList = $util.emptyArray;

        /**
         * Creates a new DiamondMsg instance using the specified properties.
         * @function create
         * @memberof protocol.DiamondMsg
         * @static
         * @param {protocol.IDiamondMsg=} [properties] Properties to set
         * @returns {protocol.DiamondMsg} DiamondMsg instance
         */
        DiamondMsg.create = function create(properties) {
            return new DiamondMsg(properties);
        };

        /**
         * Encodes the specified DiamondMsg message. Does not implicitly {@link protocol.DiamondMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.DiamondMsg
         * @static
         * @param {protocol.IDiamondMsg} message DiamondMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiamondMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.diamondBoxList != null && message.diamondBoxList.length)
                for (var i = 0; i < message.diamondBoxList.length; ++i)
                    $root.protocol.DiamondBoxList.encode(message.diamondBoxList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DiamondMsg message, length delimited. Does not implicitly {@link protocol.DiamondMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DiamondMsg
         * @static
         * @param {protocol.IDiamondMsg} message DiamondMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiamondMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiamondMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DiamondMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DiamondMsg} DiamondMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiamondMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DiamondMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.diamondBoxList && message.diamondBoxList.length))
                        message.diamondBoxList = [];
                    message.diamondBoxList.push($root.protocol.DiamondBoxList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DiamondMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DiamondMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DiamondMsg} DiamondMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiamondMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiamondMsg message.
         * @function verify
         * @memberof protocol.DiamondMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiamondMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.diamondBoxList != null && message.hasOwnProperty("diamondBoxList")) {
                if (!Array.isArray(message.diamondBoxList))
                    return "diamondBoxList: array expected";
                for (var i = 0; i < message.diamondBoxList.length; ++i) {
                    var error = $root.protocol.DiamondBoxList.verify(message.diamondBoxList[i]);
                    if (error)
                        return "diamondBoxList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DiamondMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DiamondMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DiamondMsg} DiamondMsg
         */
        DiamondMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DiamondMsg)
                return object;
            var message = new $root.protocol.DiamondMsg();
            if (object.diamondBoxList) {
                if (!Array.isArray(object.diamondBoxList))
                    throw TypeError(".protocol.DiamondMsg.diamondBoxList: array expected");
                message.diamondBoxList = [];
                for (var i = 0; i < object.diamondBoxList.length; ++i) {
                    if (typeof object.diamondBoxList[i] !== "object")
                        throw TypeError(".protocol.DiamondMsg.diamondBoxList: object expected");
                    message.diamondBoxList[i] = $root.protocol.DiamondBoxList.fromObject(object.diamondBoxList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DiamondMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DiamondMsg
         * @static
         * @param {protocol.DiamondMsg} message DiamondMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiamondMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.diamondBoxList = [];
            if (message.diamondBoxList && message.diamondBoxList.length) {
                object.diamondBoxList = [];
                for (var j = 0; j < message.diamondBoxList.length; ++j)
                    object.diamondBoxList[j] = $root.protocol.DiamondBoxList.toObject(message.diamondBoxList[j], options);
            }
            return object;
        };

        /**
         * Converts this DiamondMsg to JSON.
         * @function toJSON
         * @memberof protocol.DiamondMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiamondMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DiamondMsg;
    })();

    protocol.DiamondBoxList = (function() {

        /**
         * Properties of a DiamondBoxList.
         * @memberof protocol
         * @interface IDiamondBoxList
         * @property {number} boxId DiamondBoxList boxId
         */

        /**
         * Constructs a new DiamondBoxList.
         * @memberof protocol
         * @classdesc Represents a DiamondBoxList.
         * @implements IDiamondBoxList
         * @constructor
         * @param {protocol.IDiamondBoxList=} [properties] Properties to set
         */
        function DiamondBoxList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DiamondBoxList boxId.
         * @member {number} boxId
         * @memberof protocol.DiamondBoxList
         * @instance
         */
        DiamondBoxList.prototype.boxId = 0;

        /**
         * Creates a new DiamondBoxList instance using the specified properties.
         * @function create
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {protocol.IDiamondBoxList=} [properties] Properties to set
         * @returns {protocol.DiamondBoxList} DiamondBoxList instance
         */
        DiamondBoxList.create = function create(properties) {
            return new DiamondBoxList(properties);
        };

        /**
         * Encodes the specified DiamondBoxList message. Does not implicitly {@link protocol.DiamondBoxList.verify|verify} messages.
         * @function encode
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {protocol.IDiamondBoxList} message DiamondBoxList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiamondBoxList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.boxId);
            return writer;
        };

        /**
         * Encodes the specified DiamondBoxList message, length delimited. Does not implicitly {@link protocol.DiamondBoxList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {protocol.IDiamondBoxList} message DiamondBoxList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiamondBoxList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DiamondBoxList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DiamondBoxList} DiamondBoxList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiamondBoxList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DiamondBoxList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.boxId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("boxId"))
                throw $util.ProtocolError("missing required 'boxId'", { instance: message });
            return message;
        };

        /**
         * Decodes a DiamondBoxList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DiamondBoxList} DiamondBoxList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiamondBoxList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DiamondBoxList message.
         * @function verify
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiamondBoxList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.boxId))
                return "boxId: integer expected";
            return null;
        };

        /**
         * Creates a DiamondBoxList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DiamondBoxList} DiamondBoxList
         */
        DiamondBoxList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DiamondBoxList)
                return object;
            var message = new $root.protocol.DiamondBoxList();
            if (object.boxId != null)
                message.boxId = object.boxId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DiamondBoxList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DiamondBoxList
         * @static
         * @param {protocol.DiamondBoxList} message DiamondBoxList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiamondBoxList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.boxId = 0;
            if (message.boxId != null && message.hasOwnProperty("boxId"))
                object.boxId = message.boxId;
            return object;
        };

        /**
         * Converts this DiamondBoxList to JSON.
         * @function toJSON
         * @memberof protocol.DiamondBoxList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiamondBoxList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DiamondBoxList;
    })();

    protocol.DayChargeMsg = (function() {

        /**
         * Properties of a DayChargeMsg.
         * @memberof protocol
         * @interface IDayChargeMsg
         * @property {number} totalMoney DayChargeMsg totalMoney
         * @property {number} dayMoney DayChargeMsg dayMoney
         * @property {boolean} lastAward DayChargeMsg lastAward
         * @property {boolean} todayAward DayChargeMsg todayAward
         * @property {boolean} firstAward DayChargeMsg firstAward
         */

        /**
         * Constructs a new DayChargeMsg.
         * @memberof protocol
         * @classdesc Represents a DayChargeMsg.
         * @implements IDayChargeMsg
         * @constructor
         * @param {protocol.IDayChargeMsg=} [properties] Properties to set
         */
        function DayChargeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DayChargeMsg totalMoney.
         * @member {number} totalMoney
         * @memberof protocol.DayChargeMsg
         * @instance
         */
        DayChargeMsg.prototype.totalMoney = 0;

        /**
         * DayChargeMsg dayMoney.
         * @member {number} dayMoney
         * @memberof protocol.DayChargeMsg
         * @instance
         */
        DayChargeMsg.prototype.dayMoney = 0;

        /**
         * DayChargeMsg lastAward.
         * @member {boolean} lastAward
         * @memberof protocol.DayChargeMsg
         * @instance
         */
        DayChargeMsg.prototype.lastAward = false;

        /**
         * DayChargeMsg todayAward.
         * @member {boolean} todayAward
         * @memberof protocol.DayChargeMsg
         * @instance
         */
        DayChargeMsg.prototype.todayAward = false;

        /**
         * DayChargeMsg firstAward.
         * @member {boolean} firstAward
         * @memberof protocol.DayChargeMsg
         * @instance
         */
        DayChargeMsg.prototype.firstAward = false;

        /**
         * Creates a new DayChargeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {protocol.IDayChargeMsg=} [properties] Properties to set
         * @returns {protocol.DayChargeMsg} DayChargeMsg instance
         */
        DayChargeMsg.create = function create(properties) {
            return new DayChargeMsg(properties);
        };

        /**
         * Encodes the specified DayChargeMsg message. Does not implicitly {@link protocol.DayChargeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {protocol.IDayChargeMsg} message DayChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DayChargeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalMoney);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.dayMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.lastAward);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.todayAward);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.firstAward);
            return writer;
        };

        /**
         * Encodes the specified DayChargeMsg message, length delimited. Does not implicitly {@link protocol.DayChargeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {protocol.IDayChargeMsg} message DayChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DayChargeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DayChargeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DayChargeMsg} DayChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DayChargeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DayChargeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.totalMoney = reader.int32();
                    break;
                case 2:
                    message.dayMoney = reader.int32();
                    break;
                case 3:
                    message.lastAward = reader.bool();
                    break;
                case 4:
                    message.todayAward = reader.bool();
                    break;
                case 5:
                    message.firstAward = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("totalMoney"))
                throw $util.ProtocolError("missing required 'totalMoney'", { instance: message });
            if (!message.hasOwnProperty("dayMoney"))
                throw $util.ProtocolError("missing required 'dayMoney'", { instance: message });
            if (!message.hasOwnProperty("lastAward"))
                throw $util.ProtocolError("missing required 'lastAward'", { instance: message });
            if (!message.hasOwnProperty("todayAward"))
                throw $util.ProtocolError("missing required 'todayAward'", { instance: message });
            if (!message.hasOwnProperty("firstAward"))
                throw $util.ProtocolError("missing required 'firstAward'", { instance: message });
            return message;
        };

        /**
         * Decodes a DayChargeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DayChargeMsg} DayChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DayChargeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DayChargeMsg message.
         * @function verify
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DayChargeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.totalMoney))
                return "totalMoney: integer expected";
            if (!$util.isInteger(message.dayMoney))
                return "dayMoney: integer expected";
            if (typeof message.lastAward !== "boolean")
                return "lastAward: boolean expected";
            if (typeof message.todayAward !== "boolean")
                return "todayAward: boolean expected";
            if (typeof message.firstAward !== "boolean")
                return "firstAward: boolean expected";
            return null;
        };

        /**
         * Creates a DayChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DayChargeMsg} DayChargeMsg
         */
        DayChargeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DayChargeMsg)
                return object;
            var message = new $root.protocol.DayChargeMsg();
            if (object.totalMoney != null)
                message.totalMoney = object.totalMoney | 0;
            if (object.dayMoney != null)
                message.dayMoney = object.dayMoney | 0;
            if (object.lastAward != null)
                message.lastAward = Boolean(object.lastAward);
            if (object.todayAward != null)
                message.todayAward = Boolean(object.todayAward);
            if (object.firstAward != null)
                message.firstAward = Boolean(object.firstAward);
            return message;
        };

        /**
         * Creates a plain object from a DayChargeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DayChargeMsg
         * @static
         * @param {protocol.DayChargeMsg} message DayChargeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DayChargeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.totalMoney = 0;
                object.dayMoney = 0;
                object.lastAward = false;
                object.todayAward = false;
                object.firstAward = false;
            }
            if (message.totalMoney != null && message.hasOwnProperty("totalMoney"))
                object.totalMoney = message.totalMoney;
            if (message.dayMoney != null && message.hasOwnProperty("dayMoney"))
                object.dayMoney = message.dayMoney;
            if (message.lastAward != null && message.hasOwnProperty("lastAward"))
                object.lastAward = message.lastAward;
            if (message.todayAward != null && message.hasOwnProperty("todayAward"))
                object.todayAward = message.todayAward;
            if (message.firstAward != null && message.hasOwnProperty("firstAward"))
                object.firstAward = message.firstAward;
            return object;
        };

        /**
         * Converts this DayChargeMsg to JSON.
         * @function toJSON
         * @memberof protocol.DayChargeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DayChargeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DayChargeMsg;
    })();

    protocol.ActivityAwardMsg = (function() {

        /**
         * Properties of an ActivityAwardMsg.
         * @memberof protocol
         * @interface IActivityAwardMsg
         * @property {number} activityType ActivityAwardMsg activityType
         * @property {Array.<number>|null} [recievedAwardType] ActivityAwardMsg recievedAwardType
         */

        /**
         * Constructs a new ActivityAwardMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityAwardMsg.
         * @implements IActivityAwardMsg
         * @constructor
         * @param {protocol.IActivityAwardMsg=} [properties] Properties to set
         */
        function ActivityAwardMsg(properties) {
            this.recievedAwardType = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityAwardMsg activityType.
         * @member {number} activityType
         * @memberof protocol.ActivityAwardMsg
         * @instance
         */
        ActivityAwardMsg.prototype.activityType = 0;

        /**
         * ActivityAwardMsg recievedAwardType.
         * @member {Array.<number>} recievedAwardType
         * @memberof protocol.ActivityAwardMsg
         * @instance
         */
        ActivityAwardMsg.prototype.recievedAwardType = $util.emptyArray;

        /**
         * Creates a new ActivityAwardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {protocol.IActivityAwardMsg=} [properties] Properties to set
         * @returns {protocol.ActivityAwardMsg} ActivityAwardMsg instance
         */
        ActivityAwardMsg.create = function create(properties) {
            return new ActivityAwardMsg(properties);
        };

        /**
         * Encodes the specified ActivityAwardMsg message. Does not implicitly {@link protocol.ActivityAwardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {protocol.IActivityAwardMsg} message ActivityAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityAwardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityType);
            if (message.recievedAwardType != null && message.recievedAwardType.length)
                for (var i = 0; i < message.recievedAwardType.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.recievedAwardType[i]);
            return writer;
        };

        /**
         * Encodes the specified ActivityAwardMsg message, length delimited. Does not implicitly {@link protocol.ActivityAwardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {protocol.IActivityAwardMsg} message ActivityAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityAwardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityAwardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityAwardMsg} ActivityAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityAwardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityAwardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityType = reader.int32();
                    break;
                case 2:
                    if (!(message.recievedAwardType && message.recievedAwardType.length))
                        message.recievedAwardType = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.recievedAwardType.push(reader.int32());
                    } else
                        message.recievedAwardType.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityType"))
                throw $util.ProtocolError("missing required 'activityType'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityAwardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityAwardMsg} ActivityAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityAwardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityAwardMsg message.
         * @function verify
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityAwardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityType))
                return "activityType: integer expected";
            if (message.recievedAwardType != null && message.hasOwnProperty("recievedAwardType")) {
                if (!Array.isArray(message.recievedAwardType))
                    return "recievedAwardType: array expected";
                for (var i = 0; i < message.recievedAwardType.length; ++i)
                    if (!$util.isInteger(message.recievedAwardType[i]))
                        return "recievedAwardType: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an ActivityAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityAwardMsg} ActivityAwardMsg
         */
        ActivityAwardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityAwardMsg)
                return object;
            var message = new $root.protocol.ActivityAwardMsg();
            if (object.activityType != null)
                message.activityType = object.activityType | 0;
            if (object.recievedAwardType) {
                if (!Array.isArray(object.recievedAwardType))
                    throw TypeError(".protocol.ActivityAwardMsg.recievedAwardType: array expected");
                message.recievedAwardType = [];
                for (var i = 0; i < object.recievedAwardType.length; ++i)
                    message.recievedAwardType[i] = object.recievedAwardType[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivityAwardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityAwardMsg
         * @static
         * @param {protocol.ActivityAwardMsg} message ActivityAwardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityAwardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recievedAwardType = [];
            if (options.defaults)
                object.activityType = 0;
            if (message.activityType != null && message.hasOwnProperty("activityType"))
                object.activityType = message.activityType;
            if (message.recievedAwardType && message.recievedAwardType.length) {
                object.recievedAwardType = [];
                for (var j = 0; j < message.recievedAwardType.length; ++j)
                    object.recievedAwardType[j] = message.recievedAwardType[j];
            }
            return object;
        };

        /**
         * Converts this ActivityAwardMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityAwardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityAwardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityAwardMsg;
    })();

    protocol.PlayerFirstChargeMsg = (function() {

        /**
         * Properties of a PlayerFirstChargeMsg.
         * @memberof protocol
         * @interface IPlayerFirstChargeMsg
         * @property {Array.<number>|null} [productIdList] PlayerFirstChargeMsg productIdList
         */

        /**
         * Constructs a new PlayerFirstChargeMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerFirstChargeMsg.
         * @implements IPlayerFirstChargeMsg
         * @constructor
         * @param {protocol.IPlayerFirstChargeMsg=} [properties] Properties to set
         */
        function PlayerFirstChargeMsg(properties) {
            this.productIdList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerFirstChargeMsg productIdList.
         * @member {Array.<number>} productIdList
         * @memberof protocol.PlayerFirstChargeMsg
         * @instance
         */
        PlayerFirstChargeMsg.prototype.productIdList = $util.emptyArray;

        /**
         * Creates a new PlayerFirstChargeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {protocol.IPlayerFirstChargeMsg=} [properties] Properties to set
         * @returns {protocol.PlayerFirstChargeMsg} PlayerFirstChargeMsg instance
         */
        PlayerFirstChargeMsg.create = function create(properties) {
            return new PlayerFirstChargeMsg(properties);
        };

        /**
         * Encodes the specified PlayerFirstChargeMsg message. Does not implicitly {@link protocol.PlayerFirstChargeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {protocol.IPlayerFirstChargeMsg} message PlayerFirstChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFirstChargeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.productIdList != null && message.productIdList.length)
                for (var i = 0; i < message.productIdList.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.productIdList[i]);
            return writer;
        };

        /**
         * Encodes the specified PlayerFirstChargeMsg message, length delimited. Does not implicitly {@link protocol.PlayerFirstChargeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {protocol.IPlayerFirstChargeMsg} message PlayerFirstChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFirstChargeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerFirstChargeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerFirstChargeMsg} PlayerFirstChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFirstChargeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerFirstChargeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.productIdList && message.productIdList.length))
                        message.productIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.productIdList.push(reader.int32());
                    } else
                        message.productIdList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerFirstChargeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerFirstChargeMsg} PlayerFirstChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFirstChargeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerFirstChargeMsg message.
         * @function verify
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerFirstChargeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.productIdList != null && message.hasOwnProperty("productIdList")) {
                if (!Array.isArray(message.productIdList))
                    return "productIdList: array expected";
                for (var i = 0; i < message.productIdList.length; ++i)
                    if (!$util.isInteger(message.productIdList[i]))
                        return "productIdList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PlayerFirstChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerFirstChargeMsg} PlayerFirstChargeMsg
         */
        PlayerFirstChargeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerFirstChargeMsg)
                return object;
            var message = new $root.protocol.PlayerFirstChargeMsg();
            if (object.productIdList) {
                if (!Array.isArray(object.productIdList))
                    throw TypeError(".protocol.PlayerFirstChargeMsg.productIdList: array expected");
                message.productIdList = [];
                for (var i = 0; i < object.productIdList.length; ++i)
                    message.productIdList[i] = object.productIdList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerFirstChargeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerFirstChargeMsg
         * @static
         * @param {protocol.PlayerFirstChargeMsg} message PlayerFirstChargeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerFirstChargeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.productIdList = [];
            if (message.productIdList && message.productIdList.length) {
                object.productIdList = [];
                for (var j = 0; j < message.productIdList.length; ++j)
                    object.productIdList[j] = message.productIdList[j];
            }
            return object;
        };

        /**
         * Converts this PlayerFirstChargeMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerFirstChargeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerFirstChargeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerFirstChargeMsg;
    })();

    protocol.ChargeMsg = (function() {

        /**
         * Properties of a ChargeMsg.
         * @memberof protocol
         * @interface IChargeMsg
         * @property {protocol.ICardMsg|null} [card] ChargeMsg card
         * @property {number} goldAndDps ChargeMsg goldAndDps
         * @property {number} clickHurt ChargeMsg clickHurt
         * @property {number} itemAdd ChargeMsg itemAdd
         * @property {number} itemSub ChargeMsg itemSub
         */

        /**
         * Constructs a new ChargeMsg.
         * @memberof protocol
         * @classdesc Represents a ChargeMsg.
         * @implements IChargeMsg
         * @constructor
         * @param {protocol.IChargeMsg=} [properties] Properties to set
         */
        function ChargeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChargeMsg card.
         * @member {protocol.ICardMsg|null|undefined} card
         * @memberof protocol.ChargeMsg
         * @instance
         */
        ChargeMsg.prototype.card = null;

        /**
         * ChargeMsg goldAndDps.
         * @member {number} goldAndDps
         * @memberof protocol.ChargeMsg
         * @instance
         */
        ChargeMsg.prototype.goldAndDps = 0;

        /**
         * ChargeMsg clickHurt.
         * @member {number} clickHurt
         * @memberof protocol.ChargeMsg
         * @instance
         */
        ChargeMsg.prototype.clickHurt = 0;

        /**
         * ChargeMsg itemAdd.
         * @member {number} itemAdd
         * @memberof protocol.ChargeMsg
         * @instance
         */
        ChargeMsg.prototype.itemAdd = 0;

        /**
         * ChargeMsg itemSub.
         * @member {number} itemSub
         * @memberof protocol.ChargeMsg
         * @instance
         */
        ChargeMsg.prototype.itemSub = 0;

        /**
         * Creates a new ChargeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ChargeMsg
         * @static
         * @param {protocol.IChargeMsg=} [properties] Properties to set
         * @returns {protocol.ChargeMsg} ChargeMsg instance
         */
        ChargeMsg.create = function create(properties) {
            return new ChargeMsg(properties);
        };

        /**
         * Encodes the specified ChargeMsg message. Does not implicitly {@link protocol.ChargeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ChargeMsg
         * @static
         * @param {protocol.IChargeMsg} message ChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && message.hasOwnProperty("card"))
                $root.protocol.CardMsg.encode(message.card, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.goldAndDps);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clickHurt);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.itemAdd);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.itemSub);
            return writer;
        };

        /**
         * Encodes the specified ChargeMsg message, length delimited. Does not implicitly {@link protocol.ChargeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ChargeMsg
         * @static
         * @param {protocol.IChargeMsg} message ChargeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChargeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChargeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ChargeMsg} ChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ChargeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = $root.protocol.CardMsg.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.goldAndDps = reader.int32();
                    break;
                case 3:
                    message.clickHurt = reader.int32();
                    break;
                case 4:
                    message.itemAdd = reader.int32();
                    break;
                case 5:
                    message.itemSub = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("goldAndDps"))
                throw $util.ProtocolError("missing required 'goldAndDps'", { instance: message });
            if (!message.hasOwnProperty("clickHurt"))
                throw $util.ProtocolError("missing required 'clickHurt'", { instance: message });
            if (!message.hasOwnProperty("itemAdd"))
                throw $util.ProtocolError("missing required 'itemAdd'", { instance: message });
            if (!message.hasOwnProperty("itemSub"))
                throw $util.ProtocolError("missing required 'itemSub'", { instance: message });
            return message;
        };

        /**
         * Decodes a ChargeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ChargeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ChargeMsg} ChargeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChargeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChargeMsg message.
         * @function verify
         * @memberof protocol.ChargeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChargeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.card != null && message.hasOwnProperty("card")) {
                var error = $root.protocol.CardMsg.verify(message.card);
                if (error)
                    return "card." + error;
            }
            if (!$util.isInteger(message.goldAndDps))
                return "goldAndDps: integer expected";
            if (!$util.isInteger(message.clickHurt))
                return "clickHurt: integer expected";
            if (!$util.isInteger(message.itemAdd))
                return "itemAdd: integer expected";
            if (!$util.isInteger(message.itemSub))
                return "itemSub: integer expected";
            return null;
        };

        /**
         * Creates a ChargeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ChargeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ChargeMsg} ChargeMsg
         */
        ChargeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ChargeMsg)
                return object;
            var message = new $root.protocol.ChargeMsg();
            if (object.card != null) {
                if (typeof object.card !== "object")
                    throw TypeError(".protocol.ChargeMsg.card: object expected");
                message.card = $root.protocol.CardMsg.fromObject(object.card);
            }
            if (object.goldAndDps != null)
                message.goldAndDps = object.goldAndDps | 0;
            if (object.clickHurt != null)
                message.clickHurt = object.clickHurt | 0;
            if (object.itemAdd != null)
                message.itemAdd = object.itemAdd | 0;
            if (object.itemSub != null)
                message.itemSub = object.itemSub | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChargeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ChargeMsg
         * @static
         * @param {protocol.ChargeMsg} message ChargeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChargeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.card = null;
                object.goldAndDps = 0;
                object.clickHurt = 0;
                object.itemAdd = 0;
                object.itemSub = 0;
            }
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = $root.protocol.CardMsg.toObject(message.card, options);
            if (message.goldAndDps != null && message.hasOwnProperty("goldAndDps"))
                object.goldAndDps = message.goldAndDps;
            if (message.clickHurt != null && message.hasOwnProperty("clickHurt"))
                object.clickHurt = message.clickHurt;
            if (message.itemAdd != null && message.hasOwnProperty("itemAdd"))
                object.itemAdd = message.itemAdd;
            if (message.itemSub != null && message.hasOwnProperty("itemSub"))
                object.itemSub = message.itemSub;
            return object;
        };

        /**
         * Converts this ChargeMsg to JSON.
         * @function toJSON
         * @memberof protocol.ChargeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChargeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChargeMsg;
    })();

    protocol.CardMsg = (function() {

        /**
         * Properties of a CardMsg.
         * @memberof protocol
         * @interface ICardMsg
         * @property {number} productId CardMsg productId
         * @property {string} validDate CardMsg validDate
         * @property {Array.<number>|null} [privilegeIdList] CardMsg privilegeIdList
         * @property {number} awardId CardMsg awardId
         * @property {boolean} dayAward CardMsg dayAward
         */

        /**
         * Constructs a new CardMsg.
         * @memberof protocol
         * @classdesc Represents a CardMsg.
         * @implements ICardMsg
         * @constructor
         * @param {protocol.ICardMsg=} [properties] Properties to set
         */
        function CardMsg(properties) {
            this.privilegeIdList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardMsg productId.
         * @member {number} productId
         * @memberof protocol.CardMsg
         * @instance
         */
        CardMsg.prototype.productId = 0;

        /**
         * CardMsg validDate.
         * @member {string} validDate
         * @memberof protocol.CardMsg
         * @instance
         */
        CardMsg.prototype.validDate = "";

        /**
         * CardMsg privilegeIdList.
         * @member {Array.<number>} privilegeIdList
         * @memberof protocol.CardMsg
         * @instance
         */
        CardMsg.prototype.privilegeIdList = $util.emptyArray;

        /**
         * CardMsg awardId.
         * @member {number} awardId
         * @memberof protocol.CardMsg
         * @instance
         */
        CardMsg.prototype.awardId = 0;

        /**
         * CardMsg dayAward.
         * @member {boolean} dayAward
         * @memberof protocol.CardMsg
         * @instance
         */
        CardMsg.prototype.dayAward = false;

        /**
         * Creates a new CardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardMsg
         * @static
         * @param {protocol.ICardMsg=} [properties] Properties to set
         * @returns {protocol.CardMsg} CardMsg instance
         */
        CardMsg.create = function create(properties) {
            return new CardMsg(properties);
        };

        /**
         * Encodes the specified CardMsg message. Does not implicitly {@link protocol.CardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardMsg
         * @static
         * @param {protocol.ICardMsg} message CardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.productId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.validDate);
            if (message.privilegeIdList != null && message.privilegeIdList.length)
                for (var i = 0; i < message.privilegeIdList.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.privilegeIdList[i]);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardId);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.dayAward);
            return writer;
        };

        /**
         * Encodes the specified CardMsg message, length delimited. Does not implicitly {@link protocol.CardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardMsg
         * @static
         * @param {protocol.ICardMsg} message CardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardMsg} CardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.productId = reader.int32();
                    break;
                case 2:
                    message.validDate = reader.string();
                    break;
                case 3:
                    if (!(message.privilegeIdList && message.privilegeIdList.length))
                        message.privilegeIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.privilegeIdList.push(reader.int32());
                    } else
                        message.privilegeIdList.push(reader.int32());
                    break;
                case 4:
                    message.awardId = reader.int32();
                    break;
                case 5:
                    message.dayAward = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("productId"))
                throw $util.ProtocolError("missing required 'productId'", { instance: message });
            if (!message.hasOwnProperty("validDate"))
                throw $util.ProtocolError("missing required 'validDate'", { instance: message });
            if (!message.hasOwnProperty("awardId"))
                throw $util.ProtocolError("missing required 'awardId'", { instance: message });
            if (!message.hasOwnProperty("dayAward"))
                throw $util.ProtocolError("missing required 'dayAward'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardMsg} CardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardMsg message.
         * @function verify
         * @memberof protocol.CardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.productId))
                return "productId: integer expected";
            if (!$util.isString(message.validDate))
                return "validDate: string expected";
            if (message.privilegeIdList != null && message.hasOwnProperty("privilegeIdList")) {
                if (!Array.isArray(message.privilegeIdList))
                    return "privilegeIdList: array expected";
                for (var i = 0; i < message.privilegeIdList.length; ++i)
                    if (!$util.isInteger(message.privilegeIdList[i]))
                        return "privilegeIdList: integer[] expected";
            }
            if (!$util.isInteger(message.awardId))
                return "awardId: integer expected";
            if (typeof message.dayAward !== "boolean")
                return "dayAward: boolean expected";
            return null;
        };

        /**
         * Creates a CardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardMsg} CardMsg
         */
        CardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardMsg)
                return object;
            var message = new $root.protocol.CardMsg();
            if (object.productId != null)
                message.productId = object.productId | 0;
            if (object.validDate != null)
                message.validDate = String(object.validDate);
            if (object.privilegeIdList) {
                if (!Array.isArray(object.privilegeIdList))
                    throw TypeError(".protocol.CardMsg.privilegeIdList: array expected");
                message.privilegeIdList = [];
                for (var i = 0; i < object.privilegeIdList.length; ++i)
                    message.privilegeIdList[i] = object.privilegeIdList[i] | 0;
            }
            if (object.awardId != null)
                message.awardId = object.awardId | 0;
            if (object.dayAward != null)
                message.dayAward = Boolean(object.dayAward);
            return message;
        };

        /**
         * Creates a plain object from a CardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardMsg
         * @static
         * @param {protocol.CardMsg} message CardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.privilegeIdList = [];
            if (options.defaults) {
                object.productId = 0;
                object.validDate = "";
                object.awardId = 0;
                object.dayAward = false;
            }
            if (message.productId != null && message.hasOwnProperty("productId"))
                object.productId = message.productId;
            if (message.validDate != null && message.hasOwnProperty("validDate"))
                object.validDate = message.validDate;
            if (message.privilegeIdList && message.privilegeIdList.length) {
                object.privilegeIdList = [];
                for (var j = 0; j < message.privilegeIdList.length; ++j)
                    object.privilegeIdList[j] = message.privilegeIdList[j];
            }
            if (message.awardId != null && message.hasOwnProperty("awardId"))
                object.awardId = message.awardId;
            if (message.dayAward != null && message.hasOwnProperty("dayAward"))
                object.dayAward = message.dayAward;
            return object;
        };

        /**
         * Converts this CardMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardMsg;
    })();

    protocol.CSChatProtoMsg = (function() {

        /**
         * Properties of a CSChatProtoMsg.
         * @memberof protocol
         * @interface ICSChatProtoMsg
         * @property {number} type CSChatProtoMsg type
         * @property {string} content CSChatProtoMsg content
         * @property {number|null} [sendToPlayerId] CSChatProtoMsg sendToPlayerId
         */

        /**
         * Constructs a new CSChatProtoMsg.
         * @memberof protocol
         * @classdesc Represents a CSChatProtoMsg.
         * @implements ICSChatProtoMsg
         * @constructor
         * @param {protocol.ICSChatProtoMsg=} [properties] Properties to set
         */
        function CSChatProtoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSChatProtoMsg type.
         * @member {number} type
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.type = 0;

        /**
         * CSChatProtoMsg content.
         * @member {string} content
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.content = "";

        /**
         * CSChatProtoMsg sendToPlayerId.
         * @member {number} sendToPlayerId
         * @memberof protocol.CSChatProtoMsg
         * @instance
         */
        CSChatProtoMsg.prototype.sendToPlayerId = 0;

        /**
         * Creates a new CSChatProtoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg=} [properties] Properties to set
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg instance
         */
        CSChatProtoMsg.create = function create(properties) {
            return new CSChatProtoMsg(properties);
        };

        /**
         * Encodes the specified CSChatProtoMsg message. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg} message CSChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSChatProtoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sendToPlayerId);
            return writer;
        };

        /**
         * Encodes the specified CSChatProtoMsg message, length delimited. Does not implicitly {@link protocol.CSChatProtoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.ICSChatProtoMsg} message CSChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSChatProtoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSChatProtoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CSChatProtoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.sendToPlayerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a CSChatProtoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSChatProtoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSChatProtoMsg message.
         * @function verify
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSChatProtoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                if (!$util.isInteger(message.sendToPlayerId))
                    return "sendToPlayerId: integer expected";
            return null;
        };

        /**
         * Creates a CSChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CSChatProtoMsg} CSChatProtoMsg
         */
        CSChatProtoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CSChatProtoMsg)
                return object;
            var message = new $root.protocol.CSChatProtoMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.sendToPlayerId != null)
                message.sendToPlayerId = object.sendToPlayerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CSChatProtoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CSChatProtoMsg
         * @static
         * @param {protocol.CSChatProtoMsg} message CSChatProtoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSChatProtoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.content = "";
                object.sendToPlayerId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                object.sendToPlayerId = message.sendToPlayerId;
            return object;
        };

        /**
         * Converts this CSChatProtoMsg to JSON.
         * @function toJSON
         * @memberof protocol.CSChatProtoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSChatProtoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CSChatProtoMsg;
    })();

    protocol.SCChatProtoMsg = (function() {

        /**
         * Properties of a SCChatProtoMsg.
         * @memberof protocol
         * @interface ISCChatProtoMsg
         * @property {number} type SCChatProtoMsg type
         * @property {string} content SCChatProtoMsg content
         * @property {number} playerId SCChatProtoMsg playerId
         * @property {string} nickName SCChatProtoMsg nickName
         * @property {string} headPic SCChatProtoMsg headPic
         * @property {number|null} [sendToPlayerId] SCChatProtoMsg sendToPlayerId
         */

        /**
         * Constructs a new SCChatProtoMsg.
         * @memberof protocol
         * @classdesc Represents a SCChatProtoMsg.
         * @implements ISCChatProtoMsg
         * @constructor
         * @param {protocol.ISCChatProtoMsg=} [properties] Properties to set
         */
        function SCChatProtoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCChatProtoMsg type.
         * @member {number} type
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.type = 0;

        /**
         * SCChatProtoMsg content.
         * @member {string} content
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.content = "";

        /**
         * SCChatProtoMsg playerId.
         * @member {number} playerId
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.playerId = 0;

        /**
         * SCChatProtoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.nickName = "";

        /**
         * SCChatProtoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.headPic = "";

        /**
         * SCChatProtoMsg sendToPlayerId.
         * @member {number} sendToPlayerId
         * @memberof protocol.SCChatProtoMsg
         * @instance
         */
        SCChatProtoMsg.prototype.sendToPlayerId = 0;

        /**
         * Creates a new SCChatProtoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg=} [properties] Properties to set
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg instance
         */
        SCChatProtoMsg.create = function create(properties) {
            return new SCChatProtoMsg(properties);
        };

        /**
         * Encodes the specified SCChatProtoMsg message. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg} message SCChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCChatProtoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.headPic);
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sendToPlayerId);
            return writer;
        };

        /**
         * Encodes the specified SCChatProtoMsg message, length delimited. Does not implicitly {@link protocol.SCChatProtoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.ISCChatProtoMsg} message SCChatProtoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCChatProtoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCChatProtoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SCChatProtoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.playerId = reader.int32();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                case 5:
                    message.headPic = reader.string();
                    break;
                case 7:
                    message.sendToPlayerId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            return message;
        };

        /**
         * Decodes a SCChatProtoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCChatProtoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCChatProtoMsg message.
         * @function verify
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCChatProtoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                if (!$util.isInteger(message.sendToPlayerId))
                    return "sendToPlayerId: integer expected";
            return null;
        };

        /**
         * Creates a SCChatProtoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SCChatProtoMsg} SCChatProtoMsg
         */
        SCChatProtoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SCChatProtoMsg)
                return object;
            var message = new $root.protocol.SCChatProtoMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.sendToPlayerId != null)
                message.sendToPlayerId = object.sendToPlayerId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SCChatProtoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SCChatProtoMsg
         * @static
         * @param {protocol.SCChatProtoMsg} message SCChatProtoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCChatProtoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.content = "";
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.sendToPlayerId = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.sendToPlayerId != null && message.hasOwnProperty("sendToPlayerId"))
                object.sendToPlayerId = message.sendToPlayerId;
            return object;
        };

        /**
         * Converts this SCChatProtoMsg to JSON.
         * @function toJSON
         * @memberof protocol.SCChatProtoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCChatProtoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCChatProtoMsg;
    })();

    protocol.WorldChatDefMsgList = (function() {

        /**
         * Properties of a WorldChatDefMsgList.
         * @memberof protocol
         * @interface IWorldChatDefMsgList
         * @property {Array.<protocol.ISCChatProtoMsg>|null} [list] WorldChatDefMsgList list
         */

        /**
         * Constructs a new WorldChatDefMsgList.
         * @memberof protocol
         * @classdesc Represents a WorldChatDefMsgList.
         * @implements IWorldChatDefMsgList
         * @constructor
         * @param {protocol.IWorldChatDefMsgList=} [properties] Properties to set
         */
        function WorldChatDefMsgList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldChatDefMsgList list.
         * @member {Array.<protocol.ISCChatProtoMsg>} list
         * @memberof protocol.WorldChatDefMsgList
         * @instance
         */
        WorldChatDefMsgList.prototype.list = $util.emptyArray;

        /**
         * Creates a new WorldChatDefMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList=} [properties] Properties to set
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList instance
         */
        WorldChatDefMsgList.create = function create(properties) {
            return new WorldChatDefMsgList(properties);
        };

        /**
         * Encodes the specified WorldChatDefMsgList message. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList} message WorldChatDefMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChatDefMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.SCChatProtoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WorldChatDefMsgList message, length delimited. Does not implicitly {@link protocol.WorldChatDefMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.IWorldChatDefMsgList} message WorldChatDefMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldChatDefMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChatDefMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.WorldChatDefMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.SCChatProtoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldChatDefMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldChatDefMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldChatDefMsgList message.
         * @function verify
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldChatDefMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.SCChatProtoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WorldChatDefMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.WorldChatDefMsgList} WorldChatDefMsgList
         */
        WorldChatDefMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.WorldChatDefMsgList)
                return object;
            var message = new $root.protocol.WorldChatDefMsgList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.WorldChatDefMsgList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.WorldChatDefMsgList.list: object expected");
                    message.list[i] = $root.protocol.SCChatProtoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WorldChatDefMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.WorldChatDefMsgList
         * @static
         * @param {protocol.WorldChatDefMsgList} message WorldChatDefMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldChatDefMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.SCChatProtoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this WorldChatDefMsgList to JSON.
         * @function toJSON
         * @memberof protocol.WorldChatDefMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldChatDefMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldChatDefMsgList;
    })();

    protocol.SystemNoticeMsg = (function() {

        /**
         * Properties of a SystemNoticeMsg.
         * @memberof protocol
         * @interface ISystemNoticeMsg
         * @property {number} type SystemNoticeMsg type
         * @property {Array.<string>|null} [params] SystemNoticeMsg params
         */

        /**
         * Constructs a new SystemNoticeMsg.
         * @memberof protocol
         * @classdesc Represents a SystemNoticeMsg.
         * @implements ISystemNoticeMsg
         * @constructor
         * @param {protocol.ISystemNoticeMsg=} [properties] Properties to set
         */
        function SystemNoticeMsg(properties) {
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemNoticeMsg type.
         * @member {number} type
         * @memberof protocol.SystemNoticeMsg
         * @instance
         */
        SystemNoticeMsg.prototype.type = 0;

        /**
         * SystemNoticeMsg params.
         * @member {Array.<string>} params
         * @memberof protocol.SystemNoticeMsg
         * @instance
         */
        SystemNoticeMsg.prototype.params = $util.emptyArray;

        /**
         * Creates a new SystemNoticeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg=} [properties] Properties to set
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg instance
         */
        SystemNoticeMsg.create = function create(properties) {
            return new SystemNoticeMsg(properties);
        };

        /**
         * Encodes the specified SystemNoticeMsg message. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg} message SystemNoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemNoticeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.params[i]);
            return writer;
        };

        /**
         * Encodes the specified SystemNoticeMsg message, length delimited. Does not implicitly {@link protocol.SystemNoticeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.ISystemNoticeMsg} message SystemNoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemNoticeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemNoticeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SystemNoticeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a SystemNoticeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemNoticeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemNoticeMsg message.
         * @function verify
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemNoticeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SystemNoticeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SystemNoticeMsg} SystemNoticeMsg
         */
        SystemNoticeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SystemNoticeMsg)
                return object;
            var message = new $root.protocol.SystemNoticeMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".protocol.SystemNoticeMsg.params: array expected");
                message.params = [];
                for (var i = 0; i < object.params.length; ++i)
                    message.params[i] = String(object.params[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SystemNoticeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SystemNoticeMsg
         * @static
         * @param {protocol.SystemNoticeMsg} message SystemNoticeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemNoticeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.params = [];
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.params && message.params.length) {
                object.params = [];
                for (var j = 0; j < message.params.length; ++j)
                    object.params[j] = message.params[j];
            }
            return object;
        };

        /**
         * Converts this SystemNoticeMsg to JSON.
         * @function toJSON
         * @memberof protocol.SystemNoticeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemNoticeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SystemNoticeMsg;
    })();

    protocol.BarrageMsg = (function() {

        /**
         * Properties of a BarrageMsg.
         * @memberof protocol
         * @interface IBarrageMsg
         * @property {number} playerId BarrageMsg playerId
         * @property {string} nickName BarrageMsg nickName
         * @property {string} headPic BarrageMsg headPic
         * @property {string} content BarrageMsg content
         */

        /**
         * Constructs a new BarrageMsg.
         * @memberof protocol
         * @classdesc Represents a BarrageMsg.
         * @implements IBarrageMsg
         * @constructor
         * @param {protocol.IBarrageMsg=} [properties] Properties to set
         */
        function BarrageMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BarrageMsg playerId.
         * @member {number} playerId
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.playerId = 0;

        /**
         * BarrageMsg nickName.
         * @member {string} nickName
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.nickName = "";

        /**
         * BarrageMsg headPic.
         * @member {string} headPic
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.headPic = "";

        /**
         * BarrageMsg content.
         * @member {string} content
         * @memberof protocol.BarrageMsg
         * @instance
         */
        BarrageMsg.prototype.content = "";

        /**
         * Creates a new BarrageMsg instance using the specified properties.
         * @function create
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg=} [properties] Properties to set
         * @returns {protocol.BarrageMsg} BarrageMsg instance
         */
        BarrageMsg.create = function create(properties) {
            return new BarrageMsg(properties);
        };

        /**
         * Encodes the specified BarrageMsg message. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg} message BarrageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified BarrageMsg message, length delimited. Does not implicitly {@link protocol.BarrageMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.IBarrageMsg} message BarrageMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BarrageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BarrageMsg} BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BarrageMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            return message;
        };

        /**
         * Decodes a BarrageMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BarrageMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BarrageMsg} BarrageMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BarrageMsg message.
         * @function verify
         * @memberof protocol.BarrageMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BarrageMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            return null;
        };

        /**
         * Creates a BarrageMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BarrageMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BarrageMsg} BarrageMsg
         */
        BarrageMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BarrageMsg)
                return object;
            var message = new $root.protocol.BarrageMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a BarrageMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BarrageMsg
         * @static
         * @param {protocol.BarrageMsg} message BarrageMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarrageMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickName = "";
                object.headPic = "";
                object.content = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this BarrageMsg to JSON.
         * @function toJSON
         * @memberof protocol.BarrageMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BarrageMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarrageMsg;
    })();

    protocol.BarrageMsgList = (function() {

        /**
         * Properties of a BarrageMsgList.
         * @memberof protocol
         * @interface IBarrageMsgList
         * @property {Array.<protocol.IBarrageMsg>|null} [list] BarrageMsgList list
         */

        /**
         * Constructs a new BarrageMsgList.
         * @memberof protocol
         * @classdesc Represents a BarrageMsgList.
         * @implements IBarrageMsgList
         * @constructor
         * @param {protocol.IBarrageMsgList=} [properties] Properties to set
         */
        function BarrageMsgList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BarrageMsgList list.
         * @member {Array.<protocol.IBarrageMsg>} list
         * @memberof protocol.BarrageMsgList
         * @instance
         */
        BarrageMsgList.prototype.list = $util.emptyArray;

        /**
         * Creates a new BarrageMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList=} [properties] Properties to set
         * @returns {protocol.BarrageMsgList} BarrageMsgList instance
         */
        BarrageMsgList.create = function create(properties) {
            return new BarrageMsgList(properties);
        };

        /**
         * Encodes the specified BarrageMsgList message. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList} message BarrageMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.BarrageMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BarrageMsgList message, length delimited. Does not implicitly {@link protocol.BarrageMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.IBarrageMsgList} message BarrageMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BarrageMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.BarrageMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.BarrageMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BarrageMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BarrageMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BarrageMsgList message.
         * @function verify
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BarrageMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.BarrageMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BarrageMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.BarrageMsgList} BarrageMsgList
         */
        BarrageMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.BarrageMsgList)
                return object;
            var message = new $root.protocol.BarrageMsgList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.BarrageMsgList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.BarrageMsgList.list: object expected");
                    message.list[i] = $root.protocol.BarrageMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BarrageMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.BarrageMsgList
         * @static
         * @param {protocol.BarrageMsgList} message BarrageMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BarrageMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.BarrageMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this BarrageMsgList to JSON.
         * @function toJSON
         * @memberof protocol.BarrageMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BarrageMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BarrageMsgList;
    })();

    protocol.CardGameListMsg = (function() {

        /**
         * Properties of a CardGameListMsg.
         * @memberof protocol
         * @interface ICardGameListMsg
         * @property {Array.<protocol.ICardGameMsg>|null} [cardGameMsg] CardGameListMsg cardGameMsg
         */

        /**
         * Constructs a new CardGameListMsg.
         * @memberof protocol
         * @classdesc Represents a CardGameListMsg.
         * @implements ICardGameListMsg
         * @constructor
         * @param {protocol.ICardGameListMsg=} [properties] Properties to set
         */
        function CardGameListMsg(properties) {
            this.cardGameMsg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGameListMsg cardGameMsg.
         * @member {Array.<protocol.ICardGameMsg>} cardGameMsg
         * @memberof protocol.CardGameListMsg
         * @instance
         */
        CardGameListMsg.prototype.cardGameMsg = $util.emptyArray;

        /**
         * Creates a new CardGameListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg=} [properties] Properties to set
         * @returns {protocol.CardGameListMsg} CardGameListMsg instance
         */
        CardGameListMsg.create = function create(properties) {
            return new CardGameListMsg(properties);
        };

        /**
         * Encodes the specified CardGameListMsg message. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg} message CardGameListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardGameMsg != null && message.cardGameMsg.length)
                for (var i = 0; i < message.cardGameMsg.length; ++i)
                    $root.protocol.CardGameMsg.encode(message.cardGameMsg[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CardGameListMsg message, length delimited. Does not implicitly {@link protocol.CardGameListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.ICardGameListMsg} message CardGameListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardGameListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cardGameMsg && message.cardGameMsg.length))
                        message.cardGameMsg = [];
                    message.cardGameMsg.push($root.protocol.CardGameMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardGameListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardGameListMsg message.
         * @function verify
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardGameListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardGameMsg != null && message.hasOwnProperty("cardGameMsg")) {
                if (!Array.isArray(message.cardGameMsg))
                    return "cardGameMsg: array expected";
                for (var i = 0; i < message.cardGameMsg.length; ++i) {
                    var error = $root.protocol.CardGameMsg.verify(message.cardGameMsg[i]);
                    if (error)
                        return "cardGameMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CardGameListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardGameListMsg} CardGameListMsg
         */
        CardGameListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardGameListMsg)
                return object;
            var message = new $root.protocol.CardGameListMsg();
            if (object.cardGameMsg) {
                if (!Array.isArray(object.cardGameMsg))
                    throw TypeError(".protocol.CardGameListMsg.cardGameMsg: array expected");
                message.cardGameMsg = [];
                for (var i = 0; i < object.cardGameMsg.length; ++i) {
                    if (typeof object.cardGameMsg[i] !== "object")
                        throw TypeError(".protocol.CardGameListMsg.cardGameMsg: object expected");
                    message.cardGameMsg[i] = $root.protocol.CardGameMsg.fromObject(object.cardGameMsg[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CardGameListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardGameListMsg
         * @static
         * @param {protocol.CardGameListMsg} message CardGameListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardGameListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cardGameMsg = [];
            if (message.cardGameMsg && message.cardGameMsg.length) {
                object.cardGameMsg = [];
                for (var j = 0; j < message.cardGameMsg.length; ++j)
                    object.cardGameMsg[j] = $root.protocol.CardGameMsg.toObject(message.cardGameMsg[j], options);
            }
            return object;
        };

        /**
         * Converts this CardGameListMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardGameListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardGameListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardGameListMsg;
    })();

    protocol.CardGameMsg = (function() {

        /**
         * Properties of a CardGameMsg.
         * @memberof protocol
         * @interface ICardGameMsg
         * @property {number} gameId CardGameMsg gameId
         * @property {string} name CardGameMsg name
         * @property {string} iconPath CardGameMsg iconPath
         * @property {number|null} [totalNum] CardGameMsg totalNum
         */

        /**
         * Constructs a new CardGameMsg.
         * @memberof protocol
         * @classdesc Represents a CardGameMsg.
         * @implements ICardGameMsg
         * @constructor
         * @param {protocol.ICardGameMsg=} [properties] Properties to set
         */
        function CardGameMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardGameMsg gameId.
         * @member {number} gameId
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.gameId = 0;

        /**
         * CardGameMsg name.
         * @member {string} name
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.name = "";

        /**
         * CardGameMsg iconPath.
         * @member {string} iconPath
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.iconPath = "";

        /**
         * CardGameMsg totalNum.
         * @member {number} totalNum
         * @memberof protocol.CardGameMsg
         * @instance
         */
        CardGameMsg.prototype.totalNum = 0;

        /**
         * Creates a new CardGameMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg=} [properties] Properties to set
         * @returns {protocol.CardGameMsg} CardGameMsg instance
         */
        CardGameMsg.create = function create(properties) {
            return new CardGameMsg(properties);
        };

        /**
         * Encodes the specified CardGameMsg message. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg} message CardGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gameId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.iconPath);
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.totalNum);
            return writer;
        };

        /**
         * Encodes the specified CardGameMsg message, length delimited. Does not implicitly {@link protocol.CardGameMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.ICardGameMsg} message CardGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardGameMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CardGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CardGameMsg} CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CardGameMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameId = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.iconPath = reader.string();
                    break;
                case 4:
                    message.totalNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("iconPath"))
                throw $util.ProtocolError("missing required 'iconPath'", { instance: message });
            return message;
        };

        /**
         * Decodes a CardGameMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CardGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CardGameMsg} CardGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardGameMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardGameMsg message.
         * @function verify
         * @memberof protocol.CardGameMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardGameMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.gameId))
                return "gameId: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.iconPath))
                return "iconPath: string expected";
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                if (!$util.isInteger(message.totalNum))
                    return "totalNum: integer expected";
            return null;
        };

        /**
         * Creates a CardGameMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CardGameMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CardGameMsg} CardGameMsg
         */
        CardGameMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CardGameMsg)
                return object;
            var message = new $root.protocol.CardGameMsg();
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.iconPath != null)
                message.iconPath = String(object.iconPath);
            if (object.totalNum != null)
                message.totalNum = object.totalNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a CardGameMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CardGameMsg
         * @static
         * @param {protocol.CardGameMsg} message CardGameMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CardGameMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameId = 0;
                object.name = "";
                object.iconPath = "";
                object.totalNum = 0;
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.iconPath != null && message.hasOwnProperty("iconPath"))
                object.iconPath = message.iconPath;
            if (message.totalNum != null && message.hasOwnProperty("totalNum"))
                object.totalNum = message.totalNum;
            return object;
        };

        /**
         * Converts this CardGameMsg to JSON.
         * @function toJSON
         * @memberof protocol.CardGameMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CardGameMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardGameMsg;
    })();

    protocol.CommonMsg = (function() {

        /**
         * Properties of a CommonMsg.
         * @memberof protocol
         * @interface ICommonMsg
         * @property {number|null} [intPar1] CommonMsg intPar1
         * @property {number|null} [intPar2] CommonMsg intPar2
         * @property {number|null} [intPar3] CommonMsg intPar3
         * @property {string|null} [strPar1] CommonMsg strPar1
         * @property {string|null} [strPar2] CommonMsg strPar2
         * @property {string|null} [strPar3] CommonMsg strPar3
         * @property {boolean|null} [boolPar1] CommonMsg boolPar1
         * @property {boolean|null} [boolPar2] CommonMsg boolPar2
         * @property {boolean|null} [boolPar3] CommonMsg boolPar3
         * @property {number|Long|null} [longPar1] CommonMsg longPar1
         * @property {number|Long|null} [longPar2] CommonMsg longPar2
         * @property {number|Long|null} [longPar3] CommonMsg longPar3
         * @property {number|Long|null} [longPar4] CommonMsg longPar4
         * @property {number|null} [floatPar1] CommonMsg floatPar1
         * @property {number|null} [floatPar2] CommonMsg floatPar2
         * @property {number|null} [floatPar3] CommonMsg floatPar3
         */

        /**
         * Constructs a new CommonMsg.
         * @memberof protocol
         * @classdesc Represents a CommonMsg.
         * @implements ICommonMsg
         * @constructor
         * @param {protocol.ICommonMsg=} [properties] Properties to set
         */
        function CommonMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonMsg intPar1.
         * @member {number} intPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar1 = 0;

        /**
         * CommonMsg intPar2.
         * @member {number} intPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar2 = 0;

        /**
         * CommonMsg intPar3.
         * @member {number} intPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.intPar3 = 0;

        /**
         * CommonMsg strPar1.
         * @member {string} strPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar1 = "";

        /**
         * CommonMsg strPar2.
         * @member {string} strPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar2 = "";

        /**
         * CommonMsg strPar3.
         * @member {string} strPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.strPar3 = "";

        /**
         * CommonMsg boolPar1.
         * @member {boolean} boolPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar1 = false;

        /**
         * CommonMsg boolPar2.
         * @member {boolean} boolPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar2 = false;

        /**
         * CommonMsg boolPar3.
         * @member {boolean} boolPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.boolPar3 = false;

        /**
         * CommonMsg longPar1.
         * @member {number|Long} longPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar2.
         * @member {number|Long} longPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar3.
         * @member {number|Long} longPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar3 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg longPar4.
         * @member {number|Long} longPar4
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.longPar4 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommonMsg floatPar1.
         * @member {number} floatPar1
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar1 = 0;

        /**
         * CommonMsg floatPar2.
         * @member {number} floatPar2
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar2 = 0;

        /**
         * CommonMsg floatPar3.
         * @member {number} floatPar3
         * @memberof protocol.CommonMsg
         * @instance
         */
        CommonMsg.prototype.floatPar3 = 0;

        /**
         * Creates a new CommonMsg instance using the specified properties.
         * @function create
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg=} [properties] Properties to set
         * @returns {protocol.CommonMsg} CommonMsg instance
         */
        CommonMsg.create = function create(properties) {
            return new CommonMsg(properties);
        };

        /**
         * Encodes the specified CommonMsg message. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg} message CommonMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.intPar1);
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.intPar2);
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.intPar3);
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.strPar1);
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.strPar2);
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.strPar3);
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.boolPar1);
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.boolPar2);
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.boolPar3);
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.longPar1);
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.longPar2);
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.longPar3);
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.longPar4);
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.floatPar1);
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.floatPar2);
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.floatPar3);
            return writer;
        };

        /**
         * Encodes the specified CommonMsg message, length delimited. Does not implicitly {@link protocol.CommonMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.ICommonMsg} message CommonMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommonMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommonMsg} CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommonMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.intPar1 = reader.int32();
                    break;
                case 2:
                    message.intPar2 = reader.int32();
                    break;
                case 3:
                    message.intPar3 = reader.int32();
                    break;
                case 4:
                    message.strPar1 = reader.string();
                    break;
                case 5:
                    message.strPar2 = reader.string();
                    break;
                case 6:
                    message.strPar3 = reader.string();
                    break;
                case 7:
                    message.boolPar1 = reader.bool();
                    break;
                case 8:
                    message.boolPar2 = reader.bool();
                    break;
                case 9:
                    message.boolPar3 = reader.bool();
                    break;
                case 10:
                    message.longPar1 = reader.int64();
                    break;
                case 11:
                    message.longPar2 = reader.int64();
                    break;
                case 12:
                    message.longPar3 = reader.int64();
                    break;
                case 13:
                    message.longPar4 = reader.int64();
                    break;
                case 14:
                    message.floatPar1 = reader.float();
                    break;
                case 15:
                    message.floatPar2 = reader.float();
                    break;
                case 16:
                    message.floatPar3 = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommonMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommonMsg} CommonMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonMsg message.
         * @function verify
         * @memberof protocol.CommonMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                if (!$util.isInteger(message.intPar1))
                    return "intPar1: integer expected";
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                if (!$util.isInteger(message.intPar2))
                    return "intPar2: integer expected";
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                if (!$util.isInteger(message.intPar3))
                    return "intPar3: integer expected";
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                if (!$util.isString(message.strPar1))
                    return "strPar1: string expected";
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                if (!$util.isString(message.strPar2))
                    return "strPar2: string expected";
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                if (!$util.isString(message.strPar3))
                    return "strPar3: string expected";
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                if (typeof message.boolPar1 !== "boolean")
                    return "boolPar1: boolean expected";
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                if (typeof message.boolPar2 !== "boolean")
                    return "boolPar2: boolean expected";
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                if (typeof message.boolPar3 !== "boolean")
                    return "boolPar3: boolean expected";
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                if (!$util.isInteger(message.longPar1) && !(message.longPar1 && $util.isInteger(message.longPar1.low) && $util.isInteger(message.longPar1.high)))
                    return "longPar1: integer|Long expected";
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                if (!$util.isInteger(message.longPar2) && !(message.longPar2 && $util.isInteger(message.longPar2.low) && $util.isInteger(message.longPar2.high)))
                    return "longPar2: integer|Long expected";
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                if (!$util.isInteger(message.longPar3) && !(message.longPar3 && $util.isInteger(message.longPar3.low) && $util.isInteger(message.longPar3.high)))
                    return "longPar3: integer|Long expected";
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                if (!$util.isInteger(message.longPar4) && !(message.longPar4 && $util.isInteger(message.longPar4.low) && $util.isInteger(message.longPar4.high)))
                    return "longPar4: integer|Long expected";
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                if (typeof message.floatPar1 !== "number")
                    return "floatPar1: number expected";
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                if (typeof message.floatPar2 !== "number")
                    return "floatPar2: number expected";
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                if (typeof message.floatPar3 !== "number")
                    return "floatPar3: number expected";
            return null;
        };

        /**
         * Creates a CommonMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommonMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommonMsg} CommonMsg
         */
        CommonMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommonMsg)
                return object;
            var message = new $root.protocol.CommonMsg();
            if (object.intPar1 != null)
                message.intPar1 = object.intPar1 | 0;
            if (object.intPar2 != null)
                message.intPar2 = object.intPar2 | 0;
            if (object.intPar3 != null)
                message.intPar3 = object.intPar3 | 0;
            if (object.strPar1 != null)
                message.strPar1 = String(object.strPar1);
            if (object.strPar2 != null)
                message.strPar2 = String(object.strPar2);
            if (object.strPar3 != null)
                message.strPar3 = String(object.strPar3);
            if (object.boolPar1 != null)
                message.boolPar1 = Boolean(object.boolPar1);
            if (object.boolPar2 != null)
                message.boolPar2 = Boolean(object.boolPar2);
            if (object.boolPar3 != null)
                message.boolPar3 = Boolean(object.boolPar3);
            if (object.longPar1 != null)
                if ($util.Long)
                    (message.longPar1 = $util.Long.fromValue(object.longPar1)).unsigned = false;
                else if (typeof object.longPar1 === "string")
                    message.longPar1 = parseInt(object.longPar1, 10);
                else if (typeof object.longPar1 === "number")
                    message.longPar1 = object.longPar1;
                else if (typeof object.longPar1 === "object")
                    message.longPar1 = new $util.LongBits(object.longPar1.low >>> 0, object.longPar1.high >>> 0).toNumber();
            if (object.longPar2 != null)
                if ($util.Long)
                    (message.longPar2 = $util.Long.fromValue(object.longPar2)).unsigned = false;
                else if (typeof object.longPar2 === "string")
                    message.longPar2 = parseInt(object.longPar2, 10);
                else if (typeof object.longPar2 === "number")
                    message.longPar2 = object.longPar2;
                else if (typeof object.longPar2 === "object")
                    message.longPar2 = new $util.LongBits(object.longPar2.low >>> 0, object.longPar2.high >>> 0).toNumber();
            if (object.longPar3 != null)
                if ($util.Long)
                    (message.longPar3 = $util.Long.fromValue(object.longPar3)).unsigned = false;
                else if (typeof object.longPar3 === "string")
                    message.longPar3 = parseInt(object.longPar3, 10);
                else if (typeof object.longPar3 === "number")
                    message.longPar3 = object.longPar3;
                else if (typeof object.longPar3 === "object")
                    message.longPar3 = new $util.LongBits(object.longPar3.low >>> 0, object.longPar3.high >>> 0).toNumber();
            if (object.longPar4 != null)
                if ($util.Long)
                    (message.longPar4 = $util.Long.fromValue(object.longPar4)).unsigned = false;
                else if (typeof object.longPar4 === "string")
                    message.longPar4 = parseInt(object.longPar4, 10);
                else if (typeof object.longPar4 === "number")
                    message.longPar4 = object.longPar4;
                else if (typeof object.longPar4 === "object")
                    message.longPar4 = new $util.LongBits(object.longPar4.low >>> 0, object.longPar4.high >>> 0).toNumber();
            if (object.floatPar1 != null)
                message.floatPar1 = Number(object.floatPar1);
            if (object.floatPar2 != null)
                message.floatPar2 = Number(object.floatPar2);
            if (object.floatPar3 != null)
                message.floatPar3 = Number(object.floatPar3);
            return message;
        };

        /**
         * Creates a plain object from a CommonMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommonMsg
         * @static
         * @param {protocol.CommonMsg} message CommonMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.intPar1 = 0;
                object.intPar2 = 0;
                object.intPar3 = 0;
                object.strPar1 = "";
                object.strPar2 = "";
                object.strPar3 = "";
                object.boolPar1 = false;
                object.boolPar2 = false;
                object.boolPar3 = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar1 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar2 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar3 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar3 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.longPar4 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.longPar4 = options.longs === String ? "0" : 0;
                object.floatPar1 = 0;
                object.floatPar2 = 0;
                object.floatPar3 = 0;
            }
            if (message.intPar1 != null && message.hasOwnProperty("intPar1"))
                object.intPar1 = message.intPar1;
            if (message.intPar2 != null && message.hasOwnProperty("intPar2"))
                object.intPar2 = message.intPar2;
            if (message.intPar3 != null && message.hasOwnProperty("intPar3"))
                object.intPar3 = message.intPar3;
            if (message.strPar1 != null && message.hasOwnProperty("strPar1"))
                object.strPar1 = message.strPar1;
            if (message.strPar2 != null && message.hasOwnProperty("strPar2"))
                object.strPar2 = message.strPar2;
            if (message.strPar3 != null && message.hasOwnProperty("strPar3"))
                object.strPar3 = message.strPar3;
            if (message.boolPar1 != null && message.hasOwnProperty("boolPar1"))
                object.boolPar1 = message.boolPar1;
            if (message.boolPar2 != null && message.hasOwnProperty("boolPar2"))
                object.boolPar2 = message.boolPar2;
            if (message.boolPar3 != null && message.hasOwnProperty("boolPar3"))
                object.boolPar3 = message.boolPar3;
            if (message.longPar1 != null && message.hasOwnProperty("longPar1"))
                if (typeof message.longPar1 === "number")
                    object.longPar1 = options.longs === String ? String(message.longPar1) : message.longPar1;
                else
                    object.longPar1 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar1) : options.longs === Number ? new $util.LongBits(message.longPar1.low >>> 0, message.longPar1.high >>> 0).toNumber() : message.longPar1;
            if (message.longPar2 != null && message.hasOwnProperty("longPar2"))
                if (typeof message.longPar2 === "number")
                    object.longPar2 = options.longs === String ? String(message.longPar2) : message.longPar2;
                else
                    object.longPar2 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar2) : options.longs === Number ? new $util.LongBits(message.longPar2.low >>> 0, message.longPar2.high >>> 0).toNumber() : message.longPar2;
            if (message.longPar3 != null && message.hasOwnProperty("longPar3"))
                if (typeof message.longPar3 === "number")
                    object.longPar3 = options.longs === String ? String(message.longPar3) : message.longPar3;
                else
                    object.longPar3 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar3) : options.longs === Number ? new $util.LongBits(message.longPar3.low >>> 0, message.longPar3.high >>> 0).toNumber() : message.longPar3;
            if (message.longPar4 != null && message.hasOwnProperty("longPar4"))
                if (typeof message.longPar4 === "number")
                    object.longPar4 = options.longs === String ? String(message.longPar4) : message.longPar4;
                else
                    object.longPar4 = options.longs === String ? $util.Long.prototype.toString.call(message.longPar4) : options.longs === Number ? new $util.LongBits(message.longPar4.low >>> 0, message.longPar4.high >>> 0).toNumber() : message.longPar4;
            if (message.floatPar1 != null && message.hasOwnProperty("floatPar1"))
                object.floatPar1 = options.json && !isFinite(message.floatPar1) ? String(message.floatPar1) : message.floatPar1;
            if (message.floatPar2 != null && message.hasOwnProperty("floatPar2"))
                object.floatPar2 = options.json && !isFinite(message.floatPar2) ? String(message.floatPar2) : message.floatPar2;
            if (message.floatPar3 != null && message.hasOwnProperty("floatPar3"))
                object.floatPar3 = options.json && !isFinite(message.floatPar3) ? String(message.floatPar3) : message.floatPar3;
            return object;
        };

        /**
         * Converts this CommonMsg to JSON.
         * @function toJSON
         * @memberof protocol.CommonMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommonMsg;
    })();

    protocol.GamePlayerInfoMsg = (function() {

        /**
         * Properties of a GamePlayerInfoMsg.
         * @memberof protocol
         * @interface IGamePlayerInfoMsg
         * @property {number} playerId GamePlayerInfoMsg playerId
         * @property {string} nickName GamePlayerInfoMsg nickName
         * @property {number} level GamePlayerInfoMsg level
         * @property {string} headPic GamePlayerInfoMsg headPic
         * @property {string} remark GamePlayerInfoMsg remark
         * @property {number} winNum GamePlayerInfoMsg winNum
         */

        /**
         * Constructs a new GamePlayerInfoMsg.
         * @memberof protocol
         * @classdesc Represents a GamePlayerInfoMsg.
         * @implements IGamePlayerInfoMsg
         * @constructor
         * @param {protocol.IGamePlayerInfoMsg=} [properties] Properties to set
         */
        function GamePlayerInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePlayerInfoMsg playerId.
         * @member {number} playerId
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.playerId = 0;

        /**
         * GamePlayerInfoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.nickName = "";

        /**
         * GamePlayerInfoMsg level.
         * @member {number} level
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.level = 0;

        /**
         * GamePlayerInfoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.headPic = "";

        /**
         * GamePlayerInfoMsg remark.
         * @member {string} remark
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.remark = "";

        /**
         * GamePlayerInfoMsg winNum.
         * @member {number} winNum
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         */
        GamePlayerInfoMsg.prototype.winNum = 0;

        /**
         * Creates a new GamePlayerInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {protocol.IGamePlayerInfoMsg=} [properties] Properties to set
         * @returns {protocol.GamePlayerInfoMsg} GamePlayerInfoMsg instance
         */
        GamePlayerInfoMsg.create = function create(properties) {
            return new GamePlayerInfoMsg(properties);
        };

        /**
         * Encodes the specified GamePlayerInfoMsg message. Does not implicitly {@link protocol.GamePlayerInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {protocol.IGamePlayerInfoMsg} message GamePlayerInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.headPic);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.remark);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.winNum);
            return writer;
        };

        /**
         * Encodes the specified GamePlayerInfoMsg message, length delimited. Does not implicitly {@link protocol.GamePlayerInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {protocol.IGamePlayerInfoMsg} message GamePlayerInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePlayerInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GamePlayerInfoMsg} GamePlayerInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GamePlayerInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.headPic = reader.string();
                    break;
                case 5:
                    message.remark = reader.string();
                    break;
                case 6:
                    message.winNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("remark"))
                throw $util.ProtocolError("missing required 'remark'", { instance: message });
            if (!message.hasOwnProperty("winNum"))
                throw $util.ProtocolError("missing required 'winNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a GamePlayerInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GamePlayerInfoMsg} GamePlayerInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePlayerInfoMsg message.
         * @function verify
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePlayerInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isString(message.remark))
                return "remark: string expected";
            if (!$util.isInteger(message.winNum))
                return "winNum: integer expected";
            return null;
        };

        /**
         * Creates a GamePlayerInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GamePlayerInfoMsg} GamePlayerInfoMsg
         */
        GamePlayerInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GamePlayerInfoMsg)
                return object;
            var message = new $root.protocol.GamePlayerInfoMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.winNum != null)
                message.winNum = object.winNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a GamePlayerInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GamePlayerInfoMsg
         * @static
         * @param {protocol.GamePlayerInfoMsg} message GamePlayerInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePlayerInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.nickName = "";
                object.level = 0;
                object.headPic = "";
                object.remark = "";
                object.winNum = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.winNum != null && message.hasOwnProperty("winNum"))
                object.winNum = message.winNum;
            return object;
        };

        /**
         * Converts this GamePlayerInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.GamePlayerInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePlayerInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePlayerInfoMsg;
    })();

    protocol.ChallengeMsg = (function() {

        /**
         * Properties of a ChallengeMsg.
         * @memberof protocol
         * @interface IChallengeMsg
         * @property {Array.<protocol.IGamePlayerInfoMsg>|null} [list] ChallengeMsg list
         * @property {number} gameId ChallengeMsg gameId
         */

        /**
         * Constructs a new ChallengeMsg.
         * @memberof protocol
         * @classdesc Represents a ChallengeMsg.
         * @implements IChallengeMsg
         * @constructor
         * @param {protocol.IChallengeMsg=} [properties] Properties to set
         */
        function ChallengeMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChallengeMsg list.
         * @member {Array.<protocol.IGamePlayerInfoMsg>} list
         * @memberof protocol.ChallengeMsg
         * @instance
         */
        ChallengeMsg.prototype.list = $util.emptyArray;

        /**
         * ChallengeMsg gameId.
         * @member {number} gameId
         * @memberof protocol.ChallengeMsg
         * @instance
         */
        ChallengeMsg.prototype.gameId = 0;

        /**
         * Creates a new ChallengeMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {protocol.IChallengeMsg=} [properties] Properties to set
         * @returns {protocol.ChallengeMsg} ChallengeMsg instance
         */
        ChallengeMsg.create = function create(properties) {
            return new ChallengeMsg(properties);
        };

        /**
         * Encodes the specified ChallengeMsg message. Does not implicitly {@link protocol.ChallengeMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {protocol.IChallengeMsg} message ChallengeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChallengeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.GamePlayerInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified ChallengeMsg message, length delimited. Does not implicitly {@link protocol.ChallengeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {protocol.IChallengeMsg} message ChallengeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChallengeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChallengeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ChallengeMsg} ChallengeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChallengeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ChallengeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.GamePlayerInfoMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ChallengeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ChallengeMsg} ChallengeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChallengeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChallengeMsg message.
         * @function verify
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChallengeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.GamePlayerInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (!$util.isInteger(message.gameId))
                return "gameId: integer expected";
            return null;
        };

        /**
         * Creates a ChallengeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ChallengeMsg} ChallengeMsg
         */
        ChallengeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ChallengeMsg)
                return object;
            var message = new $root.protocol.ChallengeMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ChallengeMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ChallengeMsg.list: object expected");
                    message.list[i] = $root.protocol.GamePlayerInfoMsg.fromObject(object.list[i]);
                }
            }
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChallengeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ChallengeMsg
         * @static
         * @param {protocol.ChallengeMsg} message ChallengeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChallengeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.gameId = 0;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.GamePlayerInfoMsg.toObject(message.list[j], options);
            }
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this ChallengeMsg to JSON.
         * @function toJSON
         * @memberof protocol.ChallengeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChallengeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChallengeMsg;
    })();

    protocol.PVPPlayerGameLoadingMsg = (function() {

        /**
         * Properties of a PVPPlayerGameLoadingMsg.
         * @memberof protocol
         * @interface IPVPPlayerGameLoadingMsg
         * @property {Array.<protocol.IPVPPlayerGameHeros>|null} [players] PVPPlayerGameLoadingMsg players
         */

        /**
         * Constructs a new PVPPlayerGameLoadingMsg.
         * @memberof protocol
         * @classdesc Represents a PVPPlayerGameLoadingMsg.
         * @implements IPVPPlayerGameLoadingMsg
         * @constructor
         * @param {protocol.IPVPPlayerGameLoadingMsg=} [properties] Properties to set
         */
        function PVPPlayerGameLoadingMsg(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PVPPlayerGameLoadingMsg players.
         * @member {Array.<protocol.IPVPPlayerGameHeros>} players
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @instance
         */
        PVPPlayerGameLoadingMsg.prototype.players = $util.emptyArray;

        /**
         * Creates a new PVPPlayerGameLoadingMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {protocol.IPVPPlayerGameLoadingMsg=} [properties] Properties to set
         * @returns {protocol.PVPPlayerGameLoadingMsg} PVPPlayerGameLoadingMsg instance
         */
        PVPPlayerGameLoadingMsg.create = function create(properties) {
            return new PVPPlayerGameLoadingMsg(properties);
        };

        /**
         * Encodes the specified PVPPlayerGameLoadingMsg message. Does not implicitly {@link protocol.PVPPlayerGameLoadingMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {protocol.IPVPPlayerGameLoadingMsg} message PVPPlayerGameLoadingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PVPPlayerGameLoadingMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.protocol.PVPPlayerGameHeros.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PVPPlayerGameLoadingMsg message, length delimited. Does not implicitly {@link protocol.PVPPlayerGameLoadingMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {protocol.IPVPPlayerGameLoadingMsg} message PVPPlayerGameLoadingMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PVPPlayerGameLoadingMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PVPPlayerGameLoadingMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PVPPlayerGameLoadingMsg} PVPPlayerGameLoadingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PVPPlayerGameLoadingMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PVPPlayerGameLoadingMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.protocol.PVPPlayerGameHeros.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PVPPlayerGameLoadingMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PVPPlayerGameLoadingMsg} PVPPlayerGameLoadingMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PVPPlayerGameLoadingMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PVPPlayerGameLoadingMsg message.
         * @function verify
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PVPPlayerGameLoadingMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.protocol.PVPPlayerGameHeros.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PVPPlayerGameLoadingMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PVPPlayerGameLoadingMsg} PVPPlayerGameLoadingMsg
         */
        PVPPlayerGameLoadingMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PVPPlayerGameLoadingMsg)
                return object;
            var message = new $root.protocol.PVPPlayerGameLoadingMsg();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".protocol.PVPPlayerGameLoadingMsg.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".protocol.PVPPlayerGameLoadingMsg.players: object expected");
                    message.players[i] = $root.protocol.PVPPlayerGameHeros.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PVPPlayerGameLoadingMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @static
         * @param {protocol.PVPPlayerGameLoadingMsg} message PVPPlayerGameLoadingMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PVPPlayerGameLoadingMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.protocol.PVPPlayerGameHeros.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this PVPPlayerGameLoadingMsg to JSON.
         * @function toJSON
         * @memberof protocol.PVPPlayerGameLoadingMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PVPPlayerGameLoadingMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PVPPlayerGameLoadingMsg;
    })();

    protocol.PVPPlayerGameHeros = (function() {

        /**
         * Properties of a PVPPlayerGameHeros.
         * @memberof protocol
         * @interface IPVPPlayerGameHeros
         * @property {number} playerId PVPPlayerGameHeros playerId
         * @property {number} campType PVPPlayerGameHeros campType
         * @property {string} nickName PVPPlayerGameHeros nickName
         * @property {string} headPic PVPPlayerGameHeros headPic
         * @property {boolean} robot PVPPlayerGameHeros robot
         * @property {number} winNum PVPPlayerGameHeros winNum
         */

        /**
         * Constructs a new PVPPlayerGameHeros.
         * @memberof protocol
         * @classdesc Represents a PVPPlayerGameHeros.
         * @implements IPVPPlayerGameHeros
         * @constructor
         * @param {protocol.IPVPPlayerGameHeros=} [properties] Properties to set
         */
        function PVPPlayerGameHeros(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PVPPlayerGameHeros playerId.
         * @member {number} playerId
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.playerId = 0;

        /**
         * PVPPlayerGameHeros campType.
         * @member {number} campType
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.campType = 0;

        /**
         * PVPPlayerGameHeros nickName.
         * @member {string} nickName
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.nickName = "";

        /**
         * PVPPlayerGameHeros headPic.
         * @member {string} headPic
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.headPic = "";

        /**
         * PVPPlayerGameHeros robot.
         * @member {boolean} robot
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.robot = false;

        /**
         * PVPPlayerGameHeros winNum.
         * @member {number} winNum
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         */
        PVPPlayerGameHeros.prototype.winNum = 0;

        /**
         * Creates a new PVPPlayerGameHeros instance using the specified properties.
         * @function create
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {protocol.IPVPPlayerGameHeros=} [properties] Properties to set
         * @returns {protocol.PVPPlayerGameHeros} PVPPlayerGameHeros instance
         */
        PVPPlayerGameHeros.create = function create(properties) {
            return new PVPPlayerGameHeros(properties);
        };

        /**
         * Encodes the specified PVPPlayerGameHeros message. Does not implicitly {@link protocol.PVPPlayerGameHeros.verify|verify} messages.
         * @function encode
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {protocol.IPVPPlayerGameHeros} message PVPPlayerGameHeros message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PVPPlayerGameHeros.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.campType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.headPic);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.robot);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.winNum);
            return writer;
        };

        /**
         * Encodes the specified PVPPlayerGameHeros message, length delimited. Does not implicitly {@link protocol.PVPPlayerGameHeros.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {protocol.IPVPPlayerGameHeros} message PVPPlayerGameHeros message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PVPPlayerGameHeros.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PVPPlayerGameHeros message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PVPPlayerGameHeros} PVPPlayerGameHeros
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PVPPlayerGameHeros.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PVPPlayerGameHeros();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.campType = reader.int32();
                    break;
                case 3:
                    message.nickName = reader.string();
                    break;
                case 4:
                    message.headPic = reader.string();
                    break;
                case 5:
                    message.robot = reader.bool();
                    break;
                case 6:
                    message.winNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("campType"))
                throw $util.ProtocolError("missing required 'campType'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("robot"))
                throw $util.ProtocolError("missing required 'robot'", { instance: message });
            if (!message.hasOwnProperty("winNum"))
                throw $util.ProtocolError("missing required 'winNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a PVPPlayerGameHeros message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PVPPlayerGameHeros} PVPPlayerGameHeros
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PVPPlayerGameHeros.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PVPPlayerGameHeros message.
         * @function verify
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PVPPlayerGameHeros.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isInteger(message.campType))
                return "campType: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (typeof message.robot !== "boolean")
                return "robot: boolean expected";
            if (!$util.isInteger(message.winNum))
                return "winNum: integer expected";
            return null;
        };

        /**
         * Creates a PVPPlayerGameHeros message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PVPPlayerGameHeros} PVPPlayerGameHeros
         */
        PVPPlayerGameHeros.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PVPPlayerGameHeros)
                return object;
            var message = new $root.protocol.PVPPlayerGameHeros();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.campType != null)
                message.campType = object.campType | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.robot != null)
                message.robot = Boolean(object.robot);
            if (object.winNum != null)
                message.winNum = object.winNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a PVPPlayerGameHeros message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PVPPlayerGameHeros
         * @static
         * @param {protocol.PVPPlayerGameHeros} message PVPPlayerGameHeros
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PVPPlayerGameHeros.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.campType = 0;
                object.nickName = "";
                object.headPic = "";
                object.robot = false;
                object.winNum = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.campType != null && message.hasOwnProperty("campType"))
                object.campType = message.campType;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.robot != null && message.hasOwnProperty("robot"))
                object.robot = message.robot;
            if (message.winNum != null && message.hasOwnProperty("winNum"))
                object.winNum = message.winNum;
            return object;
        };

        /**
         * Converts this PVPPlayerGameHeros to JSON.
         * @function toJSON
         * @memberof protocol.PVPPlayerGameHeros
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PVPPlayerGameHeros.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PVPPlayerGameHeros;
    })();

    protocol.GameLoadingProcessMsg = (function() {

        /**
         * Properties of a GameLoadingProcessMsg.
         * @memberof protocol
         * @interface IGameLoadingProcessMsg
         * @property {number} playerId GameLoadingProcessMsg playerId
         * @property {number} process GameLoadingProcessMsg process
         */

        /**
         * Constructs a new GameLoadingProcessMsg.
         * @memberof protocol
         * @classdesc Represents a GameLoadingProcessMsg.
         * @implements IGameLoadingProcessMsg
         * @constructor
         * @param {protocol.IGameLoadingProcessMsg=} [properties] Properties to set
         */
        function GameLoadingProcessMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLoadingProcessMsg playerId.
         * @member {number} playerId
         * @memberof protocol.GameLoadingProcessMsg
         * @instance
         */
        GameLoadingProcessMsg.prototype.playerId = 0;

        /**
         * GameLoadingProcessMsg process.
         * @member {number} process
         * @memberof protocol.GameLoadingProcessMsg
         * @instance
         */
        GameLoadingProcessMsg.prototype.process = 0;

        /**
         * Creates a new GameLoadingProcessMsg instance using the specified properties.
         * @function create
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {protocol.IGameLoadingProcessMsg=} [properties] Properties to set
         * @returns {protocol.GameLoadingProcessMsg} GameLoadingProcessMsg instance
         */
        GameLoadingProcessMsg.create = function create(properties) {
            return new GameLoadingProcessMsg(properties);
        };

        /**
         * Encodes the specified GameLoadingProcessMsg message. Does not implicitly {@link protocol.GameLoadingProcessMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {protocol.IGameLoadingProcessMsg} message GameLoadingProcessMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoadingProcessMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.process);
            return writer;
        };

        /**
         * Encodes the specified GameLoadingProcessMsg message, length delimited. Does not implicitly {@link protocol.GameLoadingProcessMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {protocol.IGameLoadingProcessMsg} message GameLoadingProcessMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLoadingProcessMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLoadingProcessMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GameLoadingProcessMsg} GameLoadingProcessMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoadingProcessMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GameLoadingProcessMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.process = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("process"))
                throw $util.ProtocolError("missing required 'process'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameLoadingProcessMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GameLoadingProcessMsg} GameLoadingProcessMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLoadingProcessMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLoadingProcessMsg message.
         * @function verify
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLoadingProcessMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isInteger(message.process))
                return "process: integer expected";
            return null;
        };

        /**
         * Creates a GameLoadingProcessMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GameLoadingProcessMsg} GameLoadingProcessMsg
         */
        GameLoadingProcessMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GameLoadingProcessMsg)
                return object;
            var message = new $root.protocol.GameLoadingProcessMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.process != null)
                message.process = object.process | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameLoadingProcessMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GameLoadingProcessMsg
         * @static
         * @param {protocol.GameLoadingProcessMsg} message GameLoadingProcessMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLoadingProcessMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.process = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            return object;
        };

        /**
         * Converts this GameLoadingProcessMsg to JSON.
         * @function toJSON
         * @memberof protocol.GameLoadingProcessMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLoadingProcessMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLoadingProcessMsg;
    })();

    protocol.FriendInfoListMsg = (function() {

        /**
         * Properties of a FriendInfoListMsg.
         * @memberof protocol
         * @interface IFriendInfoListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendInfoListMsg list
         */

        /**
         * Constructs a new FriendInfoListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendInfoListMsg.
         * @implements IFriendInfoListMsg
         * @constructor
         * @param {protocol.IFriendInfoListMsg=} [properties] Properties to set
         */
        function FriendInfoListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendInfoListMsg
         * @instance
         */
        FriendInfoListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendInfoListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg=} [properties] Properties to set
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg instance
         */
        FriendInfoListMsg.create = function create(properties) {
            return new FriendInfoListMsg(properties);
        };

        /**
         * Encodes the specified FriendInfoListMsg message. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg} message FriendInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendInfoListMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.IFriendInfoListMsg} message FriendInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendInfoListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoListMsg message.
         * @function verify
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoListMsg} FriendInfoListMsg
         */
        FriendInfoListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoListMsg)
                return object;
            var message = new $root.protocol.FriendInfoListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendInfoListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendInfoListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoListMsg
         * @static
         * @param {protocol.FriendInfoListMsg} message FriendInfoListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendInfoListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendInfoListMsg;
    })();

    protocol.FriendInfoMsg = (function() {

        /**
         * Properties of a FriendInfoMsg.
         * @memberof protocol
         * @interface IFriendInfoMsg
         * @property {number} friendId FriendInfoMsg friendId
         * @property {string} nickName FriendInfoMsg nickName
         * @property {string} headPic FriendInfoMsg headPic
         * @property {number} distance FriendInfoMsg distance
         * @property {boolean} online FriendInfoMsg online
         * @property {number} sex FriendInfoMsg sex
         * @property {number} age FriendInfoMsg age
         * @property {string} constellation FriendInfoMsg constellation
         * @property {string} signature FriendInfoMsg signature
         */

        /**
         * Constructs a new FriendInfoMsg.
         * @memberof protocol
         * @classdesc Represents a FriendInfoMsg.
         * @implements IFriendInfoMsg
         * @constructor
         * @param {protocol.IFriendInfoMsg=} [properties] Properties to set
         */
        function FriendInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendInfoMsg friendId.
         * @member {number} friendId
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.friendId = 0;

        /**
         * FriendInfoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.nickName = "";

        /**
         * FriendInfoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.headPic = "";

        /**
         * FriendInfoMsg distance.
         * @member {number} distance
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.distance = 0;

        /**
         * FriendInfoMsg online.
         * @member {boolean} online
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.online = false;

        /**
         * FriendInfoMsg sex.
         * @member {number} sex
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.sex = 0;

        /**
         * FriendInfoMsg age.
         * @member {number} age
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.age = 0;

        /**
         * FriendInfoMsg constellation.
         * @member {string} constellation
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.constellation = "";

        /**
         * FriendInfoMsg signature.
         * @member {string} signature
         * @memberof protocol.FriendInfoMsg
         * @instance
         */
        FriendInfoMsg.prototype.signature = "";

        /**
         * Creates a new FriendInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg=} [properties] Properties to set
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg instance
         */
        FriendInfoMsg.create = function create(properties) {
            return new FriendInfoMsg(properties);
        };

        /**
         * Encodes the specified FriendInfoMsg message. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg} message FriendInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.friendId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.distance);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.online);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sex);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.age);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.constellation);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.signature);
            return writer;
        };

        /**
         * Encodes the specified FriendInfoMsg message, length delimited. Does not implicitly {@link protocol.FriendInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.IFriendInfoMsg} message FriendInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.friendId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.distance = reader.float();
                    break;
                case 5:
                    message.online = reader.bool();
                    break;
                case 6:
                    message.sex = reader.int32();
                    break;
                case 7:
                    message.age = reader.int32();
                    break;
                case 8:
                    message.constellation = reader.string();
                    break;
                case 9:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("friendId"))
                throw $util.ProtocolError("missing required 'friendId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("distance"))
                throw $util.ProtocolError("missing required 'distance'", { instance: message });
            if (!message.hasOwnProperty("online"))
                throw $util.ProtocolError("missing required 'online'", { instance: message });
            if (!message.hasOwnProperty("sex"))
                throw $util.ProtocolError("missing required 'sex'", { instance: message });
            if (!message.hasOwnProperty("age"))
                throw $util.ProtocolError("missing required 'age'", { instance: message });
            if (!message.hasOwnProperty("constellation"))
                throw $util.ProtocolError("missing required 'constellation'", { instance: message });
            if (!message.hasOwnProperty("signature"))
                throw $util.ProtocolError("missing required 'signature'", { instance: message });
            return message;
        };

        /**
         * Decodes a FriendInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendInfoMsg message.
         * @function verify
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.friendId))
                return "friendId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (typeof message.distance !== "number")
                return "distance: number expected";
            if (typeof message.online !== "boolean")
                return "online: boolean expected";
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
            if (!$util.isInteger(message.age))
                return "age: integer expected";
            if (!$util.isString(message.constellation))
                return "constellation: string expected";
            if (!$util.isString(message.signature))
                return "signature: string expected";
            return null;
        };

        /**
         * Creates a FriendInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendInfoMsg} FriendInfoMsg
         */
        FriendInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendInfoMsg)
                return object;
            var message = new $root.protocol.FriendInfoMsg();
            if (object.friendId != null)
                message.friendId = object.friendId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.distance != null)
                message.distance = Number(object.distance);
            if (object.online != null)
                message.online = Boolean(object.online);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.age != null)
                message.age = object.age | 0;
            if (object.constellation != null)
                message.constellation = String(object.constellation);
            if (object.signature != null)
                message.signature = String(object.signature);
            return message;
        };

        /**
         * Creates a plain object from a FriendInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendInfoMsg
         * @static
         * @param {protocol.FriendInfoMsg} message FriendInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.friendId = 0;
                object.nickName = "";
                object.headPic = "";
                object.distance = 0;
                object.online = false;
                object.sex = 0;
                object.age = 0;
                object.constellation = "";
                object.signature = "";
            }
            if (message.friendId != null && message.hasOwnProperty("friendId"))
                object.friendId = message.friendId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = options.json && !isFinite(message.distance) ? String(message.distance) : message.distance;
            if (message.online != null && message.hasOwnProperty("online"))
                object.online = message.online;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.constellation != null && message.hasOwnProperty("constellation"))
                object.constellation = message.constellation;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            return object;
        };

        /**
         * Converts this FriendInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendInfoMsg;
    })();

    protocol.FriendRecentListMsg = (function() {

        /**
         * Properties of a FriendRecentListMsg.
         * @memberof protocol
         * @interface IFriendRecentListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendRecentListMsg list
         */

        /**
         * Constructs a new FriendRecentListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendRecentListMsg.
         * @implements IFriendRecentListMsg
         * @constructor
         * @param {protocol.IFriendRecentListMsg=} [properties] Properties to set
         */
        function FriendRecentListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRecentListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendRecentListMsg
         * @instance
         */
        FriendRecentListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendRecentListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg=} [properties] Properties to set
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg instance
         */
        FriendRecentListMsg.create = function create(properties) {
            return new FriendRecentListMsg(properties);
        };

        /**
         * Encodes the specified FriendRecentListMsg message. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg} message FriendRecentListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRecentListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendRecentListMsg message, length delimited. Does not implicitly {@link protocol.FriendRecentListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.IFriendRecentListMsg} message FriendRecentListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRecentListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRecentListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendRecentListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRecentListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRecentListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRecentListMsg message.
         * @function verify
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRecentListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendRecentListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendRecentListMsg} FriendRecentListMsg
         */
        FriendRecentListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendRecentListMsg)
                return object;
            var message = new $root.protocol.FriendRecentListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendRecentListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendRecentListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendRecentListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendRecentListMsg
         * @static
         * @param {protocol.FriendRecentListMsg} message FriendRecentListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRecentListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendRecentListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendRecentListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRecentListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendRecentListMsg;
    })();

    protocol.FriendNearbyListMsg = (function() {

        /**
         * Properties of a FriendNearbyListMsg.
         * @memberof protocol
         * @interface IFriendNearbyListMsg
         * @property {Array.<protocol.IFriendInfoMsg>|null} [list] FriendNearbyListMsg list
         */

        /**
         * Constructs a new FriendNearbyListMsg.
         * @memberof protocol
         * @classdesc Represents a FriendNearbyListMsg.
         * @implements IFriendNearbyListMsg
         * @constructor
         * @param {protocol.IFriendNearbyListMsg=} [properties] Properties to set
         */
        function FriendNearbyListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendNearbyListMsg list.
         * @member {Array.<protocol.IFriendInfoMsg>} list
         * @memberof protocol.FriendNearbyListMsg
         * @instance
         */
        FriendNearbyListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new FriendNearbyListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg=} [properties] Properties to set
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg instance
         */
        FriendNearbyListMsg.create = function create(properties) {
            return new FriendNearbyListMsg(properties);
        };

        /**
         * Encodes the specified FriendNearbyListMsg message. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg} message FriendNearbyListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendNearbyListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.FriendInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FriendNearbyListMsg message, length delimited. Does not implicitly {@link protocol.FriendNearbyListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.IFriendNearbyListMsg} message FriendNearbyListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendNearbyListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendNearbyListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FriendNearbyListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.FriendInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendNearbyListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendNearbyListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendNearbyListMsg message.
         * @function verify
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendNearbyListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.FriendInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FriendNearbyListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FriendNearbyListMsg} FriendNearbyListMsg
         */
        FriendNearbyListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FriendNearbyListMsg)
                return object;
            var message = new $root.protocol.FriendNearbyListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.FriendNearbyListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.FriendNearbyListMsg.list: object expected");
                    message.list[i] = $root.protocol.FriendInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FriendNearbyListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FriendNearbyListMsg
         * @static
         * @param {protocol.FriendNearbyListMsg} message FriendNearbyListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendNearbyListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.FriendInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this FriendNearbyListMsg to JSON.
         * @function toJSON
         * @memberof protocol.FriendNearbyListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendNearbyListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendNearbyListMsg;
    })();

    protocol.GameOverReqMsg = (function() {

        /**
         * Properties of a GameOverReqMsg.
         * @memberof protocol
         * @interface IGameOverReqMsg
         * @property {number} missionId GameOverReqMsg missionId
         * @property {number} process GameOverReqMsg process
         * @property {string} gold GameOverReqMsg gold
         * @property {string} clickNum GameOverReqMsg clickNum
         * @property {string} dps GameOverReqMsg dps
         * @property {string} clickHurt GameOverReqMsg clickHurt
         * @property {string} monsterHp GameOverReqMsg monsterHp
         * @property {number} secondClickNum GameOverReqMsg secondClickNum
         * @property {string} criticalClickNum GameOverReqMsg criticalClickNum
         * @property {number} secondCriticalClickNum GameOverReqMsg secondCriticalClickNum
         * @property {string} heroSouls GameOverReqMsg heroSouls
         * @property {number} monsterNum GameOverReqMsg monsterNum
         * @property {number} bossNum GameOverReqMsg bossNum
         * @property {number} boxMonsterNum GameOverReqMsg boxMonsterNum
         */

        /**
         * Constructs a new GameOverReqMsg.
         * @memberof protocol
         * @classdesc Represents a GameOverReqMsg.
         * @implements IGameOverReqMsg
         * @constructor
         * @param {protocol.IGameOverReqMsg=} [properties] Properties to set
         */
        function GameOverReqMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameOverReqMsg missionId.
         * @member {number} missionId
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.missionId = 0;

        /**
         * GameOverReqMsg process.
         * @member {number} process
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.process = 0;

        /**
         * GameOverReqMsg gold.
         * @member {string} gold
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.gold = "";

        /**
         * GameOverReqMsg clickNum.
         * @member {string} clickNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.clickNum = "";

        /**
         * GameOverReqMsg dps.
         * @member {string} dps
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.dps = "";

        /**
         * GameOverReqMsg clickHurt.
         * @member {string} clickHurt
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.clickHurt = "";

        /**
         * GameOverReqMsg monsterHp.
         * @member {string} monsterHp
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.monsterHp = "";

        /**
         * GameOverReqMsg secondClickNum.
         * @member {number} secondClickNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.secondClickNum = 0;

        /**
         * GameOverReqMsg criticalClickNum.
         * @member {string} criticalClickNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.criticalClickNum = "";

        /**
         * GameOverReqMsg secondCriticalClickNum.
         * @member {number} secondCriticalClickNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.secondCriticalClickNum = 0;

        /**
         * GameOverReqMsg heroSouls.
         * @member {string} heroSouls
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.heroSouls = "";

        /**
         * GameOverReqMsg monsterNum.
         * @member {number} monsterNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.monsterNum = 0;

        /**
         * GameOverReqMsg bossNum.
         * @member {number} bossNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.bossNum = 0;

        /**
         * GameOverReqMsg boxMonsterNum.
         * @member {number} boxMonsterNum
         * @memberof protocol.GameOverReqMsg
         * @instance
         */
        GameOverReqMsg.prototype.boxMonsterNum = 0;

        /**
         * Creates a new GameOverReqMsg instance using the specified properties.
         * @function create
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg=} [properties] Properties to set
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg instance
         */
        GameOverReqMsg.create = function create(properties) {
            return new GameOverReqMsg(properties);
        };

        /**
         * Encodes the specified GameOverReqMsg message. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg} message GameOverReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverReqMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.missionId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.process);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.gold);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.clickNum);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.dps);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.clickHurt);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.monsterHp);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.secondClickNum);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.criticalClickNum);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.secondCriticalClickNum);
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.heroSouls);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.monsterNum);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bossNum);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.boxMonsterNum);
            return writer;
        };

        /**
         * Encodes the specified GameOverReqMsg message, length delimited. Does not implicitly {@link protocol.GameOverReqMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.IGameOverReqMsg} message GameOverReqMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameOverReqMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverReqMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GameOverReqMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.missionId = reader.int32();
                    break;
                case 2:
                    message.process = reader.int32();
                    break;
                case 3:
                    message.gold = reader.string();
                    break;
                case 4:
                    message.clickNum = reader.string();
                    break;
                case 5:
                    message.dps = reader.string();
                    break;
                case 6:
                    message.clickHurt = reader.string();
                    break;
                case 7:
                    message.monsterHp = reader.string();
                    break;
                case 8:
                    message.secondClickNum = reader.int32();
                    break;
                case 9:
                    message.criticalClickNum = reader.string();
                    break;
                case 10:
                    message.secondCriticalClickNum = reader.int32();
                    break;
                case 11:
                    message.heroSouls = reader.string();
                    break;
                case 12:
                    message.monsterNum = reader.int32();
                    break;
                case 13:
                    message.bossNum = reader.int32();
                    break;
                case 14:
                    message.boxMonsterNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            if (!message.hasOwnProperty("process"))
                throw $util.ProtocolError("missing required 'process'", { instance: message });
            if (!message.hasOwnProperty("gold"))
                throw $util.ProtocolError("missing required 'gold'", { instance: message });
            if (!message.hasOwnProperty("clickNum"))
                throw $util.ProtocolError("missing required 'clickNum'", { instance: message });
            if (!message.hasOwnProperty("dps"))
                throw $util.ProtocolError("missing required 'dps'", { instance: message });
            if (!message.hasOwnProperty("clickHurt"))
                throw $util.ProtocolError("missing required 'clickHurt'", { instance: message });
            if (!message.hasOwnProperty("monsterHp"))
                throw $util.ProtocolError("missing required 'monsterHp'", { instance: message });
            if (!message.hasOwnProperty("secondClickNum"))
                throw $util.ProtocolError("missing required 'secondClickNum'", { instance: message });
            if (!message.hasOwnProperty("criticalClickNum"))
                throw $util.ProtocolError("missing required 'criticalClickNum'", { instance: message });
            if (!message.hasOwnProperty("secondCriticalClickNum"))
                throw $util.ProtocolError("missing required 'secondCriticalClickNum'", { instance: message });
            if (!message.hasOwnProperty("heroSouls"))
                throw $util.ProtocolError("missing required 'heroSouls'", { instance: message });
            if (!message.hasOwnProperty("monsterNum"))
                throw $util.ProtocolError("missing required 'monsterNum'", { instance: message });
            if (!message.hasOwnProperty("bossNum"))
                throw $util.ProtocolError("missing required 'bossNum'", { instance: message });
            if (!message.hasOwnProperty("boxMonsterNum"))
                throw $util.ProtocolError("missing required 'boxMonsterNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameOverReqMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameOverReqMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameOverReqMsg message.
         * @function verify
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameOverReqMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            if (!$util.isInteger(message.process))
                return "process: integer expected";
            if (!$util.isString(message.gold))
                return "gold: string expected";
            if (!$util.isString(message.clickNum))
                return "clickNum: string expected";
            if (!$util.isString(message.dps))
                return "dps: string expected";
            if (!$util.isString(message.clickHurt))
                return "clickHurt: string expected";
            if (!$util.isString(message.monsterHp))
                return "monsterHp: string expected";
            if (!$util.isInteger(message.secondClickNum))
                return "secondClickNum: integer expected";
            if (!$util.isString(message.criticalClickNum))
                return "criticalClickNum: string expected";
            if (!$util.isInteger(message.secondCriticalClickNum))
                return "secondCriticalClickNum: integer expected";
            if (!$util.isString(message.heroSouls))
                return "heroSouls: string expected";
            if (!$util.isInteger(message.monsterNum))
                return "monsterNum: integer expected";
            if (!$util.isInteger(message.bossNum))
                return "bossNum: integer expected";
            if (!$util.isInteger(message.boxMonsterNum))
                return "boxMonsterNum: integer expected";
            return null;
        };

        /**
         * Creates a GameOverReqMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GameOverReqMsg} GameOverReqMsg
         */
        GameOverReqMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GameOverReqMsg)
                return object;
            var message = new $root.protocol.GameOverReqMsg();
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            if (object.process != null)
                message.process = object.process | 0;
            if (object.gold != null)
                message.gold = String(object.gold);
            if (object.clickNum != null)
                message.clickNum = String(object.clickNum);
            if (object.dps != null)
                message.dps = String(object.dps);
            if (object.clickHurt != null)
                message.clickHurt = String(object.clickHurt);
            if (object.monsterHp != null)
                message.monsterHp = String(object.monsterHp);
            if (object.secondClickNum != null)
                message.secondClickNum = object.secondClickNum | 0;
            if (object.criticalClickNum != null)
                message.criticalClickNum = String(object.criticalClickNum);
            if (object.secondCriticalClickNum != null)
                message.secondCriticalClickNum = object.secondCriticalClickNum | 0;
            if (object.heroSouls != null)
                message.heroSouls = String(object.heroSouls);
            if (object.monsterNum != null)
                message.monsterNum = object.monsterNum | 0;
            if (object.bossNum != null)
                message.bossNum = object.bossNum | 0;
            if (object.boxMonsterNum != null)
                message.boxMonsterNum = object.boxMonsterNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameOverReqMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GameOverReqMsg
         * @static
         * @param {protocol.GameOverReqMsg} message GameOverReqMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameOverReqMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.missionId = 0;
                object.process = 0;
                object.gold = "";
                object.clickNum = "";
                object.dps = "";
                object.clickHurt = "";
                object.monsterHp = "";
                object.secondClickNum = 0;
                object.criticalClickNum = "";
                object.secondCriticalClickNum = 0;
                object.heroSouls = "";
                object.monsterNum = 0;
                object.bossNum = 0;
                object.boxMonsterNum = 0;
            }
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.clickNum != null && message.hasOwnProperty("clickNum"))
                object.clickNum = message.clickNum;
            if (message.dps != null && message.hasOwnProperty("dps"))
                object.dps = message.dps;
            if (message.clickHurt != null && message.hasOwnProperty("clickHurt"))
                object.clickHurt = message.clickHurt;
            if (message.monsterHp != null && message.hasOwnProperty("monsterHp"))
                object.monsterHp = message.monsterHp;
            if (message.secondClickNum != null && message.hasOwnProperty("secondClickNum"))
                object.secondClickNum = message.secondClickNum;
            if (message.criticalClickNum != null && message.hasOwnProperty("criticalClickNum"))
                object.criticalClickNum = message.criticalClickNum;
            if (message.secondCriticalClickNum != null && message.hasOwnProperty("secondCriticalClickNum"))
                object.secondCriticalClickNum = message.secondCriticalClickNum;
            if (message.heroSouls != null && message.hasOwnProperty("heroSouls"))
                object.heroSouls = message.heroSouls;
            if (message.monsterNum != null && message.hasOwnProperty("monsterNum"))
                object.monsterNum = message.monsterNum;
            if (message.bossNum != null && message.hasOwnProperty("bossNum"))
                object.bossNum = message.bossNum;
            if (message.boxMonsterNum != null && message.hasOwnProperty("boxMonsterNum"))
                object.boxMonsterNum = message.boxMonsterNum;
            return object;
        };

        /**
         * Converts this GameOverReqMsg to JSON.
         * @function toJSON
         * @memberof protocol.GameOverReqMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameOverReqMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverReqMsg;
    })();

    protocol.HandleOfflineAwardMsg = (function() {

        /**
         * Properties of a HandleOfflineAwardMsg.
         * @memberof protocol
         * @interface IHandleOfflineAwardMsg
         * @property {number} missionNum HandleOfflineAwardMsg missionNum
         * @property {string} goldNum HandleOfflineAwardMsg goldNum
         * @property {string} heroSouls HandleOfflineAwardMsg heroSouls
         */

        /**
         * Constructs a new HandleOfflineAwardMsg.
         * @memberof protocol
         * @classdesc Represents a HandleOfflineAwardMsg.
         * @implements IHandleOfflineAwardMsg
         * @constructor
         * @param {protocol.IHandleOfflineAwardMsg=} [properties] Properties to set
         */
        function HandleOfflineAwardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandleOfflineAwardMsg missionNum.
         * @member {number} missionNum
         * @memberof protocol.HandleOfflineAwardMsg
         * @instance
         */
        HandleOfflineAwardMsg.prototype.missionNum = 0;

        /**
         * HandleOfflineAwardMsg goldNum.
         * @member {string} goldNum
         * @memberof protocol.HandleOfflineAwardMsg
         * @instance
         */
        HandleOfflineAwardMsg.prototype.goldNum = "";

        /**
         * HandleOfflineAwardMsg heroSouls.
         * @member {string} heroSouls
         * @memberof protocol.HandleOfflineAwardMsg
         * @instance
         */
        HandleOfflineAwardMsg.prototype.heroSouls = "";

        /**
         * Creates a new HandleOfflineAwardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {protocol.IHandleOfflineAwardMsg=} [properties] Properties to set
         * @returns {protocol.HandleOfflineAwardMsg} HandleOfflineAwardMsg instance
         */
        HandleOfflineAwardMsg.create = function create(properties) {
            return new HandleOfflineAwardMsg(properties);
        };

        /**
         * Encodes the specified HandleOfflineAwardMsg message. Does not implicitly {@link protocol.HandleOfflineAwardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {protocol.IHandleOfflineAwardMsg} message HandleOfflineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleOfflineAwardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.missionNum);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.goldNum);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroSouls);
            return writer;
        };

        /**
         * Encodes the specified HandleOfflineAwardMsg message, length delimited. Does not implicitly {@link protocol.HandleOfflineAwardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {protocol.IHandleOfflineAwardMsg} message HandleOfflineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandleOfflineAwardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandleOfflineAwardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HandleOfflineAwardMsg} HandleOfflineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleOfflineAwardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HandleOfflineAwardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.missionNum = reader.int32();
                    break;
                case 2:
                    message.goldNum = reader.string();
                    break;
                case 3:
                    message.heroSouls = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("missionNum"))
                throw $util.ProtocolError("missing required 'missionNum'", { instance: message });
            if (!message.hasOwnProperty("goldNum"))
                throw $util.ProtocolError("missing required 'goldNum'", { instance: message });
            if (!message.hasOwnProperty("heroSouls"))
                throw $util.ProtocolError("missing required 'heroSouls'", { instance: message });
            return message;
        };

        /**
         * Decodes a HandleOfflineAwardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HandleOfflineAwardMsg} HandleOfflineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandleOfflineAwardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandleOfflineAwardMsg message.
         * @function verify
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandleOfflineAwardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.missionNum))
                return "missionNum: integer expected";
            if (!$util.isString(message.goldNum))
                return "goldNum: string expected";
            if (!$util.isString(message.heroSouls))
                return "heroSouls: string expected";
            return null;
        };

        /**
         * Creates a HandleOfflineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HandleOfflineAwardMsg} HandleOfflineAwardMsg
         */
        HandleOfflineAwardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HandleOfflineAwardMsg)
                return object;
            var message = new $root.protocol.HandleOfflineAwardMsg();
            if (object.missionNum != null)
                message.missionNum = object.missionNum | 0;
            if (object.goldNum != null)
                message.goldNum = String(object.goldNum);
            if (object.heroSouls != null)
                message.heroSouls = String(object.heroSouls);
            return message;
        };

        /**
         * Creates a plain object from a HandleOfflineAwardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HandleOfflineAwardMsg
         * @static
         * @param {protocol.HandleOfflineAwardMsg} message HandleOfflineAwardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandleOfflineAwardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.missionNum = 0;
                object.goldNum = "";
                object.heroSouls = "";
            }
            if (message.missionNum != null && message.hasOwnProperty("missionNum"))
                object.missionNum = message.missionNum;
            if (message.goldNum != null && message.hasOwnProperty("goldNum"))
                object.goldNum = message.goldNum;
            if (message.heroSouls != null && message.hasOwnProperty("heroSouls"))
                object.heroSouls = message.heroSouls;
            return object;
        };

        /**
         * Converts this HandleOfflineAwardMsg to JSON.
         * @function toJSON
         * @memberof protocol.HandleOfflineAwardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandleOfflineAwardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HandleOfflineAwardMsg;
    })();

    protocol.InviteFriendListMsg = (function() {

        /**
         * Properties of an InviteFriendListMsg.
         * @memberof protocol
         * @interface IInviteFriendListMsg
         * @property {Array.<protocol.IInviteFriendMsg>|null} [list] InviteFriendListMsg list
         */

        /**
         * Constructs a new InviteFriendListMsg.
         * @memberof protocol
         * @classdesc Represents an InviteFriendListMsg.
         * @implements IInviteFriendListMsg
         * @constructor
         * @param {protocol.IInviteFriendListMsg=} [properties] Properties to set
         */
        function InviteFriendListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteFriendListMsg list.
         * @member {Array.<protocol.IInviteFriendMsg>} list
         * @memberof protocol.InviteFriendListMsg
         * @instance
         */
        InviteFriendListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new InviteFriendListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {protocol.IInviteFriendListMsg=} [properties] Properties to set
         * @returns {protocol.InviteFriendListMsg} InviteFriendListMsg instance
         */
        InviteFriendListMsg.create = function create(properties) {
            return new InviteFriendListMsg(properties);
        };

        /**
         * Encodes the specified InviteFriendListMsg message. Does not implicitly {@link protocol.InviteFriendListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {protocol.IInviteFriendListMsg} message InviteFriendListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.InviteFriendMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InviteFriendListMsg message, length delimited. Does not implicitly {@link protocol.InviteFriendListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {protocol.IInviteFriendListMsg} message InviteFriendListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteFriendListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.InviteFriendListMsg} InviteFriendListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.InviteFriendListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.InviteFriendMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InviteFriendListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.InviteFriendListMsg} InviteFriendListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteFriendListMsg message.
         * @function verify
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteFriendListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.InviteFriendMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InviteFriendListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.InviteFriendListMsg} InviteFriendListMsg
         */
        InviteFriendListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.InviteFriendListMsg)
                return object;
            var message = new $root.protocol.InviteFriendListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.InviteFriendListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.InviteFriendListMsg.list: object expected");
                    message.list[i] = $root.protocol.InviteFriendMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InviteFriendListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.InviteFriendListMsg
         * @static
         * @param {protocol.InviteFriendListMsg} message InviteFriendListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteFriendListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.InviteFriendMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this InviteFriendListMsg to JSON.
         * @function toJSON
         * @memberof protocol.InviteFriendListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteFriendListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteFriendListMsg;
    })();

    protocol.InviteFriendMsg = (function() {

        /**
         * Properties of an InviteFriendMsg.
         * @memberof protocol
         * @interface IInviteFriendMsg
         * @property {string} userName InviteFriendMsg userName
         * @property {string} nickName InviteFriendMsg nickName
         * @property {string} headPic InviteFriendMsg headPic
         * @property {number} missionId InviteFriendMsg missionId
         * @property {string} awardState InviteFriendMsg awardState
         */

        /**
         * Constructs a new InviteFriendMsg.
         * @memberof protocol
         * @classdesc Represents an InviteFriendMsg.
         * @implements IInviteFriendMsg
         * @constructor
         * @param {protocol.IInviteFriendMsg=} [properties] Properties to set
         */
        function InviteFriendMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteFriendMsg userName.
         * @member {string} userName
         * @memberof protocol.InviteFriendMsg
         * @instance
         */
        InviteFriendMsg.prototype.userName = "";

        /**
         * InviteFriendMsg nickName.
         * @member {string} nickName
         * @memberof protocol.InviteFriendMsg
         * @instance
         */
        InviteFriendMsg.prototype.nickName = "";

        /**
         * InviteFriendMsg headPic.
         * @member {string} headPic
         * @memberof protocol.InviteFriendMsg
         * @instance
         */
        InviteFriendMsg.prototype.headPic = "";

        /**
         * InviteFriendMsg missionId.
         * @member {number} missionId
         * @memberof protocol.InviteFriendMsg
         * @instance
         */
        InviteFriendMsg.prototype.missionId = 0;

        /**
         * InviteFriendMsg awardState.
         * @member {string} awardState
         * @memberof protocol.InviteFriendMsg
         * @instance
         */
        InviteFriendMsg.prototype.awardState = "";

        /**
         * Creates a new InviteFriendMsg instance using the specified properties.
         * @function create
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {protocol.IInviteFriendMsg=} [properties] Properties to set
         * @returns {protocol.InviteFriendMsg} InviteFriendMsg instance
         */
        InviteFriendMsg.create = function create(properties) {
            return new InviteFriendMsg(properties);
        };

        /**
         * Encodes the specified InviteFriendMsg message. Does not implicitly {@link protocol.InviteFriendMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {protocol.IInviteFriendMsg} message InviteFriendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.missionId);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.awardState);
            return writer;
        };

        /**
         * Encodes the specified InviteFriendMsg message, length delimited. Does not implicitly {@link protocol.InviteFriendMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {protocol.IInviteFriendMsg} message InviteFriendMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteFriendMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteFriendMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.InviteFriendMsg} InviteFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.InviteFriendMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.missionId = reader.int32();
                    break;
                case 5:
                    message.awardState = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userName"))
                throw $util.ProtocolError("missing required 'userName'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            if (!message.hasOwnProperty("awardState"))
                throw $util.ProtocolError("missing required 'awardState'", { instance: message });
            return message;
        };

        /**
         * Decodes an InviteFriendMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.InviteFriendMsg} InviteFriendMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteFriendMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteFriendMsg message.
         * @function verify
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteFriendMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userName))
                return "userName: string expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            if (!$util.isString(message.awardState))
                return "awardState: string expected";
            return null;
        };

        /**
         * Creates an InviteFriendMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.InviteFriendMsg} InviteFriendMsg
         */
        InviteFriendMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.InviteFriendMsg)
                return object;
            var message = new $root.protocol.InviteFriendMsg();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            if (object.awardState != null)
                message.awardState = String(object.awardState);
            return message;
        };

        /**
         * Creates a plain object from an InviteFriendMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.InviteFriendMsg
         * @static
         * @param {protocol.InviteFriendMsg} message InviteFriendMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteFriendMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userName = "";
                object.nickName = "";
                object.headPic = "";
                object.missionId = 0;
                object.awardState = "";
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            if (message.awardState != null && message.hasOwnProperty("awardState"))
                object.awardState = message.awardState;
            return object;
        };

        /**
         * Converts this InviteFriendMsg to JSON.
         * @function toJSON
         * @memberof protocol.InviteFriendMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteFriendMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteFriendMsg;
    })();

    protocol.InviteUserNamesMsg = (function() {

        /**
         * Properties of an InviteUserNamesMsg.
         * @memberof protocol
         * @interface IInviteUserNamesMsg
         * @property {Array.<string>|null} [userNameList] InviteUserNamesMsg userNameList
         */

        /**
         * Constructs a new InviteUserNamesMsg.
         * @memberof protocol
         * @classdesc Represents an InviteUserNamesMsg.
         * @implements IInviteUserNamesMsg
         * @constructor
         * @param {protocol.IInviteUserNamesMsg=} [properties] Properties to set
         */
        function InviteUserNamesMsg(properties) {
            this.userNameList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InviteUserNamesMsg userNameList.
         * @member {Array.<string>} userNameList
         * @memberof protocol.InviteUserNamesMsg
         * @instance
         */
        InviteUserNamesMsg.prototype.userNameList = $util.emptyArray;

        /**
         * Creates a new InviteUserNamesMsg instance using the specified properties.
         * @function create
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {protocol.IInviteUserNamesMsg=} [properties] Properties to set
         * @returns {protocol.InviteUserNamesMsg} InviteUserNamesMsg instance
         */
        InviteUserNamesMsg.create = function create(properties) {
            return new InviteUserNamesMsg(properties);
        };

        /**
         * Encodes the specified InviteUserNamesMsg message. Does not implicitly {@link protocol.InviteUserNamesMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {protocol.IInviteUserNamesMsg} message InviteUserNamesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteUserNamesMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userNameList != null && message.userNameList.length)
                for (var i = 0; i < message.userNameList.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userNameList[i]);
            return writer;
        };

        /**
         * Encodes the specified InviteUserNamesMsg message, length delimited. Does not implicitly {@link protocol.InviteUserNamesMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {protocol.IInviteUserNamesMsg} message InviteUserNamesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InviteUserNamesMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InviteUserNamesMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.InviteUserNamesMsg} InviteUserNamesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteUserNamesMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.InviteUserNamesMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.userNameList && message.userNameList.length))
                        message.userNameList = [];
                    message.userNameList.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InviteUserNamesMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.InviteUserNamesMsg} InviteUserNamesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InviteUserNamesMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InviteUserNamesMsg message.
         * @function verify
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InviteUserNamesMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userNameList != null && message.hasOwnProperty("userNameList")) {
                if (!Array.isArray(message.userNameList))
                    return "userNameList: array expected";
                for (var i = 0; i < message.userNameList.length; ++i)
                    if (!$util.isString(message.userNameList[i]))
                        return "userNameList: string[] expected";
            }
            return null;
        };

        /**
         * Creates an InviteUserNamesMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.InviteUserNamesMsg} InviteUserNamesMsg
         */
        InviteUserNamesMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.InviteUserNamesMsg)
                return object;
            var message = new $root.protocol.InviteUserNamesMsg();
            if (object.userNameList) {
                if (!Array.isArray(object.userNameList))
                    throw TypeError(".protocol.InviteUserNamesMsg.userNameList: array expected");
                message.userNameList = [];
                for (var i = 0; i < object.userNameList.length; ++i)
                    message.userNameList[i] = String(object.userNameList[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an InviteUserNamesMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.InviteUserNamesMsg
         * @static
         * @param {protocol.InviteUserNamesMsg} message InviteUserNamesMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InviteUserNamesMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userNameList = [];
            if (message.userNameList && message.userNameList.length) {
                object.userNameList = [];
                for (var j = 0; j < message.userNameList.length; ++j)
                    object.userNameList[j] = message.userNameList[j];
            }
            return object;
        };

        /**
         * Converts this InviteUserNamesMsg to JSON.
         * @function toJSON
         * @memberof protocol.InviteUserNamesMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InviteUserNamesMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InviteUserNamesMsg;
    })();

    protocol.PlayerOnlineAwardMsg = (function() {

        /**
         * Properties of a PlayerOnlineAwardMsg.
         * @memberof protocol
         * @interface IPlayerOnlineAwardMsg
         * @property {string} coodTime PlayerOnlineAwardMsg coodTime
         * @property {number} onlineAwardNum PlayerOnlineAwardMsg onlineAwardNum
         */

        /**
         * Constructs a new PlayerOnlineAwardMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerOnlineAwardMsg.
         * @implements IPlayerOnlineAwardMsg
         * @constructor
         * @param {protocol.IPlayerOnlineAwardMsg=} [properties] Properties to set
         */
        function PlayerOnlineAwardMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerOnlineAwardMsg coodTime.
         * @member {string} coodTime
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         */
        PlayerOnlineAwardMsg.prototype.coodTime = "";

        /**
         * PlayerOnlineAwardMsg onlineAwardNum.
         * @member {number} onlineAwardNum
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         */
        PlayerOnlineAwardMsg.prototype.onlineAwardNum = 0;

        /**
         * Creates a new PlayerOnlineAwardMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg=} [properties] Properties to set
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg instance
         */
        PlayerOnlineAwardMsg.create = function create(properties) {
            return new PlayerOnlineAwardMsg(properties);
        };

        /**
         * Encodes the specified PlayerOnlineAwardMsg message. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg} message PlayerOnlineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOnlineAwardMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.coodTime);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onlineAwardNum);
            return writer;
        };

        /**
         * Encodes the specified PlayerOnlineAwardMsg message, length delimited. Does not implicitly {@link protocol.PlayerOnlineAwardMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.IPlayerOnlineAwardMsg} message PlayerOnlineAwardMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerOnlineAwardMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOnlineAwardMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerOnlineAwardMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coodTime = reader.string();
                    break;
                case 2:
                    message.onlineAwardNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("coodTime"))
                throw $util.ProtocolError("missing required 'coodTime'", { instance: message });
            if (!message.hasOwnProperty("onlineAwardNum"))
                throw $util.ProtocolError("missing required 'onlineAwardNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerOnlineAwardMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerOnlineAwardMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerOnlineAwardMsg message.
         * @function verify
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerOnlineAwardMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.coodTime))
                return "coodTime: string expected";
            if (!$util.isInteger(message.onlineAwardNum))
                return "onlineAwardNum: integer expected";
            return null;
        };

        /**
         * Creates a PlayerOnlineAwardMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerOnlineAwardMsg} PlayerOnlineAwardMsg
         */
        PlayerOnlineAwardMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerOnlineAwardMsg)
                return object;
            var message = new $root.protocol.PlayerOnlineAwardMsg();
            if (object.coodTime != null)
                message.coodTime = String(object.coodTime);
            if (object.onlineAwardNum != null)
                message.onlineAwardNum = object.onlineAwardNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerOnlineAwardMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerOnlineAwardMsg
         * @static
         * @param {protocol.PlayerOnlineAwardMsg} message PlayerOnlineAwardMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerOnlineAwardMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.coodTime = "";
                object.onlineAwardNum = 0;
            }
            if (message.coodTime != null && message.hasOwnProperty("coodTime"))
                object.coodTime = message.coodTime;
            if (message.onlineAwardNum != null && message.hasOwnProperty("onlineAwardNum"))
                object.onlineAwardNum = message.onlineAwardNum;
            return object;
        };

        /**
         * Converts this PlayerOnlineAwardMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerOnlineAwardMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerOnlineAwardMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerOnlineAwardMsg;
    })();

    protocol.PlayerMonthLoginMsg = (function() {

        /**
         * Properties of a PlayerMonthLoginMsg.
         * @memberof protocol
         * @interface IPlayerMonthLoginMsg
         * @property {number} loginDayNum PlayerMonthLoginMsg loginDayNum
         * @property {Array.<number>|null} [awardState] PlayerMonthLoginMsg awardState
         * @property {string} flushTime PlayerMonthLoginMsg flushTime
         */

        /**
         * Constructs a new PlayerMonthLoginMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerMonthLoginMsg.
         * @implements IPlayerMonthLoginMsg
         * @constructor
         * @param {protocol.IPlayerMonthLoginMsg=} [properties] Properties to set
         */
        function PlayerMonthLoginMsg(properties) {
            this.awardState = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMonthLoginMsg loginDayNum.
         * @member {number} loginDayNum
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.loginDayNum = 0;

        /**
         * PlayerMonthLoginMsg awardState.
         * @member {Array.<number>} awardState
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.awardState = $util.emptyArray;

        /**
         * PlayerMonthLoginMsg flushTime.
         * @member {string} flushTime
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         */
        PlayerMonthLoginMsg.prototype.flushTime = "";

        /**
         * Creates a new PlayerMonthLoginMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg=} [properties] Properties to set
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg instance
         */
        PlayerMonthLoginMsg.create = function create(properties) {
            return new PlayerMonthLoginMsg(properties);
        };

        /**
         * Encodes the specified PlayerMonthLoginMsg message. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg} message PlayerMonthLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMonthLoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.loginDayNum);
            if (message.awardState != null && message.awardState.length)
                for (var i = 0; i < message.awardState.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.awardState[i]);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.flushTime);
            return writer;
        };

        /**
         * Encodes the specified PlayerMonthLoginMsg message, length delimited. Does not implicitly {@link protocol.PlayerMonthLoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.IPlayerMonthLoginMsg} message PlayerMonthLoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMonthLoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMonthLoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerMonthLoginMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginDayNum = reader.int32();
                    break;
                case 4:
                    if (!(message.awardState && message.awardState.length))
                        message.awardState = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.awardState.push(reader.int32());
                    } else
                        message.awardState.push(reader.int32());
                    break;
                case 5:
                    message.flushTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("loginDayNum"))
                throw $util.ProtocolError("missing required 'loginDayNum'", { instance: message });
            if (!message.hasOwnProperty("flushTime"))
                throw $util.ProtocolError("missing required 'flushTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerMonthLoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMonthLoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMonthLoginMsg message.
         * @function verify
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMonthLoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.loginDayNum))
                return "loginDayNum: integer expected";
            if (message.awardState != null && message.hasOwnProperty("awardState")) {
                if (!Array.isArray(message.awardState))
                    return "awardState: array expected";
                for (var i = 0; i < message.awardState.length; ++i)
                    if (!$util.isInteger(message.awardState[i]))
                        return "awardState: integer[] expected";
            }
            if (!$util.isString(message.flushTime))
                return "flushTime: string expected";
            return null;
        };

        /**
         * Creates a PlayerMonthLoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerMonthLoginMsg} PlayerMonthLoginMsg
         */
        PlayerMonthLoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerMonthLoginMsg)
                return object;
            var message = new $root.protocol.PlayerMonthLoginMsg();
            if (object.loginDayNum != null)
                message.loginDayNum = object.loginDayNum | 0;
            if (object.awardState) {
                if (!Array.isArray(object.awardState))
                    throw TypeError(".protocol.PlayerMonthLoginMsg.awardState: array expected");
                message.awardState = [];
                for (var i = 0; i < object.awardState.length; ++i)
                    message.awardState[i] = object.awardState[i] | 0;
            }
            if (object.flushTime != null)
                message.flushTime = String(object.flushTime);
            return message;
        };

        /**
         * Creates a plain object from a PlayerMonthLoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerMonthLoginMsg
         * @static
         * @param {protocol.PlayerMonthLoginMsg} message PlayerMonthLoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMonthLoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.awardState = [];
            if (options.defaults) {
                object.loginDayNum = 0;
                object.flushTime = "";
            }
            if (message.loginDayNum != null && message.hasOwnProperty("loginDayNum"))
                object.loginDayNum = message.loginDayNum;
            if (message.awardState && message.awardState.length) {
                object.awardState = [];
                for (var j = 0; j < message.awardState.length; ++j)
                    object.awardState[j] = message.awardState[j];
            }
            if (message.flushTime != null && message.hasOwnProperty("flushTime"))
                object.flushTime = message.flushTime;
            return object;
        };

        /**
         * Converts this PlayerMonthLoginMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerMonthLoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMonthLoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerMonthLoginMsg;
    })();

    protocol.MailItemMsg = (function() {

        /**
         * Properties of a MailItemMsg.
         * @memberof protocol
         * @interface IMailItemMsg
         * @property {number} mailId MailItemMsg mailId
         */

        /**
         * Constructs a new MailItemMsg.
         * @memberof protocol
         * @classdesc Represents a MailItemMsg.
         * @implements IMailItemMsg
         * @constructor
         * @param {protocol.IMailItemMsg=} [properties] Properties to set
         */
        function MailItemMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailItemMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailItemMsg
         * @instance
         */
        MailItemMsg.prototype.mailId = 0;

        /**
         * Creates a new MailItemMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg=} [properties] Properties to set
         * @returns {protocol.MailItemMsg} MailItemMsg instance
         */
        MailItemMsg.create = function create(properties) {
            return new MailItemMsg(properties);
        };

        /**
         * Encodes the specified MailItemMsg message. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg} message MailItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailItemMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailItemMsg message, length delimited. Does not implicitly {@link protocol.MailItemMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.IMailItemMsg} message MailItemMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailItemMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailItemMsg} MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailItemMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailItemMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailItemMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailItemMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailItemMsg} MailItemMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailItemMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailItemMsg message.
         * @function verify
         * @memberof protocol.MailItemMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailItemMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailItemMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailItemMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailItemMsg} MailItemMsg
         */
        MailItemMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailItemMsg)
                return object;
            var message = new $root.protocol.MailItemMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailItemMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailItemMsg
         * @static
         * @param {protocol.MailItemMsg} message MailItemMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailItemMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailItemMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailItemMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailItemMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailItemMsg;
    })();

    protocol.ItemResMsgList = (function() {

        /**
         * Properties of an ItemResMsgList.
         * @memberof protocol
         * @interface IItemResMsgList
         * @property {Array.<protocol.IItemResMsg>|null} [itemList] ItemResMsgList itemList
         * @property {number|null} [activityId] ItemResMsgList activityId
         */

        /**
         * Constructs a new ItemResMsgList.
         * @memberof protocol
         * @classdesc Represents an ItemResMsgList.
         * @implements IItemResMsgList
         * @constructor
         * @param {protocol.IItemResMsgList=} [properties] Properties to set
         */
        function ItemResMsgList(properties) {
            this.itemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemResMsgList itemList.
         * @member {Array.<protocol.IItemResMsg>} itemList
         * @memberof protocol.ItemResMsgList
         * @instance
         */
        ItemResMsgList.prototype.itemList = $util.emptyArray;

        /**
         * ItemResMsgList activityId.
         * @member {number} activityId
         * @memberof protocol.ItemResMsgList
         * @instance
         */
        ItemResMsgList.prototype.activityId = 0;

        /**
         * Creates a new ItemResMsgList instance using the specified properties.
         * @function create
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList=} [properties] Properties to set
         * @returns {protocol.ItemResMsgList} ItemResMsgList instance
         */
        ItemResMsgList.create = function create(properties) {
            return new ItemResMsgList(properties);
        };

        /**
         * Encodes the specified ItemResMsgList message. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList} message ItemResMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsgList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemList != null && message.itemList.length)
                for (var i = 0; i < message.itemList.length; ++i)
                    $root.protocol.ItemResMsg.encode(message.itemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.activityId);
            return writer;
        };

        /**
         * Encodes the specified ItemResMsgList message, length delimited. Does not implicitly {@link protocol.ItemResMsgList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.IItemResMsgList} message ItemResMsgList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsgList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsgList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemResMsgList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.itemList && message.itemList.length))
                        message.itemList = [];
                    message.itemList.push($root.protocol.ItemResMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.activityId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemResMsgList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsgList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemResMsgList message.
         * @function verify
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemResMsgList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemList != null && message.hasOwnProperty("itemList")) {
                if (!Array.isArray(message.itemList))
                    return "itemList: array expected";
                for (var i = 0; i < message.itemList.length; ++i) {
                    var error = $root.protocol.ItemResMsg.verify(message.itemList[i]);
                    if (error)
                        return "itemList." + error;
                }
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                if (!$util.isInteger(message.activityId))
                    return "activityId: integer expected";
            return null;
        };

        /**
         * Creates an ItemResMsgList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemResMsgList} ItemResMsgList
         */
        ItemResMsgList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemResMsgList)
                return object;
            var message = new $root.protocol.ItemResMsgList();
            if (object.itemList) {
                if (!Array.isArray(object.itemList))
                    throw TypeError(".protocol.ItemResMsgList.itemList: array expected");
                message.itemList = [];
                for (var i = 0; i < object.itemList.length; ++i) {
                    if (typeof object.itemList[i] !== "object")
                        throw TypeError(".protocol.ItemResMsgList.itemList: object expected");
                    message.itemList[i] = $root.protocol.ItemResMsg.fromObject(object.itemList[i]);
                }
            }
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemResMsgList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemResMsgList
         * @static
         * @param {protocol.ItemResMsgList} message ItemResMsgList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemResMsgList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemList = [];
            if (options.defaults)
                object.activityId = 0;
            if (message.itemList && message.itemList.length) {
                object.itemList = [];
                for (var j = 0; j < message.itemList.length; ++j)
                    object.itemList[j] = $root.protocol.ItemResMsg.toObject(message.itemList[j], options);
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            return object;
        };

        /**
         * Converts this ItemResMsgList to JSON.
         * @function toJSON
         * @memberof protocol.ItemResMsgList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemResMsgList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemResMsgList;
    })();

    protocol.ItemResMsg = (function() {

        /**
         * Properties of an ItemResMsg.
         * @memberof protocol
         * @interface IItemResMsg
         * @property {number} itemId ItemResMsg itemId
         * @property {string} num ItemResMsg num
         * @property {number} type ItemResMsg type
         */

        /**
         * Constructs a new ItemResMsg.
         * @memberof protocol
         * @classdesc Represents an ItemResMsg.
         * @implements IItemResMsg
         * @constructor
         * @param {protocol.IItemResMsg=} [properties] Properties to set
         */
        function ItemResMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemResMsg itemId.
         * @member {number} itemId
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.itemId = 0;

        /**
         * ItemResMsg num.
         * @member {string} num
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.num = "";

        /**
         * ItemResMsg type.
         * @member {number} type
         * @memberof protocol.ItemResMsg
         * @instance
         */
        ItemResMsg.prototype.type = 0;

        /**
         * Creates a new ItemResMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg=} [properties] Properties to set
         * @returns {protocol.ItemResMsg} ItemResMsg instance
         */
        ItemResMsg.create = function create(properties) {
            return new ItemResMsg(properties);
        };

        /**
         * Encodes the specified ItemResMsg message. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg} message ItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.num);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified ItemResMsg message, length delimited. Does not implicitly {@link protocol.ItemResMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.IItemResMsg} message ItemResMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemResMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ItemResMsg} ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ItemResMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.num = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes an ItemResMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ItemResMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ItemResMsg} ItemResMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemResMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemResMsg message.
         * @function verify
         * @memberof protocol.ItemResMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemResMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isString(message.num))
                return "num: string expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            return null;
        };

        /**
         * Creates an ItemResMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ItemResMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ItemResMsg} ItemResMsg
         */
        ItemResMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ItemResMsg)
                return object;
            var message = new $root.protocol.ItemResMsg();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.num != null)
                message.num = String(object.num);
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from an ItemResMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ItemResMsg
         * @static
         * @param {protocol.ItemResMsg} message ItemResMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemResMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.num = "";
                object.type = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this ItemResMsg to JSON.
         * @function toJSON
         * @memberof protocol.ItemResMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemResMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemResMsg;
    })();

    protocol.MailInfoListMsg = (function() {

        /**
         * Properties of a MailInfoListMsg.
         * @memberof protocol
         * @interface IMailInfoListMsg
         * @property {Array.<protocol.IMailInfoMsg>|null} [list] MailInfoListMsg list
         */

        /**
         * Constructs a new MailInfoListMsg.
         * @memberof protocol
         * @classdesc Represents a MailInfoListMsg.
         * @implements IMailInfoListMsg
         * @constructor
         * @param {protocol.IMailInfoListMsg=} [properties] Properties to set
         */
        function MailInfoListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoListMsg list.
         * @member {Array.<protocol.IMailInfoMsg>} list
         * @memberof protocol.MailInfoListMsg
         * @instance
         */
        MailInfoListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new MailInfoListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg=} [properties] Properties to set
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg instance
         */
        MailInfoListMsg.create = function create(properties) {
            return new MailInfoListMsg(properties);
        };

        /**
         * Encodes the specified MailInfoListMsg message. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg} message MailInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.MailInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailInfoListMsg message, length delimited. Does not implicitly {@link protocol.MailInfoListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.IMailInfoListMsg} message MailInfoListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailInfoListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.MailInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MailInfoListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoListMsg message.
         * @function verify
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.MailInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MailInfoListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailInfoListMsg} MailInfoListMsg
         */
        MailInfoListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailInfoListMsg)
                return object;
            var message = new $root.protocol.MailInfoListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.MailInfoListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.MailInfoListMsg.list: object expected");
                    message.list[i] = $root.protocol.MailInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MailInfoListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailInfoListMsg
         * @static
         * @param {protocol.MailInfoListMsg} message MailInfoListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.MailInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this MailInfoListMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailInfoListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailInfoListMsg;
    })();

    protocol.MailInfoMsg = (function() {

        /**
         * Properties of a MailInfoMsg.
         * @memberof protocol
         * @interface IMailInfoMsg
         * @property {number} mailId MailInfoMsg mailId
         * @property {number|Long} sendDate MailInfoMsg sendDate
         * @property {number} senderUserId MailInfoMsg senderUserId
         * @property {string} senderNickname MailInfoMsg senderNickname
         * @property {number} type MailInfoMsg type
         * @property {string} title MailInfoMsg title
         * @property {string} content MailInfoMsg content
         * @property {boolean} read MailInfoMsg read
         * @property {string} itemList MailInfoMsg itemList
         */

        /**
         * Constructs a new MailInfoMsg.
         * @memberof protocol
         * @classdesc Represents a MailInfoMsg.
         * @implements IMailInfoMsg
         * @constructor
         * @param {protocol.IMailInfoMsg=} [properties] Properties to set
         */
        function MailInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailInfoMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.mailId = 0;

        /**
         * MailInfoMsg sendDate.
         * @member {number|Long} sendDate
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.sendDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailInfoMsg senderUserId.
         * @member {number} senderUserId
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.senderUserId = 0;

        /**
         * MailInfoMsg senderNickname.
         * @member {string} senderNickname
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.senderNickname = "";

        /**
         * MailInfoMsg type.
         * @member {number} type
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.type = 0;

        /**
         * MailInfoMsg title.
         * @member {string} title
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.title = "";

        /**
         * MailInfoMsg content.
         * @member {string} content
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.content = "";

        /**
         * MailInfoMsg read.
         * @member {boolean} read
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.read = false;

        /**
         * MailInfoMsg itemList.
         * @member {string} itemList
         * @memberof protocol.MailInfoMsg
         * @instance
         */
        MailInfoMsg.prototype.itemList = "";

        /**
         * Creates a new MailInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg=} [properties] Properties to set
         * @returns {protocol.MailInfoMsg} MailInfoMsg instance
         */
        MailInfoMsg.create = function create(properties) {
            return new MailInfoMsg(properties);
        };

        /**
         * Encodes the specified MailInfoMsg message. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg} message MailInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sendDate);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.senderUserId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderNickname);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.read);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.itemList);
            return writer;
        };

        /**
         * Encodes the specified MailInfoMsg message, length delimited. Does not implicitly {@link protocol.MailInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.IMailInfoMsg} message MailInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                case 2:
                    message.sendDate = reader.int64();
                    break;
                case 3:
                    message.senderUserId = reader.int32();
                    break;
                case 4:
                    message.senderNickname = reader.string();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.content = reader.string();
                    break;
                case 8:
                    message.read = reader.bool();
                    break;
                case 9:
                    message.itemList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            if (!message.hasOwnProperty("sendDate"))
                throw $util.ProtocolError("missing required 'sendDate'", { instance: message });
            if (!message.hasOwnProperty("senderUserId"))
                throw $util.ProtocolError("missing required 'senderUserId'", { instance: message });
            if (!message.hasOwnProperty("senderNickname"))
                throw $util.ProtocolError("missing required 'senderNickname'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("title"))
                throw $util.ProtocolError("missing required 'title'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("read"))
                throw $util.ProtocolError("missing required 'read'", { instance: message });
            if (!message.hasOwnProperty("itemList"))
                throw $util.ProtocolError("missing required 'itemList'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailInfoMsg message.
         * @function verify
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            if (!$util.isInteger(message.sendDate) && !(message.sendDate && $util.isInteger(message.sendDate.low) && $util.isInteger(message.sendDate.high)))
                return "sendDate: integer|Long expected";
            if (!$util.isInteger(message.senderUserId))
                return "senderUserId: integer expected";
            if (!$util.isString(message.senderNickname))
                return "senderNickname: string expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.title))
                return "title: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (typeof message.read !== "boolean")
                return "read: boolean expected";
            if (!$util.isString(message.itemList))
                return "itemList: string expected";
            return null;
        };

        /**
         * Creates a MailInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailInfoMsg} MailInfoMsg
         */
        MailInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailInfoMsg)
                return object;
            var message = new $root.protocol.MailInfoMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            if (object.sendDate != null)
                if ($util.Long)
                    (message.sendDate = $util.Long.fromValue(object.sendDate)).unsigned = false;
                else if (typeof object.sendDate === "string")
                    message.sendDate = parseInt(object.sendDate, 10);
                else if (typeof object.sendDate === "number")
                    message.sendDate = object.sendDate;
                else if (typeof object.sendDate === "object")
                    message.sendDate = new $util.LongBits(object.sendDate.low >>> 0, object.sendDate.high >>> 0).toNumber();
            if (object.senderUserId != null)
                message.senderUserId = object.senderUserId | 0;
            if (object.senderNickname != null)
                message.senderNickname = String(object.senderNickname);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.content != null)
                message.content = String(object.content);
            if (object.read != null)
                message.read = Boolean(object.read);
            if (object.itemList != null)
                message.itemList = String(object.itemList);
            return message;
        };

        /**
         * Creates a plain object from a MailInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailInfoMsg
         * @static
         * @param {protocol.MailInfoMsg} message MailInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mailId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sendDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendDate = options.longs === String ? "0" : 0;
                object.senderUserId = 0;
                object.senderNickname = "";
                object.type = 0;
                object.title = "";
                object.content = "";
                object.read = false;
                object.itemList = "";
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            if (message.sendDate != null && message.hasOwnProperty("sendDate"))
                if (typeof message.sendDate === "number")
                    object.sendDate = options.longs === String ? String(message.sendDate) : message.sendDate;
                else
                    object.sendDate = options.longs === String ? $util.Long.prototype.toString.call(message.sendDate) : options.longs === Number ? new $util.LongBits(message.sendDate.low >>> 0, message.sendDate.high >>> 0).toNumber() : message.sendDate;
            if (message.senderUserId != null && message.hasOwnProperty("senderUserId"))
                object.senderUserId = message.senderUserId;
            if (message.senderNickname != null && message.hasOwnProperty("senderNickname"))
                object.senderNickname = message.senderNickname;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            if (message.itemList != null && message.hasOwnProperty("itemList"))
                object.itemList = message.itemList;
            return object;
        };

        /**
         * Converts this MailInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailInfoMsg;
    })();

    protocol.MailReadMsg = (function() {

        /**
         * Properties of a MailReadMsg.
         * @memberof protocol
         * @interface IMailReadMsg
         * @property {number} mailId MailReadMsg mailId
         */

        /**
         * Constructs a new MailReadMsg.
         * @memberof protocol
         * @classdesc Represents a MailReadMsg.
         * @implements IMailReadMsg
         * @constructor
         * @param {protocol.IMailReadMsg=} [properties] Properties to set
         */
        function MailReadMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailReadMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailReadMsg
         * @instance
         */
        MailReadMsg.prototype.mailId = 0;

        /**
         * Creates a new MailReadMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg=} [properties] Properties to set
         * @returns {protocol.MailReadMsg} MailReadMsg instance
         */
        MailReadMsg.create = function create(properties) {
            return new MailReadMsg(properties);
        };

        /**
         * Encodes the specified MailReadMsg message. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg} message MailReadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReadMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailReadMsg message, length delimited. Does not implicitly {@link protocol.MailReadMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.IMailReadMsg} message MailReadMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailReadMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailReadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailReadMsg} MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReadMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailReadMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailReadMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailReadMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailReadMsg} MailReadMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailReadMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailReadMsg message.
         * @function verify
         * @memberof protocol.MailReadMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailReadMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailReadMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailReadMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailReadMsg} MailReadMsg
         */
        MailReadMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailReadMsg)
                return object;
            var message = new $root.protocol.MailReadMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailReadMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailReadMsg
         * @static
         * @param {protocol.MailReadMsg} message MailReadMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailReadMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailReadMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailReadMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailReadMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailReadMsg;
    })();

    protocol.MailOneUpMsg = (function() {

        /**
         * Properties of a MailOneUpMsg.
         * @memberof protocol
         * @interface IMailOneUpMsg
         * @property {boolean} force MailOneUpMsg force
         */

        /**
         * Constructs a new MailOneUpMsg.
         * @memberof protocol
         * @classdesc Represents a MailOneUpMsg.
         * @implements IMailOneUpMsg
         * @constructor
         * @param {protocol.IMailOneUpMsg=} [properties] Properties to set
         */
        function MailOneUpMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailOneUpMsg force.
         * @member {boolean} force
         * @memberof protocol.MailOneUpMsg
         * @instance
         */
        MailOneUpMsg.prototype.force = false;

        /**
         * Creates a new MailOneUpMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg=} [properties] Properties to set
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg instance
         */
        MailOneUpMsg.create = function create(properties) {
            return new MailOneUpMsg(properties);
        };

        /**
         * Encodes the specified MailOneUpMsg message. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg} message MailOneUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailOneUpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.force);
            return writer;
        };

        /**
         * Encodes the specified MailOneUpMsg message, length delimited. Does not implicitly {@link protocol.MailOneUpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.IMailOneUpMsg} message MailOneUpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailOneUpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailOneUpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailOneUpMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.force = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("force"))
                throw $util.ProtocolError("missing required 'force'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailOneUpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailOneUpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailOneUpMsg message.
         * @function verify
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailOneUpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.force !== "boolean")
                return "force: boolean expected";
            return null;
        };

        /**
         * Creates a MailOneUpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailOneUpMsg} MailOneUpMsg
         */
        MailOneUpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailOneUpMsg)
                return object;
            var message = new $root.protocol.MailOneUpMsg();
            if (object.force != null)
                message.force = Boolean(object.force);
            return message;
        };

        /**
         * Creates a plain object from a MailOneUpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailOneUpMsg
         * @static
         * @param {protocol.MailOneUpMsg} message MailOneUpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailOneUpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.force = false;
            if (message.force != null && message.hasOwnProperty("force"))
                object.force = message.force;
            return object;
        };

        /**
         * Converts this MailOneUpMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailOneUpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailOneUpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailOneUpMsg;
    })();

    protocol.MailDeleteMsg = (function() {

        /**
         * Properties of a MailDeleteMsg.
         * @memberof protocol
         * @interface IMailDeleteMsg
         * @property {number} mailId MailDeleteMsg mailId
         */

        /**
         * Constructs a new MailDeleteMsg.
         * @memberof protocol
         * @classdesc Represents a MailDeleteMsg.
         * @implements IMailDeleteMsg
         * @constructor
         * @param {protocol.IMailDeleteMsg=} [properties] Properties to set
         */
        function MailDeleteMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailDeleteMsg mailId.
         * @member {number} mailId
         * @memberof protocol.MailDeleteMsg
         * @instance
         */
        MailDeleteMsg.prototype.mailId = 0;

        /**
         * Creates a new MailDeleteMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg=} [properties] Properties to set
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg instance
         */
        MailDeleteMsg.create = function create(properties) {
            return new MailDeleteMsg(properties);
        };

        /**
         * Encodes the specified MailDeleteMsg message. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg} message MailDeleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailDeleteMsg message, length delimited. Does not implicitly {@link protocol.MailDeleteMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.IMailDeleteMsg} message MailDeleteMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailDeleteMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailDeleteMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailDeleteMsg message.
         * @function verify
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailDeleteMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailDeleteMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailDeleteMsg} MailDeleteMsg
         */
        MailDeleteMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailDeleteMsg)
                return object;
            var message = new $root.protocol.MailDeleteMsg();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailDeleteMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailDeleteMsg
         * @static
         * @param {protocol.MailDeleteMsg} message MailDeleteMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailDeleteMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailDeleteMsg to JSON.
         * @function toJSON
         * @memberof protocol.MailDeleteMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailDeleteMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailDeleteMsg;
    })();

    protocol.MailDeleteMsgSC = (function() {

        /**
         * Properties of a MailDeleteMsgSC.
         * @memberof protocol
         * @interface IMailDeleteMsgSC
         * @property {number} mailId MailDeleteMsgSC mailId
         */

        /**
         * Constructs a new MailDeleteMsgSC.
         * @memberof protocol
         * @classdesc Represents a MailDeleteMsgSC.
         * @implements IMailDeleteMsgSC
         * @constructor
         * @param {protocol.IMailDeleteMsgSC=} [properties] Properties to set
         */
        function MailDeleteMsgSC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailDeleteMsgSC mailId.
         * @member {number} mailId
         * @memberof protocol.MailDeleteMsgSC
         * @instance
         */
        MailDeleteMsgSC.prototype.mailId = 0;

        /**
         * Creates a new MailDeleteMsgSC instance using the specified properties.
         * @function create
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC=} [properties] Properties to set
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC instance
         */
        MailDeleteMsgSC.create = function create(properties) {
            return new MailDeleteMsgSC(properties);
        };

        /**
         * Encodes the specified MailDeleteMsgSC message. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC} message MailDeleteMsgSC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsgSC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified MailDeleteMsgSC message, length delimited. Does not implicitly {@link protocol.MailDeleteMsgSC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.IMailDeleteMsgSC} message MailDeleteMsgSC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDeleteMsgSC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsgSC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MailDeleteMsgSC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailDeleteMsgSC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDeleteMsgSC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailDeleteMsgSC message.
         * @function verify
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailDeleteMsgSC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId))
                return "mailId: integer expected";
            return null;
        };

        /**
         * Creates a MailDeleteMsgSC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MailDeleteMsgSC} MailDeleteMsgSC
         */
        MailDeleteMsgSC.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MailDeleteMsgSC)
                return object;
            var message = new $root.protocol.MailDeleteMsgSC();
            if (object.mailId != null)
                message.mailId = object.mailId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailDeleteMsgSC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MailDeleteMsgSC
         * @static
         * @param {protocol.MailDeleteMsgSC} message MailDeleteMsgSC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailDeleteMsgSC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.mailId = 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                object.mailId = message.mailId;
            return object;
        };

        /**
         * Converts this MailDeleteMsgSC to JSON.
         * @function toJSON
         * @memberof protocol.MailDeleteMsgSC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailDeleteMsgSC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailDeleteMsgSC;
    })();

    protocol.MercenaryDataListMsg = (function() {

        /**
         * Properties of a MercenaryDataListMsg.
         * @memberof protocol
         * @interface IMercenaryDataListMsg
         * @property {Array.<protocol.IMercenaryDataMsg>|null} [list] MercenaryDataListMsg list
         */

        /**
         * Constructs a new MercenaryDataListMsg.
         * @memberof protocol
         * @classdesc Represents a MercenaryDataListMsg.
         * @implements IMercenaryDataListMsg
         * @constructor
         * @param {protocol.IMercenaryDataListMsg=} [properties] Properties to set
         */
        function MercenaryDataListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MercenaryDataListMsg list.
         * @member {Array.<protocol.IMercenaryDataMsg>} list
         * @memberof protocol.MercenaryDataListMsg
         * @instance
         */
        MercenaryDataListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new MercenaryDataListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {protocol.IMercenaryDataListMsg=} [properties] Properties to set
         * @returns {protocol.MercenaryDataListMsg} MercenaryDataListMsg instance
         */
        MercenaryDataListMsg.create = function create(properties) {
            return new MercenaryDataListMsg(properties);
        };

        /**
         * Encodes the specified MercenaryDataListMsg message. Does not implicitly {@link protocol.MercenaryDataListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {protocol.IMercenaryDataListMsg} message MercenaryDataListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryDataListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.MercenaryDataMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MercenaryDataListMsg message, length delimited. Does not implicitly {@link protocol.MercenaryDataListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {protocol.IMercenaryDataListMsg} message MercenaryDataListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryDataListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MercenaryDataListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MercenaryDataListMsg} MercenaryDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryDataListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MercenaryDataListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.MercenaryDataMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MercenaryDataListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MercenaryDataListMsg} MercenaryDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryDataListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MercenaryDataListMsg message.
         * @function verify
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MercenaryDataListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.MercenaryDataMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MercenaryDataListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MercenaryDataListMsg} MercenaryDataListMsg
         */
        MercenaryDataListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MercenaryDataListMsg)
                return object;
            var message = new $root.protocol.MercenaryDataListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.MercenaryDataListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.MercenaryDataListMsg.list: object expected");
                    message.list[i] = $root.protocol.MercenaryDataMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MercenaryDataListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MercenaryDataListMsg
         * @static
         * @param {protocol.MercenaryDataListMsg} message MercenaryDataListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MercenaryDataListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.MercenaryDataMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this MercenaryDataListMsg to JSON.
         * @function toJSON
         * @memberof protocol.MercenaryDataListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MercenaryDataListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MercenaryDataListMsg;
    })();

    protocol.MercenaryDataMsg = (function() {

        /**
         * Properties of a MercenaryDataMsg.
         * @memberof protocol
         * @interface IMercenaryDataMsg
         * @property {number} id MercenaryDataMsg id
         * @property {number} mercenaryId MercenaryDataMsg mercenaryId
         * @property {string} name MercenaryDataMsg name
         * @property {Array.<number>|null} [attributeIdList] MercenaryDataMsg attributeIdList
         * @property {number} level MercenaryDataMsg level
         * @property {number} exp MercenaryDataMsg exp
         * @property {number} curTaskId MercenaryDataMsg curTaskId
         * @property {Array.<protocol.IMercenaryTaskMsg>|null} [taskList] MercenaryDataMsg taskList
         * @property {number} lifeNum MercenaryDataMsg lifeNum
         * @property {number} leftTime MercenaryDataMsg leftTime
         * @property {string} revieveTime MercenaryDataMsg revieveTime
         * @property {number} index MercenaryDataMsg index
         * @property {boolean} isNewMercenary MercenaryDataMsg isNewMercenary
         */

        /**
         * Constructs a new MercenaryDataMsg.
         * @memberof protocol
         * @classdesc Represents a MercenaryDataMsg.
         * @implements IMercenaryDataMsg
         * @constructor
         * @param {protocol.IMercenaryDataMsg=} [properties] Properties to set
         */
        function MercenaryDataMsg(properties) {
            this.attributeIdList = [];
            this.taskList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MercenaryDataMsg id.
         * @member {number} id
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.id = 0;

        /**
         * MercenaryDataMsg mercenaryId.
         * @member {number} mercenaryId
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.mercenaryId = 0;

        /**
         * MercenaryDataMsg name.
         * @member {string} name
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.name = "";

        /**
         * MercenaryDataMsg attributeIdList.
         * @member {Array.<number>} attributeIdList
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.attributeIdList = $util.emptyArray;

        /**
         * MercenaryDataMsg level.
         * @member {number} level
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.level = 0;

        /**
         * MercenaryDataMsg exp.
         * @member {number} exp
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.exp = 0;

        /**
         * MercenaryDataMsg curTaskId.
         * @member {number} curTaskId
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.curTaskId = 0;

        /**
         * MercenaryDataMsg taskList.
         * @member {Array.<protocol.IMercenaryTaskMsg>} taskList
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.taskList = $util.emptyArray;

        /**
         * MercenaryDataMsg lifeNum.
         * @member {number} lifeNum
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.lifeNum = 0;

        /**
         * MercenaryDataMsg leftTime.
         * @member {number} leftTime
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.leftTime = 0;

        /**
         * MercenaryDataMsg revieveTime.
         * @member {string} revieveTime
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.revieveTime = "";

        /**
         * MercenaryDataMsg index.
         * @member {number} index
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.index = 0;

        /**
         * MercenaryDataMsg isNewMercenary.
         * @member {boolean} isNewMercenary
         * @memberof protocol.MercenaryDataMsg
         * @instance
         */
        MercenaryDataMsg.prototype.isNewMercenary = false;

        /**
         * Creates a new MercenaryDataMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {protocol.IMercenaryDataMsg=} [properties] Properties to set
         * @returns {protocol.MercenaryDataMsg} MercenaryDataMsg instance
         */
        MercenaryDataMsg.create = function create(properties) {
            return new MercenaryDataMsg(properties);
        };

        /**
         * Encodes the specified MercenaryDataMsg message. Does not implicitly {@link protocol.MercenaryDataMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {protocol.IMercenaryDataMsg} message MercenaryDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mercenaryId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.attributeIdList != null && message.attributeIdList.length)
                for (var i = 0; i < message.attributeIdList.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.attributeIdList[i]);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.exp);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.curTaskId);
            if (message.taskList != null && message.taskList.length)
                for (var i = 0; i < message.taskList.length; ++i)
                    $root.protocol.MercenaryTaskMsg.encode(message.taskList[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.lifeNum);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.leftTime);
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.revieveTime);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.index);
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isNewMercenary);
            return writer;
        };

        /**
         * Encodes the specified MercenaryDataMsg message, length delimited. Does not implicitly {@link protocol.MercenaryDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {protocol.IMercenaryDataMsg} message MercenaryDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MercenaryDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MercenaryDataMsg} MercenaryDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MercenaryDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.mercenaryId = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    if (!(message.attributeIdList && message.attributeIdList.length))
                        message.attributeIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.attributeIdList.push(reader.int32());
                    } else
                        message.attributeIdList.push(reader.int32());
                    break;
                case 5:
                    message.level = reader.int32();
                    break;
                case 6:
                    message.exp = reader.int32();
                    break;
                case 7:
                    message.curTaskId = reader.int32();
                    break;
                case 8:
                    if (!(message.taskList && message.taskList.length))
                        message.taskList = [];
                    message.taskList.push($root.protocol.MercenaryTaskMsg.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.lifeNum = reader.int32();
                    break;
                case 10:
                    message.leftTime = reader.int32();
                    break;
                case 11:
                    message.revieveTime = reader.string();
                    break;
                case 12:
                    message.index = reader.int32();
                    break;
                case 13:
                    message.isNewMercenary = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("mercenaryId"))
                throw $util.ProtocolError("missing required 'mercenaryId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("exp"))
                throw $util.ProtocolError("missing required 'exp'", { instance: message });
            if (!message.hasOwnProperty("curTaskId"))
                throw $util.ProtocolError("missing required 'curTaskId'", { instance: message });
            if (!message.hasOwnProperty("lifeNum"))
                throw $util.ProtocolError("missing required 'lifeNum'", { instance: message });
            if (!message.hasOwnProperty("leftTime"))
                throw $util.ProtocolError("missing required 'leftTime'", { instance: message });
            if (!message.hasOwnProperty("revieveTime"))
                throw $util.ProtocolError("missing required 'revieveTime'", { instance: message });
            if (!message.hasOwnProperty("index"))
                throw $util.ProtocolError("missing required 'index'", { instance: message });
            if (!message.hasOwnProperty("isNewMercenary"))
                throw $util.ProtocolError("missing required 'isNewMercenary'", { instance: message });
            return message;
        };

        /**
         * Decodes a MercenaryDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MercenaryDataMsg} MercenaryDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MercenaryDataMsg message.
         * @function verify
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MercenaryDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.mercenaryId))
                return "mercenaryId: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.attributeIdList != null && message.hasOwnProperty("attributeIdList")) {
                if (!Array.isArray(message.attributeIdList))
                    return "attributeIdList: array expected";
                for (var i = 0; i < message.attributeIdList.length; ++i)
                    if (!$util.isInteger(message.attributeIdList[i]))
                        return "attributeIdList: integer[] expected";
            }
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isInteger(message.exp))
                return "exp: integer expected";
            if (!$util.isInteger(message.curTaskId))
                return "curTaskId: integer expected";
            if (message.taskList != null && message.hasOwnProperty("taskList")) {
                if (!Array.isArray(message.taskList))
                    return "taskList: array expected";
                for (var i = 0; i < message.taskList.length; ++i) {
                    var error = $root.protocol.MercenaryTaskMsg.verify(message.taskList[i]);
                    if (error)
                        return "taskList." + error;
                }
            }
            if (!$util.isInteger(message.lifeNum))
                return "lifeNum: integer expected";
            if (!$util.isInteger(message.leftTime))
                return "leftTime: integer expected";
            if (!$util.isString(message.revieveTime))
                return "revieveTime: string expected";
            if (!$util.isInteger(message.index))
                return "index: integer expected";
            if (typeof message.isNewMercenary !== "boolean")
                return "isNewMercenary: boolean expected";
            return null;
        };

        /**
         * Creates a MercenaryDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MercenaryDataMsg} MercenaryDataMsg
         */
        MercenaryDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MercenaryDataMsg)
                return object;
            var message = new $root.protocol.MercenaryDataMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.mercenaryId != null)
                message.mercenaryId = object.mercenaryId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.attributeIdList) {
                if (!Array.isArray(object.attributeIdList))
                    throw TypeError(".protocol.MercenaryDataMsg.attributeIdList: array expected");
                message.attributeIdList = [];
                for (var i = 0; i < object.attributeIdList.length; ++i)
                    message.attributeIdList[i] = object.attributeIdList[i] | 0;
            }
            if (object.level != null)
                message.level = object.level | 0;
            if (object.exp != null)
                message.exp = object.exp | 0;
            if (object.curTaskId != null)
                message.curTaskId = object.curTaskId | 0;
            if (object.taskList) {
                if (!Array.isArray(object.taskList))
                    throw TypeError(".protocol.MercenaryDataMsg.taskList: array expected");
                message.taskList = [];
                for (var i = 0; i < object.taskList.length; ++i) {
                    if (typeof object.taskList[i] !== "object")
                        throw TypeError(".protocol.MercenaryDataMsg.taskList: object expected");
                    message.taskList[i] = $root.protocol.MercenaryTaskMsg.fromObject(object.taskList[i]);
                }
            }
            if (object.lifeNum != null)
                message.lifeNum = object.lifeNum | 0;
            if (object.leftTime != null)
                message.leftTime = object.leftTime | 0;
            if (object.revieveTime != null)
                message.revieveTime = String(object.revieveTime);
            if (object.index != null)
                message.index = object.index | 0;
            if (object.isNewMercenary != null)
                message.isNewMercenary = Boolean(object.isNewMercenary);
            return message;
        };

        /**
         * Creates a plain object from a MercenaryDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MercenaryDataMsg
         * @static
         * @param {protocol.MercenaryDataMsg} message MercenaryDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MercenaryDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.attributeIdList = [];
                object.taskList = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.mercenaryId = 0;
                object.name = "";
                object.level = 0;
                object.exp = 0;
                object.curTaskId = 0;
                object.lifeNum = 0;
                object.leftTime = 0;
                object.revieveTime = "";
                object.index = 0;
                object.isNewMercenary = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.mercenaryId != null && message.hasOwnProperty("mercenaryId"))
                object.mercenaryId = message.mercenaryId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.attributeIdList && message.attributeIdList.length) {
                object.attributeIdList = [];
                for (var j = 0; j < message.attributeIdList.length; ++j)
                    object.attributeIdList[j] = message.attributeIdList[j];
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.exp != null && message.hasOwnProperty("exp"))
                object.exp = message.exp;
            if (message.curTaskId != null && message.hasOwnProperty("curTaskId"))
                object.curTaskId = message.curTaskId;
            if (message.taskList && message.taskList.length) {
                object.taskList = [];
                for (var j = 0; j < message.taskList.length; ++j)
                    object.taskList[j] = $root.protocol.MercenaryTaskMsg.toObject(message.taskList[j], options);
            }
            if (message.lifeNum != null && message.hasOwnProperty("lifeNum"))
                object.lifeNum = message.lifeNum;
            if (message.leftTime != null && message.hasOwnProperty("leftTime"))
                object.leftTime = message.leftTime;
            if (message.revieveTime != null && message.hasOwnProperty("revieveTime"))
                object.revieveTime = message.revieveTime;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.isNewMercenary != null && message.hasOwnProperty("isNewMercenary"))
                object.isNewMercenary = message.isNewMercenary;
            return object;
        };

        /**
         * Converts this MercenaryDataMsg to JSON.
         * @function toJSON
         * @memberof protocol.MercenaryDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MercenaryDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MercenaryDataMsg;
    })();

    protocol.MercenaryTaskMsg = (function() {

        /**
         * Properties of a MercenaryTaskMsg.
         * @memberof protocol
         * @interface IMercenaryTaskMsg
         * @property {number} taskId MercenaryTaskMsg taskId
         * @property {number} useTime MercenaryTaskMsg useTime
         * @property {number|null} [rate] MercenaryTaskMsg rate
         * @property {string|null} [gold] MercenaryTaskMsg gold
         * @property {number|null} [levelRate] MercenaryTaskMsg levelRate
         */

        /**
         * Constructs a new MercenaryTaskMsg.
         * @memberof protocol
         * @classdesc Represents a MercenaryTaskMsg.
         * @implements IMercenaryTaskMsg
         * @constructor
         * @param {protocol.IMercenaryTaskMsg=} [properties] Properties to set
         */
        function MercenaryTaskMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MercenaryTaskMsg taskId.
         * @member {number} taskId
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         */
        MercenaryTaskMsg.prototype.taskId = 0;

        /**
         * MercenaryTaskMsg useTime.
         * @member {number} useTime
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         */
        MercenaryTaskMsg.prototype.useTime = 0;

        /**
         * MercenaryTaskMsg rate.
         * @member {number} rate
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         */
        MercenaryTaskMsg.prototype.rate = 0;

        /**
         * MercenaryTaskMsg gold.
         * @member {string} gold
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         */
        MercenaryTaskMsg.prototype.gold = "";

        /**
         * MercenaryTaskMsg levelRate.
         * @member {number} levelRate
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         */
        MercenaryTaskMsg.prototype.levelRate = 0;

        /**
         * Creates a new MercenaryTaskMsg instance using the specified properties.
         * @function create
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {protocol.IMercenaryTaskMsg=} [properties] Properties to set
         * @returns {protocol.MercenaryTaskMsg} MercenaryTaskMsg instance
         */
        MercenaryTaskMsg.create = function create(properties) {
            return new MercenaryTaskMsg(properties);
        };

        /**
         * Encodes the specified MercenaryTaskMsg message. Does not implicitly {@link protocol.MercenaryTaskMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {protocol.IMercenaryTaskMsg} message MercenaryTaskMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryTaskMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.useTime);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.rate);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gold);
            if (message.levelRate != null && message.hasOwnProperty("levelRate"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.levelRate);
            return writer;
        };

        /**
         * Encodes the specified MercenaryTaskMsg message, length delimited. Does not implicitly {@link protocol.MercenaryTaskMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {protocol.IMercenaryTaskMsg} message MercenaryTaskMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MercenaryTaskMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MercenaryTaskMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MercenaryTaskMsg} MercenaryTaskMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryTaskMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MercenaryTaskMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.int32();
                    break;
                case 2:
                    message.useTime = reader.int32();
                    break;
                case 3:
                    message.rate = reader.double();
                    break;
                case 4:
                    message.gold = reader.string();
                    break;
                case 5:
                    message.levelRate = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("taskId"))
                throw $util.ProtocolError("missing required 'taskId'", { instance: message });
            if (!message.hasOwnProperty("useTime"))
                throw $util.ProtocolError("missing required 'useTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a MercenaryTaskMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MercenaryTaskMsg} MercenaryTaskMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MercenaryTaskMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MercenaryTaskMsg message.
         * @function verify
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MercenaryTaskMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.taskId))
                return "taskId: integer expected";
            if (!$util.isInteger(message.useTime))
                return "useTime: integer expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (typeof message.rate !== "number")
                    return "rate: number expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isString(message.gold))
                    return "gold: string expected";
            if (message.levelRate != null && message.hasOwnProperty("levelRate"))
                if (typeof message.levelRate !== "number")
                    return "levelRate: number expected";
            return null;
        };

        /**
         * Creates a MercenaryTaskMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MercenaryTaskMsg} MercenaryTaskMsg
         */
        MercenaryTaskMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MercenaryTaskMsg)
                return object;
            var message = new $root.protocol.MercenaryTaskMsg();
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            if (object.useTime != null)
                message.useTime = object.useTime | 0;
            if (object.rate != null)
                message.rate = Number(object.rate);
            if (object.gold != null)
                message.gold = String(object.gold);
            if (object.levelRate != null)
                message.levelRate = Number(object.levelRate);
            return message;
        };

        /**
         * Creates a plain object from a MercenaryTaskMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MercenaryTaskMsg
         * @static
         * @param {protocol.MercenaryTaskMsg} message MercenaryTaskMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MercenaryTaskMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.taskId = 0;
                object.useTime = 0;
                object.rate = 0;
                object.gold = "";
                object.levelRate = 0;
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.useTime != null && message.hasOwnProperty("useTime"))
                object.useTime = message.useTime;
            if (message.rate != null && message.hasOwnProperty("rate"))
                object.rate = options.json && !isFinite(message.rate) ? String(message.rate) : message.rate;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.levelRate != null && message.hasOwnProperty("levelRate"))
                object.levelRate = options.json && !isFinite(message.levelRate) ? String(message.levelRate) : message.levelRate;
            return object;
        };

        /**
         * Converts this MercenaryTaskMsg to JSON.
         * @function toJSON
         * @memberof protocol.MercenaryTaskMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MercenaryTaskMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MercenaryTaskMsg;
    })();

    protocol.NewbiewListMsg = (function() {

        /**
         * Properties of a NewbiewListMsg.
         * @memberof protocol
         * @interface INewbiewListMsg
         * @property {Array.<protocol.INewbiewMsg>|null} [list] NewbiewListMsg list
         */

        /**
         * Constructs a new NewbiewListMsg.
         * @memberof protocol
         * @classdesc Represents a NewbiewListMsg.
         * @implements INewbiewListMsg
         * @constructor
         * @param {protocol.INewbiewListMsg=} [properties] Properties to set
         */
        function NewbiewListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewbiewListMsg list.
         * @member {Array.<protocol.INewbiewMsg>} list
         * @memberof protocol.NewbiewListMsg
         * @instance
         */
        NewbiewListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new NewbiewListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg=} [properties] Properties to set
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg instance
         */
        NewbiewListMsg.create = function create(properties) {
            return new NewbiewListMsg(properties);
        };

        /**
         * Encodes the specified NewbiewListMsg message. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg} message NewbiewListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.NewbiewMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NewbiewListMsg message, length delimited. Does not implicitly {@link protocol.NewbiewListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.INewbiewListMsg} message NewbiewListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NewbiewListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.NewbiewMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewbiewListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewbiewListMsg message.
         * @function verify
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewbiewListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.NewbiewMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NewbiewListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NewbiewListMsg} NewbiewListMsg
         */
        NewbiewListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NewbiewListMsg)
                return object;
            var message = new $root.protocol.NewbiewListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.NewbiewListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.NewbiewListMsg.list: object expected");
                    message.list[i] = $root.protocol.NewbiewMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NewbiewListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NewbiewListMsg
         * @static
         * @param {protocol.NewbiewListMsg} message NewbiewListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewbiewListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.NewbiewMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this NewbiewListMsg to JSON.
         * @function toJSON
         * @memberof protocol.NewbiewListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewbiewListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewbiewListMsg;
    })();

    protocol.NewbiewMsg = (function() {

        /**
         * Properties of a NewbiewMsg.
         * @memberof protocol
         * @interface INewbiewMsg
         * @property {number} type NewbiewMsg type
         * @property {number} stepId NewbiewMsg stepId
         * @property {string} param NewbiewMsg param
         */

        /**
         * Constructs a new NewbiewMsg.
         * @memberof protocol
         * @classdesc Represents a NewbiewMsg.
         * @implements INewbiewMsg
         * @constructor
         * @param {protocol.INewbiewMsg=} [properties] Properties to set
         */
        function NewbiewMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewbiewMsg type.
         * @member {number} type
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.type = 0;

        /**
         * NewbiewMsg stepId.
         * @member {number} stepId
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.stepId = 0;

        /**
         * NewbiewMsg param.
         * @member {string} param
         * @memberof protocol.NewbiewMsg
         * @instance
         */
        NewbiewMsg.prototype.param = "";

        /**
         * Creates a new NewbiewMsg instance using the specified properties.
         * @function create
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg=} [properties] Properties to set
         * @returns {protocol.NewbiewMsg} NewbiewMsg instance
         */
        NewbiewMsg.create = function create(properties) {
            return new NewbiewMsg(properties);
        };

        /**
         * Encodes the specified NewbiewMsg message. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg} message NewbiewMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.stepId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.param);
            return writer;
        };

        /**
         * Encodes the specified NewbiewMsg message, length delimited. Does not implicitly {@link protocol.NewbiewMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.INewbiewMsg} message NewbiewMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewbiewMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NewbiewMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.stepId = reader.int32();
                    break;
                case 3:
                    message.param = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("stepId"))
                throw $util.ProtocolError("missing required 'stepId'", { instance: message });
            if (!message.hasOwnProperty("param"))
                throw $util.ProtocolError("missing required 'param'", { instance: message });
            return message;
        };

        /**
         * Decodes a NewbiewMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewbiewMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewbiewMsg message.
         * @function verify
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewbiewMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.stepId))
                return "stepId: integer expected";
            if (!$util.isString(message.param))
                return "param: string expected";
            return null;
        };

        /**
         * Creates a NewbiewMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NewbiewMsg} NewbiewMsg
         */
        NewbiewMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NewbiewMsg)
                return object;
            var message = new $root.protocol.NewbiewMsg();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.stepId != null)
                message.stepId = object.stepId | 0;
            if (object.param != null)
                message.param = String(object.param);
            return message;
        };

        /**
         * Creates a plain object from a NewbiewMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NewbiewMsg
         * @static
         * @param {protocol.NewbiewMsg} message NewbiewMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewbiewMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.stepId = 0;
                object.param = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.stepId != null && message.hasOwnProperty("stepId"))
                object.stepId = message.stepId;
            if (message.param != null && message.hasOwnProperty("param"))
                object.param = message.param;
            return object;
        };

        /**
         * Converts this NewbiewMsg to JSON.
         * @function toJSON
         * @memberof protocol.NewbiewMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewbiewMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewbiewMsg;
    })();

    protocol.AccountMsg = (function() {

        /**
         * Properties of an AccountMsg.
         * @memberof protocol
         * @interface IAccountMsg
         * @property {string} nickName AccountMsg nickName
         * @property {string} birth AccountMsg birth
         * @property {string} remark AccountMsg remark
         */

        /**
         * Constructs a new AccountMsg.
         * @memberof protocol
         * @classdesc Represents an AccountMsg.
         * @implements IAccountMsg
         * @constructor
         * @param {protocol.IAccountMsg=} [properties] Properties to set
         */
        function AccountMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountMsg nickName.
         * @member {string} nickName
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.nickName = "";

        /**
         * AccountMsg birth.
         * @member {string} birth
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.birth = "";

        /**
         * AccountMsg remark.
         * @member {string} remark
         * @memberof protocol.AccountMsg
         * @instance
         */
        AccountMsg.prototype.remark = "";

        /**
         * Creates a new AccountMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg=} [properties] Properties to set
         * @returns {protocol.AccountMsg} AccountMsg instance
         */
        AccountMsg.create = function create(properties) {
            return new AccountMsg(properties);
        };

        /**
         * Encodes the specified AccountMsg message. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg} message AccountMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.birth);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified AccountMsg message, length delimited. Does not implicitly {@link protocol.AccountMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.IAccountMsg} message AccountMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AccountMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AccountMsg} AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AccountMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickName = reader.string();
                    break;
                case 2:
                    message.birth = reader.string();
                    break;
                case 3:
                    message.remark = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("birth"))
                throw $util.ProtocolError("missing required 'birth'", { instance: message });
            if (!message.hasOwnProperty("remark"))
                throw $util.ProtocolError("missing required 'remark'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AccountMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AccountMsg} AccountMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountMsg message.
         * @function verify
         * @memberof protocol.AccountMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.birth))
                return "birth: string expected";
            if (!$util.isString(message.remark))
                return "remark: string expected";
            return null;
        };

        /**
         * Creates an AccountMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AccountMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AccountMsg} AccountMsg
         */
        AccountMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AccountMsg)
                return object;
            var message = new $root.protocol.AccountMsg();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.birth != null)
                message.birth = String(object.birth);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from an AccountMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AccountMsg
         * @static
         * @param {protocol.AccountMsg} message AccountMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickName = "";
                object.birth = "";
                object.remark = "";
            }
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.birth != null && message.hasOwnProperty("birth"))
                object.birth = message.birth;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this AccountMsg to JSON.
         * @function toJSON
         * @memberof protocol.AccountMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountMsg;
    })();

    protocol.AccountInfoMsg = (function() {

        /**
         * Properties of an AccountInfoMsg.
         * @memberof protocol
         * @interface IAccountInfoMsg
         * @property {string} nickName AccountInfoMsg nickName
         * @property {number} playerId AccountInfoMsg playerId
         * @property {string} headPic AccountInfoMsg headPic
         * @property {number} missionId AccountInfoMsg missionId
         * @property {number} process AccountInfoMsg process
         * @property {number} onlineTime AccountInfoMsg onlineTime
         * @property {string} clientSet AccountInfoMsg clientSet
         * @property {number} currentMissionId AccountInfoMsg currentMissionId
         * @property {number} HighestMissionId AccountInfoMsg HighestMissionId
         * @property {boolean} heroSwitchSet AccountInfoMsg heroSwitchSet
         */

        /**
         * Constructs a new AccountInfoMsg.
         * @memberof protocol
         * @classdesc Represents an AccountInfoMsg.
         * @implements IAccountInfoMsg
         * @constructor
         * @param {protocol.IAccountInfoMsg=} [properties] Properties to set
         */
        function AccountInfoMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountInfoMsg nickName.
         * @member {string} nickName
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.nickName = "";

        /**
         * AccountInfoMsg playerId.
         * @member {number} playerId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.playerId = 0;

        /**
         * AccountInfoMsg headPic.
         * @member {string} headPic
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.headPic = "";

        /**
         * AccountInfoMsg missionId.
         * @member {number} missionId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.missionId = 0;

        /**
         * AccountInfoMsg process.
         * @member {number} process
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.process = 0;

        /**
         * AccountInfoMsg onlineTime.
         * @member {number} onlineTime
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.onlineTime = 0;

        /**
         * AccountInfoMsg clientSet.
         * @member {string} clientSet
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.clientSet = "";

        /**
         * AccountInfoMsg currentMissionId.
         * @member {number} currentMissionId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.currentMissionId = 0;

        /**
         * AccountInfoMsg HighestMissionId.
         * @member {number} HighestMissionId
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.HighestMissionId = 0;

        /**
         * AccountInfoMsg heroSwitchSet.
         * @member {boolean} heroSwitchSet
         * @memberof protocol.AccountInfoMsg
         * @instance
         */
        AccountInfoMsg.prototype.heroSwitchSet = false;

        /**
         * Creates a new AccountInfoMsg instance using the specified properties.
         * @function create
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg=} [properties] Properties to set
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg instance
         */
        AccountInfoMsg.create = function create(properties) {
            return new AccountInfoMsg(properties);
        };

        /**
         * Encodes the specified AccountInfoMsg message. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg} message AccountInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfoMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headPic);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.missionId);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.process);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.onlineTime);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.clientSet);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.currentMissionId);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.HighestMissionId);
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.heroSwitchSet);
            return writer;
        };

        /**
         * Encodes the specified AccountInfoMsg message, length delimited. Does not implicitly {@link protocol.AccountInfoMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.IAccountInfoMsg} message AccountInfoMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountInfoMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfoMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AccountInfoMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickName = reader.string();
                    break;
                case 2:
                    message.playerId = reader.int32();
                    break;
                case 3:
                    message.headPic = reader.string();
                    break;
                case 4:
                    message.missionId = reader.int32();
                    break;
                case 5:
                    message.process = reader.int32();
                    break;
                case 6:
                    message.onlineTime = reader.int32();
                    break;
                case 7:
                    message.clientSet = reader.string();
                    break;
                case 8:
                    message.currentMissionId = reader.int32();
                    break;
                case 9:
                    message.HighestMissionId = reader.int32();
                    break;
                case 10:
                    message.heroSwitchSet = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            if (!message.hasOwnProperty("process"))
                throw $util.ProtocolError("missing required 'process'", { instance: message });
            if (!message.hasOwnProperty("onlineTime"))
                throw $util.ProtocolError("missing required 'onlineTime'", { instance: message });
            if (!message.hasOwnProperty("clientSet"))
                throw $util.ProtocolError("missing required 'clientSet'", { instance: message });
            if (!message.hasOwnProperty("currentMissionId"))
                throw $util.ProtocolError("missing required 'currentMissionId'", { instance: message });
            if (!message.hasOwnProperty("HighestMissionId"))
                throw $util.ProtocolError("missing required 'HighestMissionId'", { instance: message });
            if (!message.hasOwnProperty("heroSwitchSet"))
                throw $util.ProtocolError("missing required 'heroSwitchSet'", { instance: message });
            return message;
        };

        /**
         * Decodes an AccountInfoMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfoMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountInfoMsg message.
         * @function verify
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountInfoMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            if (!$util.isInteger(message.process))
                return "process: integer expected";
            if (!$util.isInteger(message.onlineTime))
                return "onlineTime: integer expected";
            if (!$util.isString(message.clientSet))
                return "clientSet: string expected";
            if (!$util.isInteger(message.currentMissionId))
                return "currentMissionId: integer expected";
            if (!$util.isInteger(message.HighestMissionId))
                return "HighestMissionId: integer expected";
            if (typeof message.heroSwitchSet !== "boolean")
                return "heroSwitchSet: boolean expected";
            return null;
        };

        /**
         * Creates an AccountInfoMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AccountInfoMsg} AccountInfoMsg
         */
        AccountInfoMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AccountInfoMsg)
                return object;
            var message = new $root.protocol.AccountInfoMsg();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            if (object.process != null)
                message.process = object.process | 0;
            if (object.onlineTime != null)
                message.onlineTime = object.onlineTime | 0;
            if (object.clientSet != null)
                message.clientSet = String(object.clientSet);
            if (object.currentMissionId != null)
                message.currentMissionId = object.currentMissionId | 0;
            if (object.HighestMissionId != null)
                message.HighestMissionId = object.HighestMissionId | 0;
            if (object.heroSwitchSet != null)
                message.heroSwitchSet = Boolean(object.heroSwitchSet);
            return message;
        };

        /**
         * Creates a plain object from an AccountInfoMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AccountInfoMsg
         * @static
         * @param {protocol.AccountInfoMsg} message AccountInfoMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountInfoMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickName = "";
                object.playerId = 0;
                object.headPic = "";
                object.missionId = 0;
                object.process = 0;
                object.onlineTime = 0;
                object.clientSet = "";
                object.currentMissionId = 0;
                object.HighestMissionId = 0;
                object.heroSwitchSet = false;
            }
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            if (message.onlineTime != null && message.hasOwnProperty("onlineTime"))
                object.onlineTime = message.onlineTime;
            if (message.clientSet != null && message.hasOwnProperty("clientSet"))
                object.clientSet = message.clientSet;
            if (message.currentMissionId != null && message.hasOwnProperty("currentMissionId"))
                object.currentMissionId = message.currentMissionId;
            if (message.HighestMissionId != null && message.hasOwnProperty("HighestMissionId"))
                object.HighestMissionId = message.HighestMissionId;
            if (message.heroSwitchSet != null && message.hasOwnProperty("heroSwitchSet"))
                object.heroSwitchSet = message.heroSwitchSet;
            return object;
        };

        /**
         * Converts this AccountInfoMsg to JSON.
         * @function toJSON
         * @memberof protocol.AccountInfoMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountInfoMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountInfoMsg;
    })();

    protocol.JoinThemList = (function() {

        /**
         * Properties of a JoinThemList.
         * @memberof protocol
         * @interface IJoinThemList
         * @property {Array.<protocol.IAccountInfoMsg>|null} [list] JoinThemList list
         */

        /**
         * Constructs a new JoinThemList.
         * @memberof protocol
         * @classdesc Represents a JoinThemList.
         * @implements IJoinThemList
         * @constructor
         * @param {protocol.IJoinThemList=} [properties] Properties to set
         */
        function JoinThemList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinThemList list.
         * @member {Array.<protocol.IAccountInfoMsg>} list
         * @memberof protocol.JoinThemList
         * @instance
         */
        JoinThemList.prototype.list = $util.emptyArray;

        /**
         * Creates a new JoinThemList instance using the specified properties.
         * @function create
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList=} [properties] Properties to set
         * @returns {protocol.JoinThemList} JoinThemList instance
         */
        JoinThemList.create = function create(properties) {
            return new JoinThemList(properties);
        };

        /**
         * Encodes the specified JoinThemList message. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @function encode
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList} message JoinThemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinThemList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.AccountInfoMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinThemList message, length delimited. Does not implicitly {@link protocol.JoinThemList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.IJoinThemList} message JoinThemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinThemList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinThemList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.JoinThemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.JoinThemList} JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinThemList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.JoinThemList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.AccountInfoMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinThemList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.JoinThemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.JoinThemList} JoinThemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinThemList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinThemList message.
         * @function verify
         * @memberof protocol.JoinThemList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinThemList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.AccountInfoMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinThemList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.JoinThemList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.JoinThemList} JoinThemList
         */
        JoinThemList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.JoinThemList)
                return object;
            var message = new $root.protocol.JoinThemList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.JoinThemList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.JoinThemList.list: object expected");
                    message.list[i] = $root.protocol.AccountInfoMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinThemList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.JoinThemList
         * @static
         * @param {protocol.JoinThemList} message JoinThemList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinThemList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.AccountInfoMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinThemList to JSON.
         * @function toJSON
         * @memberof protocol.JoinThemList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinThemList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinThemList;
    })();

    protocol.HeroListMsg = (function() {

        /**
         * Properties of a HeroListMsg.
         * @memberof protocol
         * @interface IHeroListMsg
         * @property {Array.<protocol.IHeroMsg>|null} [list] HeroListMsg list
         */

        /**
         * Constructs a new HeroListMsg.
         * @memberof protocol
         * @classdesc Represents a HeroListMsg.
         * @implements IHeroListMsg
         * @constructor
         * @param {protocol.IHeroListMsg=} [properties] Properties to set
         */
        function HeroListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroListMsg list.
         * @member {Array.<protocol.IHeroMsg>} list
         * @memberof protocol.HeroListMsg
         * @instance
         */
        HeroListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new HeroListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg=} [properties] Properties to set
         * @returns {protocol.HeroListMsg} HeroListMsg instance
         */
        HeroListMsg.create = function create(properties) {
            return new HeroListMsg(properties);
        };

        /**
         * Encodes the specified HeroListMsg message. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.HeroMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroListMsg message, length delimited. Does not implicitly {@link protocol.HeroListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.IHeroListMsg} message HeroListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.HeroMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroListMsg} HeroListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroListMsg message.
         * @function verify
         * @memberof protocol.HeroListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.HeroMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroListMsg} HeroListMsg
         */
        HeroListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroListMsg)
                return object;
            var message = new $root.protocol.HeroListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.HeroListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.HeroListMsg.list: object expected");
                    message.list[i] = $root.protocol.HeroMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroListMsg
         * @static
         * @param {protocol.HeroListMsg} message HeroListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.HeroMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroListMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroListMsg;
    })();

    protocol.HeroMsg = (function() {

        /**
         * Properties of a HeroMsg.
         * @memberof protocol
         * @interface IHeroMsg
         * @property {number} heroId HeroMsg heroId
         * @property {number} level HeroMsg level
         * @property {string} skillState HeroMsg skillState
         * @property {number} goldLevel HeroMsg goldLevel
         */

        /**
         * Constructs a new HeroMsg.
         * @memberof protocol
         * @classdesc Represents a HeroMsg.
         * @implements IHeroMsg
         * @constructor
         * @param {protocol.IHeroMsg=} [properties] Properties to set
         */
        function HeroMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroMsg heroId.
         * @member {number} heroId
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.heroId = 0;

        /**
         * HeroMsg level.
         * @member {number} level
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.level = 0;

        /**
         * HeroMsg skillState.
         * @member {string} skillState
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.skillState = "";

        /**
         * HeroMsg goldLevel.
         * @member {number} goldLevel
         * @memberof protocol.HeroMsg
         * @instance
         */
        HeroMsg.prototype.goldLevel = 0;

        /**
         * Creates a new HeroMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg=} [properties] Properties to set
         * @returns {protocol.HeroMsg} HeroMsg instance
         */
        HeroMsg.create = function create(properties) {
            return new HeroMsg(properties);
        };

        /**
         * Encodes the specified HeroMsg message. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.skillState);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.goldLevel);
            return writer;
        };

        /**
         * Encodes the specified HeroMsg message, length delimited. Does not implicitly {@link protocol.HeroMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.IHeroMsg} message HeroMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int32();
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                case 3:
                    message.skillState = reader.string();
                    break;
                case 4:
                    message.goldLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("heroId"))
                throw $util.ProtocolError("missing required 'heroId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("skillState"))
                throw $util.ProtocolError("missing required 'skillState'", { instance: message });
            if (!message.hasOwnProperty("goldLevel"))
                throw $util.ProtocolError("missing required 'goldLevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeroMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroMsg} HeroMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroMsg message.
         * @function verify
         * @memberof protocol.HeroMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.heroId))
                return "heroId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (!$util.isString(message.skillState))
                return "skillState: string expected";
            if (!$util.isInteger(message.goldLevel))
                return "goldLevel: integer expected";
            return null;
        };

        /**
         * Creates a HeroMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroMsg} HeroMsg
         */
        HeroMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroMsg)
                return object;
            var message = new $root.protocol.HeroMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.skillState != null)
                message.skillState = String(object.skillState);
            if (object.goldLevel != null)
                message.goldLevel = object.goldLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroMsg
         * @static
         * @param {protocol.HeroMsg} message HeroMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.level = 0;
                object.skillState = "";
                object.goldLevel = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.skillState != null && message.hasOwnProperty("skillState"))
                object.skillState = message.skillState;
            if (message.goldLevel != null && message.hasOwnProperty("goldLevel"))
                object.goldLevel = message.goldLevel;
            return object;
        };

        /**
         * Converts this HeroMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroMsg;
    })();

    protocol.HeroGoldListMsg = (function() {

        /**
         * Properties of a HeroGoldListMsg.
         * @memberof protocol
         * @interface IHeroGoldListMsg
         * @property {Array.<protocol.IHeroGoldMsg>|null} [list] HeroGoldListMsg list
         */

        /**
         * Constructs a new HeroGoldListMsg.
         * @memberof protocol
         * @classdesc Represents a HeroGoldListMsg.
         * @implements IHeroGoldListMsg
         * @constructor
         * @param {protocol.IHeroGoldListMsg=} [properties] Properties to set
         */
        function HeroGoldListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroGoldListMsg list.
         * @member {Array.<protocol.IHeroGoldMsg>} list
         * @memberof protocol.HeroGoldListMsg
         * @instance
         */
        HeroGoldListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new HeroGoldListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {protocol.IHeroGoldListMsg=} [properties] Properties to set
         * @returns {protocol.HeroGoldListMsg} HeroGoldListMsg instance
         */
        HeroGoldListMsg.create = function create(properties) {
            return new HeroGoldListMsg(properties);
        };

        /**
         * Encodes the specified HeroGoldListMsg message. Does not implicitly {@link protocol.HeroGoldListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {protocol.IHeroGoldListMsg} message HeroGoldListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroGoldListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.HeroGoldMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroGoldListMsg message, length delimited. Does not implicitly {@link protocol.HeroGoldListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {protocol.IHeroGoldListMsg} message HeroGoldListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroGoldListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroGoldListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroGoldListMsg} HeroGoldListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroGoldListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroGoldListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.HeroGoldMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroGoldListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroGoldListMsg} HeroGoldListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroGoldListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroGoldListMsg message.
         * @function verify
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroGoldListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.HeroGoldMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroGoldListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroGoldListMsg} HeroGoldListMsg
         */
        HeroGoldListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroGoldListMsg)
                return object;
            var message = new $root.protocol.HeroGoldListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.HeroGoldListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.HeroGoldListMsg.list: object expected");
                    message.list[i] = $root.protocol.HeroGoldMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroGoldListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroGoldListMsg
         * @static
         * @param {protocol.HeroGoldListMsg} message HeroGoldListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroGoldListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.HeroGoldMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroGoldListMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroGoldListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroGoldListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroGoldListMsg;
    })();

    protocol.HeroGoldMsg = (function() {

        /**
         * Properties of a HeroGoldMsg.
         * @memberof protocol
         * @interface IHeroGoldMsg
         * @property {number} heroId HeroGoldMsg heroId
         * @property {number} goldLevel HeroGoldMsg goldLevel
         */

        /**
         * Constructs a new HeroGoldMsg.
         * @memberof protocol
         * @classdesc Represents a HeroGoldMsg.
         * @implements IHeroGoldMsg
         * @constructor
         * @param {protocol.IHeroGoldMsg=} [properties] Properties to set
         */
        function HeroGoldMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroGoldMsg heroId.
         * @member {number} heroId
         * @memberof protocol.HeroGoldMsg
         * @instance
         */
        HeroGoldMsg.prototype.heroId = 0;

        /**
         * HeroGoldMsg goldLevel.
         * @member {number} goldLevel
         * @memberof protocol.HeroGoldMsg
         * @instance
         */
        HeroGoldMsg.prototype.goldLevel = 0;

        /**
         * Creates a new HeroGoldMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {protocol.IHeroGoldMsg=} [properties] Properties to set
         * @returns {protocol.HeroGoldMsg} HeroGoldMsg instance
         */
        HeroGoldMsg.create = function create(properties) {
            return new HeroGoldMsg(properties);
        };

        /**
         * Encodes the specified HeroGoldMsg message. Does not implicitly {@link protocol.HeroGoldMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {protocol.IHeroGoldMsg} message HeroGoldMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroGoldMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heroId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.goldLevel);
            return writer;
        };

        /**
         * Encodes the specified HeroGoldMsg message, length delimited. Does not implicitly {@link protocol.HeroGoldMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {protocol.IHeroGoldMsg} message HeroGoldMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroGoldMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroGoldMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroGoldMsg} HeroGoldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroGoldMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroGoldMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.heroId = reader.int32();
                    break;
                case 2:
                    message.goldLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("heroId"))
                throw $util.ProtocolError("missing required 'heroId'", { instance: message });
            if (!message.hasOwnProperty("goldLevel"))
                throw $util.ProtocolError("missing required 'goldLevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeroGoldMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroGoldMsg} HeroGoldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroGoldMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroGoldMsg message.
         * @function verify
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroGoldMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.heroId))
                return "heroId: integer expected";
            if (!$util.isInteger(message.goldLevel))
                return "goldLevel: integer expected";
            return null;
        };

        /**
         * Creates a HeroGoldMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroGoldMsg} HeroGoldMsg
         */
        HeroGoldMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroGoldMsg)
                return object;
            var message = new $root.protocol.HeroGoldMsg();
            if (object.heroId != null)
                message.heroId = object.heroId | 0;
            if (object.goldLevel != null)
                message.goldLevel = object.goldLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeroGoldMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroGoldMsg
         * @static
         * @param {protocol.HeroGoldMsg} message HeroGoldMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroGoldMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.heroId = 0;
                object.goldLevel = 0;
            }
            if (message.heroId != null && message.hasOwnProperty("heroId"))
                object.heroId = message.heroId;
            if (message.goldLevel != null && message.hasOwnProperty("goldLevel"))
                object.goldLevel = message.goldLevel;
            return object;
        };

        /**
         * Converts this HeroGoldMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroGoldMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroGoldMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroGoldMsg;
    })();

    protocol.ArtifactListMsg = (function() {

        /**
         * Properties of an ArtifactListMsg.
         * @memberof protocol
         * @interface IArtifactListMsg
         * @property {Array.<protocol.IArtifactMsg>|null} [list] ArtifactListMsg list
         */

        /**
         * Constructs a new ArtifactListMsg.
         * @memberof protocol
         * @classdesc Represents an ArtifactListMsg.
         * @implements IArtifactListMsg
         * @constructor
         * @param {protocol.IArtifactListMsg=} [properties] Properties to set
         */
        function ArtifactListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArtifactListMsg list.
         * @member {Array.<protocol.IArtifactMsg>} list
         * @memberof protocol.ArtifactListMsg
         * @instance
         */
        ArtifactListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new ArtifactListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {protocol.IArtifactListMsg=} [properties] Properties to set
         * @returns {protocol.ArtifactListMsg} ArtifactListMsg instance
         */
        ArtifactListMsg.create = function create(properties) {
            return new ArtifactListMsg(properties);
        };

        /**
         * Encodes the specified ArtifactListMsg message. Does not implicitly {@link protocol.ArtifactListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {protocol.IArtifactListMsg} message ArtifactListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtifactListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.ArtifactMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArtifactListMsg message, length delimited. Does not implicitly {@link protocol.ArtifactListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {protocol.IArtifactListMsg} message ArtifactListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtifactListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArtifactListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ArtifactListMsg} ArtifactListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtifactListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ArtifactListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.ArtifactMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArtifactListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ArtifactListMsg} ArtifactListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtifactListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArtifactListMsg message.
         * @function verify
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArtifactListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.ArtifactMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ArtifactListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ArtifactListMsg} ArtifactListMsg
         */
        ArtifactListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ArtifactListMsg)
                return object;
            var message = new $root.protocol.ArtifactListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.ArtifactListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.ArtifactListMsg.list: object expected");
                    message.list[i] = $root.protocol.ArtifactMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ArtifactListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ArtifactListMsg
         * @static
         * @param {protocol.ArtifactListMsg} message ArtifactListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArtifactListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.ArtifactMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this ArtifactListMsg to JSON.
         * @function toJSON
         * @memberof protocol.ArtifactListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArtifactListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArtifactListMsg;
    })();

    protocol.ArtifactMsg = (function() {

        /**
         * Properties of an ArtifactMsg.
         * @memberof protocol
         * @interface IArtifactMsg
         * @property {number} artifactId ArtifactMsg artifactId
         * @property {number} level ArtifactMsg level
         */

        /**
         * Constructs a new ArtifactMsg.
         * @memberof protocol
         * @classdesc Represents an ArtifactMsg.
         * @implements IArtifactMsg
         * @constructor
         * @param {protocol.IArtifactMsg=} [properties] Properties to set
         */
        function ArtifactMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArtifactMsg artifactId.
         * @member {number} artifactId
         * @memberof protocol.ArtifactMsg
         * @instance
         */
        ArtifactMsg.prototype.artifactId = 0;

        /**
         * ArtifactMsg level.
         * @member {number} level
         * @memberof protocol.ArtifactMsg
         * @instance
         */
        ArtifactMsg.prototype.level = 0;

        /**
         * Creates a new ArtifactMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {protocol.IArtifactMsg=} [properties] Properties to set
         * @returns {protocol.ArtifactMsg} ArtifactMsg instance
         */
        ArtifactMsg.create = function create(properties) {
            return new ArtifactMsg(properties);
        };

        /**
         * Encodes the specified ArtifactMsg message. Does not implicitly {@link protocol.ArtifactMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {protocol.IArtifactMsg} message ArtifactMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtifactMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.artifactId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.level);
            return writer;
        };

        /**
         * Encodes the specified ArtifactMsg message, length delimited. Does not implicitly {@link protocol.ArtifactMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {protocol.IArtifactMsg} message ArtifactMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtifactMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArtifactMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ArtifactMsg} ArtifactMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtifactMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ArtifactMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.artifactId = reader.int32();
                    break;
                case 2:
                    message.level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("artifactId"))
                throw $util.ProtocolError("missing required 'artifactId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            return message;
        };

        /**
         * Decodes an ArtifactMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ArtifactMsg} ArtifactMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtifactMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArtifactMsg message.
         * @function verify
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArtifactMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.artifactId))
                return "artifactId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            return null;
        };

        /**
         * Creates an ArtifactMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ArtifactMsg} ArtifactMsg
         */
        ArtifactMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ArtifactMsg)
                return object;
            var message = new $root.protocol.ArtifactMsg();
            if (object.artifactId != null)
                message.artifactId = object.artifactId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            return message;
        };

        /**
         * Creates a plain object from an ArtifactMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ArtifactMsg
         * @static
         * @param {protocol.ArtifactMsg} message ArtifactMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArtifactMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.artifactId = 0;
                object.level = 0;
            }
            if (message.artifactId != null && message.hasOwnProperty("artifactId"))
                object.artifactId = message.artifactId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this ArtifactMsg to JSON.
         * @function toJSON
         * @memberof protocol.ArtifactMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArtifactMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArtifactMsg;
    })();

    protocol.EquipListMsg = (function() {

        /**
         * Properties of an EquipListMsg.
         * @memberof protocol
         * @interface IEquipListMsg
         * @property {Array.<protocol.IEquipMsg>|null} [list] EquipListMsg list
         */

        /**
         * Constructs a new EquipListMsg.
         * @memberof protocol
         * @classdesc Represents an EquipListMsg.
         * @implements IEquipListMsg
         * @constructor
         * @param {protocol.IEquipListMsg=} [properties] Properties to set
         */
        function EquipListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipListMsg list.
         * @member {Array.<protocol.IEquipMsg>} list
         * @memberof protocol.EquipListMsg
         * @instance
         */
        EquipListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new EquipListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.EquipListMsg
         * @static
         * @param {protocol.IEquipListMsg=} [properties] Properties to set
         * @returns {protocol.EquipListMsg} EquipListMsg instance
         */
        EquipListMsg.create = function create(properties) {
            return new EquipListMsg(properties);
        };

        /**
         * Encodes the specified EquipListMsg message. Does not implicitly {@link protocol.EquipListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.EquipListMsg
         * @static
         * @param {protocol.IEquipListMsg} message EquipListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.EquipMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EquipListMsg message, length delimited. Does not implicitly {@link protocol.EquipListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EquipListMsg
         * @static
         * @param {protocol.IEquipListMsg} message EquipListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EquipListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EquipListMsg} EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EquipListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.EquipMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EquipListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EquipListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EquipListMsg} EquipListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipListMsg message.
         * @function verify
         * @memberof protocol.EquipListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.EquipMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates an EquipListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EquipListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EquipListMsg} EquipListMsg
         */
        EquipListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EquipListMsg)
                return object;
            var message = new $root.protocol.EquipListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.EquipListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.EquipListMsg.list: object expected");
                    message.list[i] = $root.protocol.EquipMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EquipListMsg
         * @static
         * @param {protocol.EquipListMsg} message EquipListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.EquipMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this EquipListMsg to JSON.
         * @function toJSON
         * @memberof protocol.EquipListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipListMsg;
    })();

    protocol.EquipMsg = (function() {

        /**
         * Properties of an EquipMsg.
         * @memberof protocol
         * @interface IEquipMsg
         * @property {number} id EquipMsg id
         * @property {number} equipId EquipMsg equipId
         * @property {number} level EquipMsg level
         * @property {boolean} isWear EquipMsg isWear
         * @property {number} latticeId EquipMsg latticeId
         * @property {string} attributeId EquipMsg attributeId
         * @property {number} quality EquipMsg quality
         * @property {string} name EquipMsg name
         * @property {number} destroyNum EquipMsg destroyNum
         * @property {boolean} isNewEquip EquipMsg isNewEquip
         * @property {boolean} lock EquipMsg lock
         */

        /**
         * Constructs a new EquipMsg.
         * @memberof protocol
         * @classdesc Represents an EquipMsg.
         * @implements IEquipMsg
         * @constructor
         * @param {protocol.IEquipMsg=} [properties] Properties to set
         */
        function EquipMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipMsg id.
         * @member {number} id
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.id = 0;

        /**
         * EquipMsg equipId.
         * @member {number} equipId
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.equipId = 0;

        /**
         * EquipMsg level.
         * @member {number} level
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.level = 0;

        /**
         * EquipMsg isWear.
         * @member {boolean} isWear
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.isWear = false;

        /**
         * EquipMsg latticeId.
         * @member {number} latticeId
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.latticeId = 0;

        /**
         * EquipMsg attributeId.
         * @member {string} attributeId
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.attributeId = "";

        /**
         * EquipMsg quality.
         * @member {number} quality
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.quality = 0;

        /**
         * EquipMsg name.
         * @member {string} name
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.name = "";

        /**
         * EquipMsg destroyNum.
         * @member {number} destroyNum
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.destroyNum = 0;

        /**
         * EquipMsg isNewEquip.
         * @member {boolean} isNewEquip
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.isNewEquip = false;

        /**
         * EquipMsg lock.
         * @member {boolean} lock
         * @memberof protocol.EquipMsg
         * @instance
         */
        EquipMsg.prototype.lock = false;

        /**
         * Creates a new EquipMsg instance using the specified properties.
         * @function create
         * @memberof protocol.EquipMsg
         * @static
         * @param {protocol.IEquipMsg=} [properties] Properties to set
         * @returns {protocol.EquipMsg} EquipMsg instance
         */
        EquipMsg.create = function create(properties) {
            return new EquipMsg(properties);
        };

        /**
         * Encodes the specified EquipMsg message. Does not implicitly {@link protocol.EquipMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.EquipMsg
         * @static
         * @param {protocol.IEquipMsg} message EquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.equipId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isWear);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.latticeId);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.attributeId);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.quality);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.destroyNum);
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isNewEquip);
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.lock);
            return writer;
        };

        /**
         * Encodes the specified EquipMsg message, length delimited. Does not implicitly {@link protocol.EquipMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.EquipMsg
         * @static
         * @param {protocol.IEquipMsg} message EquipMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EquipMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EquipMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.EquipMsg} EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.EquipMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.equipId = reader.int32();
                    break;
                case 3:
                    message.level = reader.int32();
                    break;
                case 4:
                    message.isWear = reader.bool();
                    break;
                case 5:
                    message.latticeId = reader.int32();
                    break;
                case 6:
                    message.attributeId = reader.string();
                    break;
                case 7:
                    message.quality = reader.int32();
                    break;
                case 8:
                    message.name = reader.string();
                    break;
                case 9:
                    message.destroyNum = reader.int32();
                    break;
                case 10:
                    message.isNewEquip = reader.bool();
                    break;
                case 11:
                    message.lock = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("equipId"))
                throw $util.ProtocolError("missing required 'equipId'", { instance: message });
            if (!message.hasOwnProperty("level"))
                throw $util.ProtocolError("missing required 'level'", { instance: message });
            if (!message.hasOwnProperty("isWear"))
                throw $util.ProtocolError("missing required 'isWear'", { instance: message });
            if (!message.hasOwnProperty("latticeId"))
                throw $util.ProtocolError("missing required 'latticeId'", { instance: message });
            if (!message.hasOwnProperty("attributeId"))
                throw $util.ProtocolError("missing required 'attributeId'", { instance: message });
            if (!message.hasOwnProperty("quality"))
                throw $util.ProtocolError("missing required 'quality'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("destroyNum"))
                throw $util.ProtocolError("missing required 'destroyNum'", { instance: message });
            if (!message.hasOwnProperty("isNewEquip"))
                throw $util.ProtocolError("missing required 'isNewEquip'", { instance: message });
            if (!message.hasOwnProperty("lock"))
                throw $util.ProtocolError("missing required 'lock'", { instance: message });
            return message;
        };

        /**
         * Decodes an EquipMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.EquipMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.EquipMsg} EquipMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EquipMsg message.
         * @function verify
         * @memberof protocol.EquipMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EquipMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.equipId))
                return "equipId: integer expected";
            if (!$util.isInteger(message.level))
                return "level: integer expected";
            if (typeof message.isWear !== "boolean")
                return "isWear: boolean expected";
            if (!$util.isInteger(message.latticeId))
                return "latticeId: integer expected";
            if (!$util.isString(message.attributeId))
                return "attributeId: string expected";
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.destroyNum))
                return "destroyNum: integer expected";
            if (typeof message.isNewEquip !== "boolean")
                return "isNewEquip: boolean expected";
            if (typeof message.lock !== "boolean")
                return "lock: boolean expected";
            return null;
        };

        /**
         * Creates an EquipMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.EquipMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.EquipMsg} EquipMsg
         */
        EquipMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.EquipMsg)
                return object;
            var message = new $root.protocol.EquipMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.equipId != null)
                message.equipId = object.equipId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.isWear != null)
                message.isWear = Boolean(object.isWear);
            if (object.latticeId != null)
                message.latticeId = object.latticeId | 0;
            if (object.attributeId != null)
                message.attributeId = String(object.attributeId);
            if (object.quality != null)
                message.quality = object.quality | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.destroyNum != null)
                message.destroyNum = object.destroyNum | 0;
            if (object.isNewEquip != null)
                message.isNewEquip = Boolean(object.isNewEquip);
            if (object.lock != null)
                message.lock = Boolean(object.lock);
            return message;
        };

        /**
         * Creates a plain object from an EquipMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.EquipMsg
         * @static
         * @param {protocol.EquipMsg} message EquipMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.equipId = 0;
                object.level = 0;
                object.isWear = false;
                object.latticeId = 0;
                object.attributeId = "";
                object.quality = 0;
                object.name = "";
                object.destroyNum = 0;
                object.isNewEquip = false;
                object.lock = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.equipId != null && message.hasOwnProperty("equipId"))
                object.equipId = message.equipId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.isWear != null && message.hasOwnProperty("isWear"))
                object.isWear = message.isWear;
            if (message.latticeId != null && message.hasOwnProperty("latticeId"))
                object.latticeId = message.latticeId;
            if (message.attributeId != null && message.hasOwnProperty("attributeId"))
                object.attributeId = message.attributeId;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.destroyNum != null && message.hasOwnProperty("destroyNum"))
                object.destroyNum = message.destroyNum;
            if (message.isNewEquip != null && message.hasOwnProperty("isNewEquip"))
                object.isNewEquip = message.isNewEquip;
            if (message.lock != null && message.hasOwnProperty("lock"))
                object.lock = message.lock;
            return object;
        };

        /**
         * Converts this EquipMsg to JSON.
         * @function toJSON
         * @memberof protocol.EquipMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipMsg;
    })();

    protocol.SkillCdListMsg = (function() {

        /**
         * Properties of a SkillCdListMsg.
         * @memberof protocol
         * @interface ISkillCdListMsg
         * @property {Array.<protocol.ISkillCdMsg>|null} [list] SkillCdListMsg list
         */

        /**
         * Constructs a new SkillCdListMsg.
         * @memberof protocol
         * @classdesc Represents a SkillCdListMsg.
         * @implements ISkillCdListMsg
         * @constructor
         * @param {protocol.ISkillCdListMsg=} [properties] Properties to set
         */
        function SkillCdListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillCdListMsg list.
         * @member {Array.<protocol.ISkillCdMsg>} list
         * @memberof protocol.SkillCdListMsg
         * @instance
         */
        SkillCdListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new SkillCdListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {protocol.ISkillCdListMsg=} [properties] Properties to set
         * @returns {protocol.SkillCdListMsg} SkillCdListMsg instance
         */
        SkillCdListMsg.create = function create(properties) {
            return new SkillCdListMsg(properties);
        };

        /**
         * Encodes the specified SkillCdListMsg message. Does not implicitly {@link protocol.SkillCdListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {protocol.ISkillCdListMsg} message SkillCdListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillCdListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.SkillCdMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SkillCdListMsg message, length delimited. Does not implicitly {@link protocol.SkillCdListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {protocol.ISkillCdListMsg} message SkillCdListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillCdListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillCdListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SkillCdListMsg} SkillCdListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillCdListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SkillCdListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.SkillCdMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SkillCdListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SkillCdListMsg} SkillCdListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillCdListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillCdListMsg message.
         * @function verify
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillCdListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.SkillCdMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SkillCdListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SkillCdListMsg} SkillCdListMsg
         */
        SkillCdListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SkillCdListMsg)
                return object;
            var message = new $root.protocol.SkillCdListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.SkillCdListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.SkillCdListMsg.list: object expected");
                    message.list[i] = $root.protocol.SkillCdMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SkillCdListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SkillCdListMsg
         * @static
         * @param {protocol.SkillCdListMsg} message SkillCdListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillCdListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.SkillCdMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this SkillCdListMsg to JSON.
         * @function toJSON
         * @memberof protocol.SkillCdListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillCdListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SkillCdListMsg;
    })();

    protocol.SkillCdMsg = (function() {

        /**
         * Properties of a SkillCdMsg.
         * @memberof protocol
         * @interface ISkillCdMsg
         * @property {number} skillId SkillCdMsg skillId
         * @property {string} endTime SkillCdMsg endTime
         * @property {string|null} [effectEndTime] SkillCdMsg effectEndTime
         */

        /**
         * Constructs a new SkillCdMsg.
         * @memberof protocol
         * @classdesc Represents a SkillCdMsg.
         * @implements ISkillCdMsg
         * @constructor
         * @param {protocol.ISkillCdMsg=} [properties] Properties to set
         */
        function SkillCdMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkillCdMsg skillId.
         * @member {number} skillId
         * @memberof protocol.SkillCdMsg
         * @instance
         */
        SkillCdMsg.prototype.skillId = 0;

        /**
         * SkillCdMsg endTime.
         * @member {string} endTime
         * @memberof protocol.SkillCdMsg
         * @instance
         */
        SkillCdMsg.prototype.endTime = "";

        /**
         * SkillCdMsg effectEndTime.
         * @member {string} effectEndTime
         * @memberof protocol.SkillCdMsg
         * @instance
         */
        SkillCdMsg.prototype.effectEndTime = "";

        /**
         * Creates a new SkillCdMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {protocol.ISkillCdMsg=} [properties] Properties to set
         * @returns {protocol.SkillCdMsg} SkillCdMsg instance
         */
        SkillCdMsg.create = function create(properties) {
            return new SkillCdMsg(properties);
        };

        /**
         * Encodes the specified SkillCdMsg message. Does not implicitly {@link protocol.SkillCdMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {protocol.ISkillCdMsg} message SkillCdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillCdMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skillId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.endTime);
            if (message.effectEndTime != null && message.hasOwnProperty("effectEndTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.effectEndTime);
            return writer;
        };

        /**
         * Encodes the specified SkillCdMsg message, length delimited. Does not implicitly {@link protocol.SkillCdMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {protocol.ISkillCdMsg} message SkillCdMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkillCdMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkillCdMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SkillCdMsg} SkillCdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillCdMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SkillCdMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.skillId = reader.int32();
                    break;
                case 2:
                    message.endTime = reader.string();
                    break;
                case 3:
                    message.effectEndTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("skillId"))
                throw $util.ProtocolError("missing required 'skillId'", { instance: message });
            if (!message.hasOwnProperty("endTime"))
                throw $util.ProtocolError("missing required 'endTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a SkillCdMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SkillCdMsg} SkillCdMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkillCdMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkillCdMsg message.
         * @function verify
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkillCdMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
            if (!$util.isString(message.endTime))
                return "endTime: string expected";
            if (message.effectEndTime != null && message.hasOwnProperty("effectEndTime"))
                if (!$util.isString(message.effectEndTime))
                    return "effectEndTime: string expected";
            return null;
        };

        /**
         * Creates a SkillCdMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SkillCdMsg} SkillCdMsg
         */
        SkillCdMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SkillCdMsg)
                return object;
            var message = new $root.protocol.SkillCdMsg();
            if (object.skillId != null)
                message.skillId = object.skillId | 0;
            if (object.endTime != null)
                message.endTime = String(object.endTime);
            if (object.effectEndTime != null)
                message.effectEndTime = String(object.effectEndTime);
            return message;
        };

        /**
         * Creates a plain object from a SkillCdMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SkillCdMsg
         * @static
         * @param {protocol.SkillCdMsg} message SkillCdMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkillCdMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.skillId = 0;
                object.endTime = "";
                object.effectEndTime = "";
            }
            if (message.skillId != null && message.hasOwnProperty("skillId"))
                object.skillId = message.skillId;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            if (message.effectEndTime != null && message.hasOwnProperty("effectEndTime"))
                object.effectEndTime = message.effectEndTime;
            return object;
        };

        /**
         * Converts this SkillCdMsg to JSON.
         * @function toJSON
         * @memberof protocol.SkillCdMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkillCdMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SkillCdMsg;
    })();

    protocol.QueryTimelapseListMsg = (function() {

        /**
         * Properties of a QueryTimelapseListMsg.
         * @memberof protocol
         * @interface IQueryTimelapseListMsg
         * @property {Array.<protocol.IQueryTimelapse>|null} [list] QueryTimelapseListMsg list
         */

        /**
         * Constructs a new QueryTimelapseListMsg.
         * @memberof protocol
         * @classdesc Represents a QueryTimelapseListMsg.
         * @implements IQueryTimelapseListMsg
         * @constructor
         * @param {protocol.IQueryTimelapseListMsg=} [properties] Properties to set
         */
        function QueryTimelapseListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryTimelapseListMsg list.
         * @member {Array.<protocol.IQueryTimelapse>} list
         * @memberof protocol.QueryTimelapseListMsg
         * @instance
         */
        QueryTimelapseListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new QueryTimelapseListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {protocol.IQueryTimelapseListMsg=} [properties] Properties to set
         * @returns {protocol.QueryTimelapseListMsg} QueryTimelapseListMsg instance
         */
        QueryTimelapseListMsg.create = function create(properties) {
            return new QueryTimelapseListMsg(properties);
        };

        /**
         * Encodes the specified QueryTimelapseListMsg message. Does not implicitly {@link protocol.QueryTimelapseListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {protocol.IQueryTimelapseListMsg} message QueryTimelapseListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryTimelapseListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.QueryTimelapse.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QueryTimelapseListMsg message, length delimited. Does not implicitly {@link protocol.QueryTimelapseListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {protocol.IQueryTimelapseListMsg} message QueryTimelapseListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryTimelapseListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryTimelapseListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QueryTimelapseListMsg} QueryTimelapseListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryTimelapseListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QueryTimelapseListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.QueryTimelapse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryTimelapseListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QueryTimelapseListMsg} QueryTimelapseListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryTimelapseListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryTimelapseListMsg message.
         * @function verify
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryTimelapseListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.QueryTimelapse.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QueryTimelapseListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QueryTimelapseListMsg} QueryTimelapseListMsg
         */
        QueryTimelapseListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QueryTimelapseListMsg)
                return object;
            var message = new $root.protocol.QueryTimelapseListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.QueryTimelapseListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.QueryTimelapseListMsg.list: object expected");
                    message.list[i] = $root.protocol.QueryTimelapse.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QueryTimelapseListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QueryTimelapseListMsg
         * @static
         * @param {protocol.QueryTimelapseListMsg} message QueryTimelapseListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryTimelapseListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.QueryTimelapse.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this QueryTimelapseListMsg to JSON.
         * @function toJSON
         * @memberof protocol.QueryTimelapseListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryTimelapseListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryTimelapseListMsg;
    })();

    protocol.QueryTimelapse = (function() {

        /**
         * Properties of a QueryTimelapse.
         * @memberof protocol
         * @interface IQueryTimelapse
         * @property {number} buyId QueryTimelapse buyId
         * @property {string} goldNum QueryTimelapse goldNum
         */

        /**
         * Constructs a new QueryTimelapse.
         * @memberof protocol
         * @classdesc Represents a QueryTimelapse.
         * @implements IQueryTimelapse
         * @constructor
         * @param {protocol.IQueryTimelapse=} [properties] Properties to set
         */
        function QueryTimelapse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryTimelapse buyId.
         * @member {number} buyId
         * @memberof protocol.QueryTimelapse
         * @instance
         */
        QueryTimelapse.prototype.buyId = 0;

        /**
         * QueryTimelapse goldNum.
         * @member {string} goldNum
         * @memberof protocol.QueryTimelapse
         * @instance
         */
        QueryTimelapse.prototype.goldNum = "";

        /**
         * Creates a new QueryTimelapse instance using the specified properties.
         * @function create
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {protocol.IQueryTimelapse=} [properties] Properties to set
         * @returns {protocol.QueryTimelapse} QueryTimelapse instance
         */
        QueryTimelapse.create = function create(properties) {
            return new QueryTimelapse(properties);
        };

        /**
         * Encodes the specified QueryTimelapse message. Does not implicitly {@link protocol.QueryTimelapse.verify|verify} messages.
         * @function encode
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {protocol.IQueryTimelapse} message QueryTimelapse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryTimelapse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.buyId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.goldNum);
            return writer;
        };

        /**
         * Encodes the specified QueryTimelapse message, length delimited. Does not implicitly {@link protocol.QueryTimelapse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {protocol.IQueryTimelapse} message QueryTimelapse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryTimelapse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryTimelapse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.QueryTimelapse} QueryTimelapse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryTimelapse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.QueryTimelapse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.buyId = reader.int32();
                    break;
                case 2:
                    message.goldNum = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("buyId"))
                throw $util.ProtocolError("missing required 'buyId'", { instance: message });
            if (!message.hasOwnProperty("goldNum"))
                throw $util.ProtocolError("missing required 'goldNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a QueryTimelapse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.QueryTimelapse} QueryTimelapse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryTimelapse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryTimelapse message.
         * @function verify
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryTimelapse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.buyId))
                return "buyId: integer expected";
            if (!$util.isString(message.goldNum))
                return "goldNum: string expected";
            return null;
        };

        /**
         * Creates a QueryTimelapse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.QueryTimelapse} QueryTimelapse
         */
        QueryTimelapse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.QueryTimelapse)
                return object;
            var message = new $root.protocol.QueryTimelapse();
            if (object.buyId != null)
                message.buyId = object.buyId | 0;
            if (object.goldNum != null)
                message.goldNum = String(object.goldNum);
            return message;
        };

        /**
         * Creates a plain object from a QueryTimelapse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.QueryTimelapse
         * @static
         * @param {protocol.QueryTimelapse} message QueryTimelapse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryTimelapse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.buyId = 0;
                object.goldNum = "";
            }
            if (message.buyId != null && message.hasOwnProperty("buyId"))
                object.buyId = message.buyId;
            if (message.goldNum != null && message.hasOwnProperty("goldNum"))
                object.goldNum = message.goldNum;
            return object;
        };

        /**
         * Converts this QueryTimelapse to JSON.
         * @function toJSON
         * @memberof protocol.QueryTimelapse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryTimelapse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryTimelapse;
    })();

    protocol.RankMsg = (function() {

        /**
         * Properties of a RankMsg.
         * @memberof protocol
         * @interface IRankMsg
         * @property {Array.<protocol.IPlayerMsg>|null} [playerList] RankMsg playerList
         * @property {Array.<number>|null} [awardList] RankMsg awardList
         * @property {number} overNum RankMsg overNum
         */

        /**
         * Constructs a new RankMsg.
         * @memberof protocol
         * @classdesc Represents a RankMsg.
         * @implements IRankMsg
         * @constructor
         * @param {protocol.IRankMsg=} [properties] Properties to set
         */
        function RankMsg(properties) {
            this.playerList = [];
            this.awardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankMsg playerList.
         * @member {Array.<protocol.IPlayerMsg>} playerList
         * @memberof protocol.RankMsg
         * @instance
         */
        RankMsg.prototype.playerList = $util.emptyArray;

        /**
         * RankMsg awardList.
         * @member {Array.<number>} awardList
         * @memberof protocol.RankMsg
         * @instance
         */
        RankMsg.prototype.awardList = $util.emptyArray;

        /**
         * RankMsg overNum.
         * @member {number} overNum
         * @memberof protocol.RankMsg
         * @instance
         */
        RankMsg.prototype.overNum = 0;

        /**
         * Creates a new RankMsg instance using the specified properties.
         * @function create
         * @memberof protocol.RankMsg
         * @static
         * @param {protocol.IRankMsg=} [properties] Properties to set
         * @returns {protocol.RankMsg} RankMsg instance
         */
        RankMsg.create = function create(properties) {
            return new RankMsg(properties);
        };

        /**
         * Encodes the specified RankMsg message. Does not implicitly {@link protocol.RankMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.RankMsg
         * @static
         * @param {protocol.IRankMsg} message RankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.protocol.PlayerMsg.encode(message.playerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.awardList != null && message.awardList.length)
                for (var i = 0; i < message.awardList.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.awardList[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.overNum);
            return writer;
        };

        /**
         * Encodes the specified RankMsg message, length delimited. Does not implicitly {@link protocol.RankMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RankMsg
         * @static
         * @param {protocol.IRankMsg} message RankMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RankMsg} RankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RankMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerList && message.playerList.length))
                        message.playerList = [];
                    message.playerList.push($root.protocol.PlayerMsg.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.awardList && message.awardList.length))
                        message.awardList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.awardList.push(reader.int32());
                    } else
                        message.awardList.push(reader.int32());
                    break;
                case 3:
                    message.overNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("overNum"))
                throw $util.ProtocolError("missing required 'overNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RankMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RankMsg} RankMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankMsg message.
         * @function verify
         * @memberof protocol.RankMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.protocol.PlayerMsg.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.awardList != null && message.hasOwnProperty("awardList")) {
                if (!Array.isArray(message.awardList))
                    return "awardList: array expected";
                for (var i = 0; i < message.awardList.length; ++i)
                    if (!$util.isInteger(message.awardList[i]))
                        return "awardList: integer[] expected";
            }
            if (!$util.isInteger(message.overNum))
                return "overNum: integer expected";
            return null;
        };

        /**
         * Creates a RankMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RankMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RankMsg} RankMsg
         */
        RankMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RankMsg)
                return object;
            var message = new $root.protocol.RankMsg();
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".protocol.RankMsg.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".protocol.RankMsg.playerList: object expected");
                    message.playerList[i] = $root.protocol.PlayerMsg.fromObject(object.playerList[i]);
                }
            }
            if (object.awardList) {
                if (!Array.isArray(object.awardList))
                    throw TypeError(".protocol.RankMsg.awardList: array expected");
                message.awardList = [];
                for (var i = 0; i < object.awardList.length; ++i)
                    message.awardList[i] = object.awardList[i] | 0;
            }
            if (object.overNum != null)
                message.overNum = object.overNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a RankMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RankMsg
         * @static
         * @param {protocol.RankMsg} message RankMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.awardList = [];
            }
            if (options.defaults)
                object.overNum = 0;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.protocol.PlayerMsg.toObject(message.playerList[j], options);
            }
            if (message.awardList && message.awardList.length) {
                object.awardList = [];
                for (var j = 0; j < message.awardList.length; ++j)
                    object.awardList[j] = message.awardList[j];
            }
            if (message.overNum != null && message.hasOwnProperty("overNum"))
                object.overNum = message.overNum;
            return object;
        };

        /**
         * Converts this RankMsg to JSON.
         * @function toJSON
         * @memberof protocol.RankMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankMsg;
    })();

    protocol.PlayerMsg = (function() {

        /**
         * Properties of a PlayerMsg.
         * @memberof protocol
         * @interface IPlayerMsg
         * @property {number} playerId PlayerMsg playerId
         * @property {number} missionId PlayerMsg missionId
         * @property {string} nickName PlayerMsg nickName
         * @property {string} headPic PlayerMsg headPic
         */

        /**
         * Constructs a new PlayerMsg.
         * @memberof protocol
         * @classdesc Represents a PlayerMsg.
         * @implements IPlayerMsg
         * @constructor
         * @param {protocol.IPlayerMsg=} [properties] Properties to set
         */
        function PlayerMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMsg playerId.
         * @member {number} playerId
         * @memberof protocol.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.playerId = 0;

        /**
         * PlayerMsg missionId.
         * @member {number} missionId
         * @memberof protocol.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.missionId = 0;

        /**
         * PlayerMsg nickName.
         * @member {string} nickName
         * @memberof protocol.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.nickName = "";

        /**
         * PlayerMsg headPic.
         * @member {string} headPic
         * @memberof protocol.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.headPic = "";

        /**
         * Creates a new PlayerMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PlayerMsg
         * @static
         * @param {protocol.IPlayerMsg=} [properties] Properties to set
         * @returns {protocol.PlayerMsg} PlayerMsg instance
         */
        PlayerMsg.create = function create(properties) {
            return new PlayerMsg(properties);
        };

        /**
         * Encodes the specified PlayerMsg message. Does not implicitly {@link protocol.PlayerMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerMsg
         * @static
         * @param {protocol.IPlayerMsg} message PlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.missionId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.headPic);
            return writer;
        };

        /**
         * Encodes the specified PlayerMsg message, length delimited. Does not implicitly {@link protocol.PlayerMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PlayerMsg
         * @static
         * @param {protocol.IPlayerMsg} message PlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PlayerMsg} PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PlayerMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.missionId = reader.int32();
                    break;
                case 3:
                    message.nickName = reader.string();
                    break;
                case 4:
                    message.headPic = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("playerId"))
                throw $util.ProtocolError("missing required 'playerId'", { instance: message });
            if (!message.hasOwnProperty("missionId"))
                throw $util.ProtocolError("missing required 'missionId'", { instance: message });
            if (!message.hasOwnProperty("nickName"))
                throw $util.ProtocolError("missing required 'nickName'", { instance: message });
            if (!message.hasOwnProperty("headPic"))
                throw $util.ProtocolError("missing required 'headPic'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PlayerMsg} PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMsg message.
         * @function verify
         * @memberof protocol.PlayerMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
            if (!$util.isInteger(message.missionId))
                return "missionId: integer expected";
            if (!$util.isString(message.nickName))
                return "nickName: string expected";
            if (!$util.isString(message.headPic))
                return "headPic: string expected";
            return null;
        };

        /**
         * Creates a PlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PlayerMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PlayerMsg} PlayerMsg
         */
        PlayerMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PlayerMsg)
                return object;
            var message = new $root.protocol.PlayerMsg();
            if (object.playerId != null)
                message.playerId = object.playerId | 0;
            if (object.missionId != null)
                message.missionId = object.missionId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headPic != null)
                message.headPic = String(object.headPic);
            return message;
        };

        /**
         * Creates a plain object from a PlayerMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PlayerMsg
         * @static
         * @param {protocol.PlayerMsg} message PlayerMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = 0;
                object.missionId = 0;
                object.nickName = "";
                object.headPic = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.missionId != null && message.hasOwnProperty("missionId"))
                object.missionId = message.missionId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headPic != null && message.hasOwnProperty("headPic"))
                object.headPic = message.headPic;
            return object;
        };

        /**
         * Converts this PlayerMsg to JSON.
         * @function toJSON
         * @memberof protocol.PlayerMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerMsg;
    })();

    protocol.RiskDataMsg = (function() {

        /**
         * Properties of a RiskDataMsg.
         * @memberof protocol
         * @interface IRiskDataMsg
         * @property {number} darkRitualNum RiskDataMsg darkRitualNum
         * @property {string} totalClickNum RiskDataMsg totalClickNum
         * @property {number} secondClickNum RiskDataMsg secondClickNum
         * @property {string} totalCriticalClicks RiskDataMsg totalCriticalClicks
         * @property {number} secondCriticalClicks RiskDataMsg secondCriticalClicks
         * @property {string} totalGold RiskDataMsg totalGold
         * @property {string} heroSoulsTotalSpend RiskDataMsg heroSoulsTotalSpend
         * @property {number} killMonster RiskDataMsg killMonster
         * @property {number} killBoss RiskDataMsg killBoss
         * @property {number} killBoxMonster RiskDataMsg killBoxMonster
         * @property {number} rebirthNum RiskDataMsg rebirthNum
         * @property {number} mercenaryQuality RiskDataMsg mercenaryQuality
         * @property {number} mercenaryLevel RiskDataMsg mercenaryLevel
         * @property {number} mercenaryTotalNum RiskDataMsg mercenaryTotalNum
         * @property {number} mercenaryReviveNum RiskDataMsg mercenaryReviveNum
         * @property {number} diamondTaskNum RiskDataMsg diamondTaskNum
         * @property {number} heroSoulsTaskNum RiskDataMsg heroSoulsTaskNum
         * @property {number} equipTaskNum RiskDataMsg equipTaskNum
         * @property {number} goldTaskNum RiskDataMsg goldTaskNum
         * @property {number} skillTaskNum RiskDataMsg skillTaskNum
         * @property {number} missionMaxNum RiskDataMsg missionMaxNum
         * @property {number} darkRitualTotalNum RiskDataMsg darkRitualTotalNum
         * @property {number} equipTotalNum RiskDataMsg equipTotalNum
         * @property {number} TotalOnlineTime RiskDataMsg TotalOnlineTime
         */

        /**
         * Constructs a new RiskDataMsg.
         * @memberof protocol
         * @classdesc Represents a RiskDataMsg.
         * @implements IRiskDataMsg
         * @constructor
         * @param {protocol.IRiskDataMsg=} [properties] Properties to set
         */
        function RiskDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RiskDataMsg darkRitualNum.
         * @member {number} darkRitualNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.darkRitualNum = 0;

        /**
         * RiskDataMsg totalClickNum.
         * @member {string} totalClickNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.totalClickNum = "";

        /**
         * RiskDataMsg secondClickNum.
         * @member {number} secondClickNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.secondClickNum = 0;

        /**
         * RiskDataMsg totalCriticalClicks.
         * @member {string} totalCriticalClicks
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.totalCriticalClicks = "";

        /**
         * RiskDataMsg secondCriticalClicks.
         * @member {number} secondCriticalClicks
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.secondCriticalClicks = 0;

        /**
         * RiskDataMsg totalGold.
         * @member {string} totalGold
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.totalGold = "";

        /**
         * RiskDataMsg heroSoulsTotalSpend.
         * @member {string} heroSoulsTotalSpend
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.heroSoulsTotalSpend = "";

        /**
         * RiskDataMsg killMonster.
         * @member {number} killMonster
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.killMonster = 0;

        /**
         * RiskDataMsg killBoss.
         * @member {number} killBoss
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.killBoss = 0;

        /**
         * RiskDataMsg killBoxMonster.
         * @member {number} killBoxMonster
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.killBoxMonster = 0;

        /**
         * RiskDataMsg rebirthNum.
         * @member {number} rebirthNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.rebirthNum = 0;

        /**
         * RiskDataMsg mercenaryQuality.
         * @member {number} mercenaryQuality
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.mercenaryQuality = 0;

        /**
         * RiskDataMsg mercenaryLevel.
         * @member {number} mercenaryLevel
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.mercenaryLevel = 0;

        /**
         * RiskDataMsg mercenaryTotalNum.
         * @member {number} mercenaryTotalNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.mercenaryTotalNum = 0;

        /**
         * RiskDataMsg mercenaryReviveNum.
         * @member {number} mercenaryReviveNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.mercenaryReviveNum = 0;

        /**
         * RiskDataMsg diamondTaskNum.
         * @member {number} diamondTaskNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.diamondTaskNum = 0;

        /**
         * RiskDataMsg heroSoulsTaskNum.
         * @member {number} heroSoulsTaskNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.heroSoulsTaskNum = 0;

        /**
         * RiskDataMsg equipTaskNum.
         * @member {number} equipTaskNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.equipTaskNum = 0;

        /**
         * RiskDataMsg goldTaskNum.
         * @member {number} goldTaskNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.goldTaskNum = 0;

        /**
         * RiskDataMsg skillTaskNum.
         * @member {number} skillTaskNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.skillTaskNum = 0;

        /**
         * RiskDataMsg missionMaxNum.
         * @member {number} missionMaxNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.missionMaxNum = 0;

        /**
         * RiskDataMsg darkRitualTotalNum.
         * @member {number} darkRitualTotalNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.darkRitualTotalNum = 0;

        /**
         * RiskDataMsg equipTotalNum.
         * @member {number} equipTotalNum
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.equipTotalNum = 0;

        /**
         * RiskDataMsg TotalOnlineTime.
         * @member {number} TotalOnlineTime
         * @memberof protocol.RiskDataMsg
         * @instance
         */
        RiskDataMsg.prototype.TotalOnlineTime = 0;

        /**
         * Creates a new RiskDataMsg instance using the specified properties.
         * @function create
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {protocol.IRiskDataMsg=} [properties] Properties to set
         * @returns {protocol.RiskDataMsg} RiskDataMsg instance
         */
        RiskDataMsg.create = function create(properties) {
            return new RiskDataMsg(properties);
        };

        /**
         * Encodes the specified RiskDataMsg message. Does not implicitly {@link protocol.RiskDataMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {protocol.IRiskDataMsg} message RiskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RiskDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.darkRitualNum);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.totalClickNum);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.secondClickNum);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.totalCriticalClicks);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.secondCriticalClicks);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.totalGold);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.heroSoulsTotalSpend);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.killMonster);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.killBoss);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.killBoxMonster);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.rebirthNum);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.mercenaryQuality);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.mercenaryLevel);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.mercenaryTotalNum);
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.mercenaryReviveNum);
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.diamondTaskNum);
            writer.uint32(/* id 17, wireType 0 =*/136).int32(message.heroSoulsTaskNum);
            writer.uint32(/* id 18, wireType 0 =*/144).int32(message.equipTaskNum);
            writer.uint32(/* id 19, wireType 0 =*/152).int32(message.goldTaskNum);
            writer.uint32(/* id 20, wireType 0 =*/160).int32(message.skillTaskNum);
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.missionMaxNum);
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.darkRitualTotalNum);
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.equipTotalNum);
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.TotalOnlineTime);
            return writer;
        };

        /**
         * Encodes the specified RiskDataMsg message, length delimited. Does not implicitly {@link protocol.RiskDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {protocol.IRiskDataMsg} message RiskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RiskDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RiskDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RiskDataMsg} RiskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RiskDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RiskDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.darkRitualNum = reader.int32();
                    break;
                case 2:
                    message.totalClickNum = reader.string();
                    break;
                case 3:
                    message.secondClickNum = reader.int32();
                    break;
                case 4:
                    message.totalCriticalClicks = reader.string();
                    break;
                case 5:
                    message.secondCriticalClicks = reader.int32();
                    break;
                case 6:
                    message.totalGold = reader.string();
                    break;
                case 7:
                    message.heroSoulsTotalSpend = reader.string();
                    break;
                case 8:
                    message.killMonster = reader.int32();
                    break;
                case 9:
                    message.killBoss = reader.int32();
                    break;
                case 10:
                    message.killBoxMonster = reader.int32();
                    break;
                case 11:
                    message.rebirthNum = reader.int32();
                    break;
                case 12:
                    message.mercenaryQuality = reader.int32();
                    break;
                case 13:
                    message.mercenaryLevel = reader.int32();
                    break;
                case 14:
                    message.mercenaryTotalNum = reader.int32();
                    break;
                case 15:
                    message.mercenaryReviveNum = reader.int32();
                    break;
                case 16:
                    message.diamondTaskNum = reader.int32();
                    break;
                case 17:
                    message.heroSoulsTaskNum = reader.int32();
                    break;
                case 18:
                    message.equipTaskNum = reader.int32();
                    break;
                case 19:
                    message.goldTaskNum = reader.int32();
                    break;
                case 20:
                    message.skillTaskNum = reader.int32();
                    break;
                case 21:
                    message.missionMaxNum = reader.int32();
                    break;
                case 22:
                    message.darkRitualTotalNum = reader.int32();
                    break;
                case 23:
                    message.equipTotalNum = reader.int32();
                    break;
                case 24:
                    message.TotalOnlineTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("darkRitualNum"))
                throw $util.ProtocolError("missing required 'darkRitualNum'", { instance: message });
            if (!message.hasOwnProperty("totalClickNum"))
                throw $util.ProtocolError("missing required 'totalClickNum'", { instance: message });
            if (!message.hasOwnProperty("secondClickNum"))
                throw $util.ProtocolError("missing required 'secondClickNum'", { instance: message });
            if (!message.hasOwnProperty("totalCriticalClicks"))
                throw $util.ProtocolError("missing required 'totalCriticalClicks'", { instance: message });
            if (!message.hasOwnProperty("secondCriticalClicks"))
                throw $util.ProtocolError("missing required 'secondCriticalClicks'", { instance: message });
            if (!message.hasOwnProperty("totalGold"))
                throw $util.ProtocolError("missing required 'totalGold'", { instance: message });
            if (!message.hasOwnProperty("heroSoulsTotalSpend"))
                throw $util.ProtocolError("missing required 'heroSoulsTotalSpend'", { instance: message });
            if (!message.hasOwnProperty("killMonster"))
                throw $util.ProtocolError("missing required 'killMonster'", { instance: message });
            if (!message.hasOwnProperty("killBoss"))
                throw $util.ProtocolError("missing required 'killBoss'", { instance: message });
            if (!message.hasOwnProperty("killBoxMonster"))
                throw $util.ProtocolError("missing required 'killBoxMonster'", { instance: message });
            if (!message.hasOwnProperty("rebirthNum"))
                throw $util.ProtocolError("missing required 'rebirthNum'", { instance: message });
            if (!message.hasOwnProperty("mercenaryQuality"))
                throw $util.ProtocolError("missing required 'mercenaryQuality'", { instance: message });
            if (!message.hasOwnProperty("mercenaryLevel"))
                throw $util.ProtocolError("missing required 'mercenaryLevel'", { instance: message });
            if (!message.hasOwnProperty("mercenaryTotalNum"))
                throw $util.ProtocolError("missing required 'mercenaryTotalNum'", { instance: message });
            if (!message.hasOwnProperty("mercenaryReviveNum"))
                throw $util.ProtocolError("missing required 'mercenaryReviveNum'", { instance: message });
            if (!message.hasOwnProperty("diamondTaskNum"))
                throw $util.ProtocolError("missing required 'diamondTaskNum'", { instance: message });
            if (!message.hasOwnProperty("heroSoulsTaskNum"))
                throw $util.ProtocolError("missing required 'heroSoulsTaskNum'", { instance: message });
            if (!message.hasOwnProperty("equipTaskNum"))
                throw $util.ProtocolError("missing required 'equipTaskNum'", { instance: message });
            if (!message.hasOwnProperty("goldTaskNum"))
                throw $util.ProtocolError("missing required 'goldTaskNum'", { instance: message });
            if (!message.hasOwnProperty("skillTaskNum"))
                throw $util.ProtocolError("missing required 'skillTaskNum'", { instance: message });
            if (!message.hasOwnProperty("missionMaxNum"))
                throw $util.ProtocolError("missing required 'missionMaxNum'", { instance: message });
            if (!message.hasOwnProperty("darkRitualTotalNum"))
                throw $util.ProtocolError("missing required 'darkRitualTotalNum'", { instance: message });
            if (!message.hasOwnProperty("equipTotalNum"))
                throw $util.ProtocolError("missing required 'equipTotalNum'", { instance: message });
            if (!message.hasOwnProperty("TotalOnlineTime"))
                throw $util.ProtocolError("missing required 'TotalOnlineTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a RiskDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RiskDataMsg} RiskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RiskDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RiskDataMsg message.
         * @function verify
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RiskDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.darkRitualNum))
                return "darkRitualNum: integer expected";
            if (!$util.isString(message.totalClickNum))
                return "totalClickNum: string expected";
            if (!$util.isInteger(message.secondClickNum))
                return "secondClickNum: integer expected";
            if (!$util.isString(message.totalCriticalClicks))
                return "totalCriticalClicks: string expected";
            if (!$util.isInteger(message.secondCriticalClicks))
                return "secondCriticalClicks: integer expected";
            if (!$util.isString(message.totalGold))
                return "totalGold: string expected";
            if (!$util.isString(message.heroSoulsTotalSpend))
                return "heroSoulsTotalSpend: string expected";
            if (!$util.isInteger(message.killMonster))
                return "killMonster: integer expected";
            if (!$util.isInteger(message.killBoss))
                return "killBoss: integer expected";
            if (!$util.isInteger(message.killBoxMonster))
                return "killBoxMonster: integer expected";
            if (!$util.isInteger(message.rebirthNum))
                return "rebirthNum: integer expected";
            if (!$util.isInteger(message.mercenaryQuality))
                return "mercenaryQuality: integer expected";
            if (!$util.isInteger(message.mercenaryLevel))
                return "mercenaryLevel: integer expected";
            if (!$util.isInteger(message.mercenaryTotalNum))
                return "mercenaryTotalNum: integer expected";
            if (!$util.isInteger(message.mercenaryReviveNum))
                return "mercenaryReviveNum: integer expected";
            if (!$util.isInteger(message.diamondTaskNum))
                return "diamondTaskNum: integer expected";
            if (!$util.isInteger(message.heroSoulsTaskNum))
                return "heroSoulsTaskNum: integer expected";
            if (!$util.isInteger(message.equipTaskNum))
                return "equipTaskNum: integer expected";
            if (!$util.isInteger(message.goldTaskNum))
                return "goldTaskNum: integer expected";
            if (!$util.isInteger(message.skillTaskNum))
                return "skillTaskNum: integer expected";
            if (!$util.isInteger(message.missionMaxNum))
                return "missionMaxNum: integer expected";
            if (!$util.isInteger(message.darkRitualTotalNum))
                return "darkRitualTotalNum: integer expected";
            if (!$util.isInteger(message.equipTotalNum))
                return "equipTotalNum: integer expected";
            if (!$util.isInteger(message.TotalOnlineTime))
                return "TotalOnlineTime: integer expected";
            return null;
        };

        /**
         * Creates a RiskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RiskDataMsg} RiskDataMsg
         */
        RiskDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RiskDataMsg)
                return object;
            var message = new $root.protocol.RiskDataMsg();
            if (object.darkRitualNum != null)
                message.darkRitualNum = object.darkRitualNum | 0;
            if (object.totalClickNum != null)
                message.totalClickNum = String(object.totalClickNum);
            if (object.secondClickNum != null)
                message.secondClickNum = object.secondClickNum | 0;
            if (object.totalCriticalClicks != null)
                message.totalCriticalClicks = String(object.totalCriticalClicks);
            if (object.secondCriticalClicks != null)
                message.secondCriticalClicks = object.secondCriticalClicks | 0;
            if (object.totalGold != null)
                message.totalGold = String(object.totalGold);
            if (object.heroSoulsTotalSpend != null)
                message.heroSoulsTotalSpend = String(object.heroSoulsTotalSpend);
            if (object.killMonster != null)
                message.killMonster = object.killMonster | 0;
            if (object.killBoss != null)
                message.killBoss = object.killBoss | 0;
            if (object.killBoxMonster != null)
                message.killBoxMonster = object.killBoxMonster | 0;
            if (object.rebirthNum != null)
                message.rebirthNum = object.rebirthNum | 0;
            if (object.mercenaryQuality != null)
                message.mercenaryQuality = object.mercenaryQuality | 0;
            if (object.mercenaryLevel != null)
                message.mercenaryLevel = object.mercenaryLevel | 0;
            if (object.mercenaryTotalNum != null)
                message.mercenaryTotalNum = object.mercenaryTotalNum | 0;
            if (object.mercenaryReviveNum != null)
                message.mercenaryReviveNum = object.mercenaryReviveNum | 0;
            if (object.diamondTaskNum != null)
                message.diamondTaskNum = object.diamondTaskNum | 0;
            if (object.heroSoulsTaskNum != null)
                message.heroSoulsTaskNum = object.heroSoulsTaskNum | 0;
            if (object.equipTaskNum != null)
                message.equipTaskNum = object.equipTaskNum | 0;
            if (object.goldTaskNum != null)
                message.goldTaskNum = object.goldTaskNum | 0;
            if (object.skillTaskNum != null)
                message.skillTaskNum = object.skillTaskNum | 0;
            if (object.missionMaxNum != null)
                message.missionMaxNum = object.missionMaxNum | 0;
            if (object.darkRitualTotalNum != null)
                message.darkRitualTotalNum = object.darkRitualTotalNum | 0;
            if (object.equipTotalNum != null)
                message.equipTotalNum = object.equipTotalNum | 0;
            if (object.TotalOnlineTime != null)
                message.TotalOnlineTime = object.TotalOnlineTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a RiskDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RiskDataMsg
         * @static
         * @param {protocol.RiskDataMsg} message RiskDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RiskDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.darkRitualNum = 0;
                object.totalClickNum = "";
                object.secondClickNum = 0;
                object.totalCriticalClicks = "";
                object.secondCriticalClicks = 0;
                object.totalGold = "";
                object.heroSoulsTotalSpend = "";
                object.killMonster = 0;
                object.killBoss = 0;
                object.killBoxMonster = 0;
                object.rebirthNum = 0;
                object.mercenaryQuality = 0;
                object.mercenaryLevel = 0;
                object.mercenaryTotalNum = 0;
                object.mercenaryReviveNum = 0;
                object.diamondTaskNum = 0;
                object.heroSoulsTaskNum = 0;
                object.equipTaskNum = 0;
                object.goldTaskNum = 0;
                object.skillTaskNum = 0;
                object.missionMaxNum = 0;
                object.darkRitualTotalNum = 0;
                object.equipTotalNum = 0;
                object.TotalOnlineTime = 0;
            }
            if (message.darkRitualNum != null && message.hasOwnProperty("darkRitualNum"))
                object.darkRitualNum = message.darkRitualNum;
            if (message.totalClickNum != null && message.hasOwnProperty("totalClickNum"))
                object.totalClickNum = message.totalClickNum;
            if (message.secondClickNum != null && message.hasOwnProperty("secondClickNum"))
                object.secondClickNum = message.secondClickNum;
            if (message.totalCriticalClicks != null && message.hasOwnProperty("totalCriticalClicks"))
                object.totalCriticalClicks = message.totalCriticalClicks;
            if (message.secondCriticalClicks != null && message.hasOwnProperty("secondCriticalClicks"))
                object.secondCriticalClicks = message.secondCriticalClicks;
            if (message.totalGold != null && message.hasOwnProperty("totalGold"))
                object.totalGold = message.totalGold;
            if (message.heroSoulsTotalSpend != null && message.hasOwnProperty("heroSoulsTotalSpend"))
                object.heroSoulsTotalSpend = message.heroSoulsTotalSpend;
            if (message.killMonster != null && message.hasOwnProperty("killMonster"))
                object.killMonster = message.killMonster;
            if (message.killBoss != null && message.hasOwnProperty("killBoss"))
                object.killBoss = message.killBoss;
            if (message.killBoxMonster != null && message.hasOwnProperty("killBoxMonster"))
                object.killBoxMonster = message.killBoxMonster;
            if (message.rebirthNum != null && message.hasOwnProperty("rebirthNum"))
                object.rebirthNum = message.rebirthNum;
            if (message.mercenaryQuality != null && message.hasOwnProperty("mercenaryQuality"))
                object.mercenaryQuality = message.mercenaryQuality;
            if (message.mercenaryLevel != null && message.hasOwnProperty("mercenaryLevel"))
                object.mercenaryLevel = message.mercenaryLevel;
            if (message.mercenaryTotalNum != null && message.hasOwnProperty("mercenaryTotalNum"))
                object.mercenaryTotalNum = message.mercenaryTotalNum;
            if (message.mercenaryReviveNum != null && message.hasOwnProperty("mercenaryReviveNum"))
                object.mercenaryReviveNum = message.mercenaryReviveNum;
            if (message.diamondTaskNum != null && message.hasOwnProperty("diamondTaskNum"))
                object.diamondTaskNum = message.diamondTaskNum;
            if (message.heroSoulsTaskNum != null && message.hasOwnProperty("heroSoulsTaskNum"))
                object.heroSoulsTaskNum = message.heroSoulsTaskNum;
            if (message.equipTaskNum != null && message.hasOwnProperty("equipTaskNum"))
                object.equipTaskNum = message.equipTaskNum;
            if (message.goldTaskNum != null && message.hasOwnProperty("goldTaskNum"))
                object.goldTaskNum = message.goldTaskNum;
            if (message.skillTaskNum != null && message.hasOwnProperty("skillTaskNum"))
                object.skillTaskNum = message.skillTaskNum;
            if (message.missionMaxNum != null && message.hasOwnProperty("missionMaxNum"))
                object.missionMaxNum = message.missionMaxNum;
            if (message.darkRitualTotalNum != null && message.hasOwnProperty("darkRitualTotalNum"))
                object.darkRitualTotalNum = message.darkRitualTotalNum;
            if (message.equipTotalNum != null && message.hasOwnProperty("equipTotalNum"))
                object.equipTotalNum = message.equipTotalNum;
            if (message.TotalOnlineTime != null && message.hasOwnProperty("TotalOnlineTime"))
                object.TotalOnlineTime = message.TotalOnlineTime;
            return object;
        };

        /**
         * Converts this RiskDataMsg to JSON.
         * @function toJSON
         * @memberof protocol.RiskDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RiskDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RiskDataMsg;
    })();

    protocol.RebirthDataListMsg = (function() {

        /**
         * Properties of a RebirthDataListMsg.
         * @memberof protocol
         * @interface IRebirthDataListMsg
         * @property {Array.<protocol.IRebirthDataMsg>|null} [list] RebirthDataListMsg list
         */

        /**
         * Constructs a new RebirthDataListMsg.
         * @memberof protocol
         * @classdesc Represents a RebirthDataListMsg.
         * @implements IRebirthDataListMsg
         * @constructor
         * @param {protocol.IRebirthDataListMsg=} [properties] Properties to set
         */
        function RebirthDataListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RebirthDataListMsg list.
         * @member {Array.<protocol.IRebirthDataMsg>} list
         * @memberof protocol.RebirthDataListMsg
         * @instance
         */
        RebirthDataListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new RebirthDataListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {protocol.IRebirthDataListMsg=} [properties] Properties to set
         * @returns {protocol.RebirthDataListMsg} RebirthDataListMsg instance
         */
        RebirthDataListMsg.create = function create(properties) {
            return new RebirthDataListMsg(properties);
        };

        /**
         * Encodes the specified RebirthDataListMsg message. Does not implicitly {@link protocol.RebirthDataListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {protocol.IRebirthDataListMsg} message RebirthDataListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebirthDataListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.RebirthDataMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RebirthDataListMsg message, length delimited. Does not implicitly {@link protocol.RebirthDataListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {protocol.IRebirthDataListMsg} message RebirthDataListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebirthDataListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RebirthDataListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RebirthDataListMsg} RebirthDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebirthDataListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RebirthDataListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.RebirthDataMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RebirthDataListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RebirthDataListMsg} RebirthDataListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebirthDataListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RebirthDataListMsg message.
         * @function verify
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RebirthDataListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.RebirthDataMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RebirthDataListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RebirthDataListMsg} RebirthDataListMsg
         */
        RebirthDataListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RebirthDataListMsg)
                return object;
            var message = new $root.protocol.RebirthDataListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.RebirthDataListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.RebirthDataListMsg.list: object expected");
                    message.list[i] = $root.protocol.RebirthDataMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RebirthDataListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RebirthDataListMsg
         * @static
         * @param {protocol.RebirthDataListMsg} message RebirthDataListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RebirthDataListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.RebirthDataMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this RebirthDataListMsg to JSON.
         * @function toJSON
         * @memberof protocol.RebirthDataListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RebirthDataListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RebirthDataListMsg;
    })();

    protocol.RebirthDataMsg = (function() {

        /**
         * Properties of a RebirthDataMsg.
         * @memberof protocol
         * @interface IRebirthDataMsg
         * @property {number} Number RebirthDataMsg Number
         * @property {number} GameTime RebirthDataMsg GameTime
         * @property {number} MissionNum RebirthDataMsg MissionNum
         * @property {string} HeroSouls RebirthDataMsg HeroSouls
         */

        /**
         * Constructs a new RebirthDataMsg.
         * @memberof protocol
         * @classdesc Represents a RebirthDataMsg.
         * @implements IRebirthDataMsg
         * @constructor
         * @param {protocol.IRebirthDataMsg=} [properties] Properties to set
         */
        function RebirthDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RebirthDataMsg Number.
         * @member {number} Number
         * @memberof protocol.RebirthDataMsg
         * @instance
         */
        RebirthDataMsg.prototype.Number = 0;

        /**
         * RebirthDataMsg GameTime.
         * @member {number} GameTime
         * @memberof protocol.RebirthDataMsg
         * @instance
         */
        RebirthDataMsg.prototype.GameTime = 0;

        /**
         * RebirthDataMsg MissionNum.
         * @member {number} MissionNum
         * @memberof protocol.RebirthDataMsg
         * @instance
         */
        RebirthDataMsg.prototype.MissionNum = 0;

        /**
         * RebirthDataMsg HeroSouls.
         * @member {string} HeroSouls
         * @memberof protocol.RebirthDataMsg
         * @instance
         */
        RebirthDataMsg.prototype.HeroSouls = "";

        /**
         * Creates a new RebirthDataMsg instance using the specified properties.
         * @function create
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {protocol.IRebirthDataMsg=} [properties] Properties to set
         * @returns {protocol.RebirthDataMsg} RebirthDataMsg instance
         */
        RebirthDataMsg.create = function create(properties) {
            return new RebirthDataMsg(properties);
        };

        /**
         * Encodes the specified RebirthDataMsg message. Does not implicitly {@link protocol.RebirthDataMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {protocol.IRebirthDataMsg} message RebirthDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebirthDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Number);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameTime);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MissionNum);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.HeroSouls);
            return writer;
        };

        /**
         * Encodes the specified RebirthDataMsg message, length delimited. Does not implicitly {@link protocol.RebirthDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {protocol.IRebirthDataMsg} message RebirthDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebirthDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RebirthDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RebirthDataMsg} RebirthDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebirthDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RebirthDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Number = reader.int32();
                    break;
                case 2:
                    message.GameTime = reader.int32();
                    break;
                case 3:
                    message.MissionNum = reader.int32();
                    break;
                case 4:
                    message.HeroSouls = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Number"))
                throw $util.ProtocolError("missing required 'Number'", { instance: message });
            if (!message.hasOwnProperty("GameTime"))
                throw $util.ProtocolError("missing required 'GameTime'", { instance: message });
            if (!message.hasOwnProperty("MissionNum"))
                throw $util.ProtocolError("missing required 'MissionNum'", { instance: message });
            if (!message.hasOwnProperty("HeroSouls"))
                throw $util.ProtocolError("missing required 'HeroSouls'", { instance: message });
            return message;
        };

        /**
         * Decodes a RebirthDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RebirthDataMsg} RebirthDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebirthDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RebirthDataMsg message.
         * @function verify
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RebirthDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Number))
                return "Number: integer expected";
            if (!$util.isInteger(message.GameTime))
                return "GameTime: integer expected";
            if (!$util.isInteger(message.MissionNum))
                return "MissionNum: integer expected";
            if (!$util.isString(message.HeroSouls))
                return "HeroSouls: string expected";
            return null;
        };

        /**
         * Creates a RebirthDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RebirthDataMsg} RebirthDataMsg
         */
        RebirthDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RebirthDataMsg)
                return object;
            var message = new $root.protocol.RebirthDataMsg();
            if (object.Number != null)
                message.Number = object.Number | 0;
            if (object.GameTime != null)
                message.GameTime = object.GameTime | 0;
            if (object.MissionNum != null)
                message.MissionNum = object.MissionNum | 0;
            if (object.HeroSouls != null)
                message.HeroSouls = String(object.HeroSouls);
            return message;
        };

        /**
         * Creates a plain object from a RebirthDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RebirthDataMsg
         * @static
         * @param {protocol.RebirthDataMsg} message RebirthDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RebirthDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Number = 0;
                object.GameTime = 0;
                object.MissionNum = 0;
                object.HeroSouls = "";
            }
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            if (message.GameTime != null && message.hasOwnProperty("GameTime"))
                object.GameTime = message.GameTime;
            if (message.MissionNum != null && message.hasOwnProperty("MissionNum"))
                object.MissionNum = message.MissionNum;
            if (message.HeroSouls != null && message.hasOwnProperty("HeroSouls"))
                object.HeroSouls = message.HeroSouls;
            return object;
        };

        /**
         * Converts this RebirthDataMsg to JSON.
         * @function toJSON
         * @memberof protocol.RebirthDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RebirthDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RebirthDataMsg;
    })();

    protocol.HeroSkinListMsg = (function() {

        /**
         * Properties of a HeroSkinListMsg.
         * @memberof protocol
         * @interface IHeroSkinListMsg
         * @property {Array.<protocol.IHeroSkinMsg>|null} [list] HeroSkinListMsg list
         */

        /**
         * Constructs a new HeroSkinListMsg.
         * @memberof protocol
         * @classdesc Represents a HeroSkinListMsg.
         * @implements IHeroSkinListMsg
         * @constructor
         * @param {protocol.IHeroSkinListMsg=} [properties] Properties to set
         */
        function HeroSkinListMsg(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroSkinListMsg list.
         * @member {Array.<protocol.IHeroSkinMsg>} list
         * @memberof protocol.HeroSkinListMsg
         * @instance
         */
        HeroSkinListMsg.prototype.list = $util.emptyArray;

        /**
         * Creates a new HeroSkinListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {protocol.IHeroSkinListMsg=} [properties] Properties to set
         * @returns {protocol.HeroSkinListMsg} HeroSkinListMsg instance
         */
        HeroSkinListMsg.create = function create(properties) {
            return new HeroSkinListMsg(properties);
        };

        /**
         * Encodes the specified HeroSkinListMsg message. Does not implicitly {@link protocol.HeroSkinListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {protocol.IHeroSkinListMsg} message HeroSkinListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSkinListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.protocol.HeroSkinMsg.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeroSkinListMsg message, length delimited. Does not implicitly {@link protocol.HeroSkinListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {protocol.IHeroSkinListMsg} message HeroSkinListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSkinListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroSkinListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroSkinListMsg} HeroSkinListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSkinListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroSkinListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.protocol.HeroSkinMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeroSkinListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroSkinListMsg} HeroSkinListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSkinListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroSkinListMsg message.
         * @function verify
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroSkinListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.protocol.HeroSkinMsg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HeroSkinListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroSkinListMsg} HeroSkinListMsg
         */
        HeroSkinListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroSkinListMsg)
                return object;
            var message = new $root.protocol.HeroSkinListMsg();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".protocol.HeroSkinListMsg.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".protocol.HeroSkinListMsg.list: object expected");
                    message.list[i] = $root.protocol.HeroSkinMsg.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HeroSkinListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroSkinListMsg
         * @static
         * @param {protocol.HeroSkinListMsg} message HeroSkinListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroSkinListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.protocol.HeroSkinMsg.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this HeroSkinListMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroSkinListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroSkinListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroSkinListMsg;
    })();

    protocol.HeroSkinMsg = (function() {

        /**
         * Properties of a HeroSkinMsg.
         * @memberof protocol
         * @interface IHeroSkinMsg
         * @property {number} id HeroSkinMsg id
         * @property {number} num HeroSkinMsg num
         * @property {boolean} state HeroSkinMsg state
         * @property {boolean} isNewSkin HeroSkinMsg isNewSkin
         */

        /**
         * Constructs a new HeroSkinMsg.
         * @memberof protocol
         * @classdesc Represents a HeroSkinMsg.
         * @implements IHeroSkinMsg
         * @constructor
         * @param {protocol.IHeroSkinMsg=} [properties] Properties to set
         */
        function HeroSkinMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeroSkinMsg id.
         * @member {number} id
         * @memberof protocol.HeroSkinMsg
         * @instance
         */
        HeroSkinMsg.prototype.id = 0;

        /**
         * HeroSkinMsg num.
         * @member {number} num
         * @memberof protocol.HeroSkinMsg
         * @instance
         */
        HeroSkinMsg.prototype.num = 0;

        /**
         * HeroSkinMsg state.
         * @member {boolean} state
         * @memberof protocol.HeroSkinMsg
         * @instance
         */
        HeroSkinMsg.prototype.state = false;

        /**
         * HeroSkinMsg isNewSkin.
         * @member {boolean} isNewSkin
         * @memberof protocol.HeroSkinMsg
         * @instance
         */
        HeroSkinMsg.prototype.isNewSkin = false;

        /**
         * Creates a new HeroSkinMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {protocol.IHeroSkinMsg=} [properties] Properties to set
         * @returns {protocol.HeroSkinMsg} HeroSkinMsg instance
         */
        HeroSkinMsg.create = function create(properties) {
            return new HeroSkinMsg(properties);
        };

        /**
         * Encodes the specified HeroSkinMsg message. Does not implicitly {@link protocol.HeroSkinMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {protocol.IHeroSkinMsg} message HeroSkinMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSkinMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.state);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isNewSkin);
            return writer;
        };

        /**
         * Encodes the specified HeroSkinMsg message, length delimited. Does not implicitly {@link protocol.HeroSkinMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {protocol.IHeroSkinMsg} message HeroSkinMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeroSkinMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeroSkinMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeroSkinMsg} HeroSkinMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSkinMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeroSkinMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                case 3:
                    message.state = reader.bool();
                    break;
                case 4:
                    message.isNewSkin = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            if (!message.hasOwnProperty("isNewSkin"))
                throw $util.ProtocolError("missing required 'isNewSkin'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeroSkinMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeroSkinMsg} HeroSkinMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeroSkinMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeroSkinMsg message.
         * @function verify
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeroSkinMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            if (typeof message.state !== "boolean")
                return "state: boolean expected";
            if (typeof message.isNewSkin !== "boolean")
                return "isNewSkin: boolean expected";
            return null;
        };

        /**
         * Creates a HeroSkinMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeroSkinMsg} HeroSkinMsg
         */
        HeroSkinMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeroSkinMsg)
                return object;
            var message = new $root.protocol.HeroSkinMsg();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.state != null)
                message.state = Boolean(object.state);
            if (object.isNewSkin != null)
                message.isNewSkin = Boolean(object.isNewSkin);
            return message;
        };

        /**
         * Creates a plain object from a HeroSkinMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeroSkinMsg
         * @static
         * @param {protocol.HeroSkinMsg} message HeroSkinMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeroSkinMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.num = 0;
                object.state = false;
                object.isNewSkin = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.isNewSkin != null && message.hasOwnProperty("isNewSkin"))
                object.isNewSkin = message.isNewSkin;
            return object;
        };

        /**
         * Converts this HeroSkinMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeroSkinMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeroSkinMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeroSkinMsg;
    })();

    protocol.LotteryStateMsg = (function() {

        /**
         * Properties of a LotteryStateMsg.
         * @memberof protocol
         * @interface ILotteryStateMsg
         * @property {number} adEquipNum LotteryStateMsg adEquipNum
         * @property {number} adSkinNum LotteryStateMsg adSkinNum
         * @property {number} adMercenaryNum LotteryStateMsg adMercenaryNum
         * @property {number} freeEquipNum LotteryStateMsg freeEquipNum
         * @property {number} freeSkinNum LotteryStateMsg freeSkinNum
         * @property {number} freeMercenaryNum LotteryStateMsg freeMercenaryNum
         * @property {number} halfEquipNum LotteryStateMsg halfEquipNum
         * @property {number} halfSkinNum LotteryStateMsg halfSkinNum
         * @property {number} halfMercenaryNum LotteryStateMsg halfMercenaryNum
         */

        /**
         * Constructs a new LotteryStateMsg.
         * @memberof protocol
         * @classdesc Represents a LotteryStateMsg.
         * @implements ILotteryStateMsg
         * @constructor
         * @param {protocol.ILotteryStateMsg=} [properties] Properties to set
         */
        function LotteryStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LotteryStateMsg adEquipNum.
         * @member {number} adEquipNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.adEquipNum = 0;

        /**
         * LotteryStateMsg adSkinNum.
         * @member {number} adSkinNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.adSkinNum = 0;

        /**
         * LotteryStateMsg adMercenaryNum.
         * @member {number} adMercenaryNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.adMercenaryNum = 0;

        /**
         * LotteryStateMsg freeEquipNum.
         * @member {number} freeEquipNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.freeEquipNum = 0;

        /**
         * LotteryStateMsg freeSkinNum.
         * @member {number} freeSkinNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.freeSkinNum = 0;

        /**
         * LotteryStateMsg freeMercenaryNum.
         * @member {number} freeMercenaryNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.freeMercenaryNum = 0;

        /**
         * LotteryStateMsg halfEquipNum.
         * @member {number} halfEquipNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.halfEquipNum = 0;

        /**
         * LotteryStateMsg halfSkinNum.
         * @member {number} halfSkinNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.halfSkinNum = 0;

        /**
         * LotteryStateMsg halfMercenaryNum.
         * @member {number} halfMercenaryNum
         * @memberof protocol.LotteryStateMsg
         * @instance
         */
        LotteryStateMsg.prototype.halfMercenaryNum = 0;

        /**
         * Creates a new LotteryStateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {protocol.ILotteryStateMsg=} [properties] Properties to set
         * @returns {protocol.LotteryStateMsg} LotteryStateMsg instance
         */
        LotteryStateMsg.create = function create(properties) {
            return new LotteryStateMsg(properties);
        };

        /**
         * Encodes the specified LotteryStateMsg message. Does not implicitly {@link protocol.LotteryStateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {protocol.ILotteryStateMsg} message LotteryStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.adEquipNum);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.adSkinNum);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.adMercenaryNum);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.freeEquipNum);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.freeSkinNum);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.freeMercenaryNum);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.halfEquipNum);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.halfSkinNum);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.halfMercenaryNum);
            return writer;
        };

        /**
         * Encodes the specified LotteryStateMsg message, length delimited. Does not implicitly {@link protocol.LotteryStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {protocol.ILotteryStateMsg} message LotteryStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LotteryStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LotteryStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LotteryStateMsg} LotteryStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryStateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LotteryStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.adEquipNum = reader.int32();
                    break;
                case 2:
                    message.adSkinNum = reader.int32();
                    break;
                case 3:
                    message.adMercenaryNum = reader.int32();
                    break;
                case 4:
                    message.freeEquipNum = reader.int32();
                    break;
                case 5:
                    message.freeSkinNum = reader.int32();
                    break;
                case 6:
                    message.freeMercenaryNum = reader.int32();
                    break;
                case 7:
                    message.halfEquipNum = reader.int32();
                    break;
                case 8:
                    message.halfSkinNum = reader.int32();
                    break;
                case 9:
                    message.halfMercenaryNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("adEquipNum"))
                throw $util.ProtocolError("missing required 'adEquipNum'", { instance: message });
            if (!message.hasOwnProperty("adSkinNum"))
                throw $util.ProtocolError("missing required 'adSkinNum'", { instance: message });
            if (!message.hasOwnProperty("adMercenaryNum"))
                throw $util.ProtocolError("missing required 'adMercenaryNum'", { instance: message });
            if (!message.hasOwnProperty("freeEquipNum"))
                throw $util.ProtocolError("missing required 'freeEquipNum'", { instance: message });
            if (!message.hasOwnProperty("freeSkinNum"))
                throw $util.ProtocolError("missing required 'freeSkinNum'", { instance: message });
            if (!message.hasOwnProperty("freeMercenaryNum"))
                throw $util.ProtocolError("missing required 'freeMercenaryNum'", { instance: message });
            if (!message.hasOwnProperty("halfEquipNum"))
                throw $util.ProtocolError("missing required 'halfEquipNum'", { instance: message });
            if (!message.hasOwnProperty("halfSkinNum"))
                throw $util.ProtocolError("missing required 'halfSkinNum'", { instance: message });
            if (!message.hasOwnProperty("halfMercenaryNum"))
                throw $util.ProtocolError("missing required 'halfMercenaryNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a LotteryStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LotteryStateMsg} LotteryStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LotteryStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LotteryStateMsg message.
         * @function verify
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LotteryStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.adEquipNum))
                return "adEquipNum: integer expected";
            if (!$util.isInteger(message.adSkinNum))
                return "adSkinNum: integer expected";
            if (!$util.isInteger(message.adMercenaryNum))
                return "adMercenaryNum: integer expected";
            if (!$util.isInteger(message.freeEquipNum))
                return "freeEquipNum: integer expected";
            if (!$util.isInteger(message.freeSkinNum))
                return "freeSkinNum: integer expected";
            if (!$util.isInteger(message.freeMercenaryNum))
                return "freeMercenaryNum: integer expected";
            if (!$util.isInteger(message.halfEquipNum))
                return "halfEquipNum: integer expected";
            if (!$util.isInteger(message.halfSkinNum))
                return "halfSkinNum: integer expected";
            if (!$util.isInteger(message.halfMercenaryNum))
                return "halfMercenaryNum: integer expected";
            return null;
        };

        /**
         * Creates a LotteryStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LotteryStateMsg} LotteryStateMsg
         */
        LotteryStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LotteryStateMsg)
                return object;
            var message = new $root.protocol.LotteryStateMsg();
            if (object.adEquipNum != null)
                message.adEquipNum = object.adEquipNum | 0;
            if (object.adSkinNum != null)
                message.adSkinNum = object.adSkinNum | 0;
            if (object.adMercenaryNum != null)
                message.adMercenaryNum = object.adMercenaryNum | 0;
            if (object.freeEquipNum != null)
                message.freeEquipNum = object.freeEquipNum | 0;
            if (object.freeSkinNum != null)
                message.freeSkinNum = object.freeSkinNum | 0;
            if (object.freeMercenaryNum != null)
                message.freeMercenaryNum = object.freeMercenaryNum | 0;
            if (object.halfEquipNum != null)
                message.halfEquipNum = object.halfEquipNum | 0;
            if (object.halfSkinNum != null)
                message.halfSkinNum = object.halfSkinNum | 0;
            if (object.halfMercenaryNum != null)
                message.halfMercenaryNum = object.halfMercenaryNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a LotteryStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LotteryStateMsg
         * @static
         * @param {protocol.LotteryStateMsg} message LotteryStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LotteryStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.adEquipNum = 0;
                object.adSkinNum = 0;
                object.adMercenaryNum = 0;
                object.freeEquipNum = 0;
                object.freeSkinNum = 0;
                object.freeMercenaryNum = 0;
                object.halfEquipNum = 0;
                object.halfSkinNum = 0;
                object.halfMercenaryNum = 0;
            }
            if (message.adEquipNum != null && message.hasOwnProperty("adEquipNum"))
                object.adEquipNum = message.adEquipNum;
            if (message.adSkinNum != null && message.hasOwnProperty("adSkinNum"))
                object.adSkinNum = message.adSkinNum;
            if (message.adMercenaryNum != null && message.hasOwnProperty("adMercenaryNum"))
                object.adMercenaryNum = message.adMercenaryNum;
            if (message.freeEquipNum != null && message.hasOwnProperty("freeEquipNum"))
                object.freeEquipNum = message.freeEquipNum;
            if (message.freeSkinNum != null && message.hasOwnProperty("freeSkinNum"))
                object.freeSkinNum = message.freeSkinNum;
            if (message.freeMercenaryNum != null && message.hasOwnProperty("freeMercenaryNum"))
                object.freeMercenaryNum = message.freeMercenaryNum;
            if (message.halfEquipNum != null && message.hasOwnProperty("halfEquipNum"))
                object.halfEquipNum = message.halfEquipNum;
            if (message.halfSkinNum != null && message.hasOwnProperty("halfSkinNum"))
                object.halfSkinNum = message.halfSkinNum;
            if (message.halfMercenaryNum != null && message.hasOwnProperty("halfMercenaryNum"))
                object.halfMercenaryNum = message.halfMercenaryNum;
            return object;
        };

        /**
         * Converts this LotteryStateMsg to JSON.
         * @function toJSON
         * @memberof protocol.LotteryStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LotteryStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LotteryStateMsg;
    })();

    protocol.ActivityItemStateMsg = (function() {

        /**
         * Properties of an ActivityItemStateMsg.
         * @memberof protocol
         * @interface IActivityItemStateMsg
         * @property {number} activityId ActivityItemStateMsg activityId
         * @property {string} receiveState ActivityItemStateMsg receiveState
         */

        /**
         * Constructs a new ActivityItemStateMsg.
         * @memberof protocol
         * @classdesc Represents an ActivityItemStateMsg.
         * @implements IActivityItemStateMsg
         * @constructor
         * @param {protocol.IActivityItemStateMsg=} [properties] Properties to set
         */
        function ActivityItemStateMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityItemStateMsg activityId.
         * @member {number} activityId
         * @memberof protocol.ActivityItemStateMsg
         * @instance
         */
        ActivityItemStateMsg.prototype.activityId = 0;

        /**
         * ActivityItemStateMsg receiveState.
         * @member {string} receiveState
         * @memberof protocol.ActivityItemStateMsg
         * @instance
         */
        ActivityItemStateMsg.prototype.receiveState = "";

        /**
         * Creates a new ActivityItemStateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {protocol.IActivityItemStateMsg=} [properties] Properties to set
         * @returns {protocol.ActivityItemStateMsg} ActivityItemStateMsg instance
         */
        ActivityItemStateMsg.create = function create(properties) {
            return new ActivityItemStateMsg(properties);
        };

        /**
         * Encodes the specified ActivityItemStateMsg message. Does not implicitly {@link protocol.ActivityItemStateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {protocol.IActivityItemStateMsg} message ActivityItemStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityItemStateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.receiveState);
            return writer;
        };

        /**
         * Encodes the specified ActivityItemStateMsg message, length delimited. Does not implicitly {@link protocol.ActivityItemStateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {protocol.IActivityItemStateMsg} message ActivityItemStateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityItemStateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityItemStateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ActivityItemStateMsg} ActivityItemStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityItemStateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ActivityItemStateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.receiveState = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("receiveState"))
                throw $util.ProtocolError("missing required 'receiveState'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityItemStateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ActivityItemStateMsg} ActivityItemStateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityItemStateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityItemStateMsg message.
         * @function verify
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityItemStateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isString(message.receiveState))
                return "receiveState: string expected";
            return null;
        };

        /**
         * Creates an ActivityItemStateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ActivityItemStateMsg} ActivityItemStateMsg
         */
        ActivityItemStateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ActivityItemStateMsg)
                return object;
            var message = new $root.protocol.ActivityItemStateMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.receiveState != null)
                message.receiveState = String(object.receiveState);
            return message;
        };

        /**
         * Creates a plain object from an ActivityItemStateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ActivityItemStateMsg
         * @static
         * @param {protocol.ActivityItemStateMsg} message ActivityItemStateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityItemStateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.activityId = 0;
                object.receiveState = "";
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.receiveState != null && message.hasOwnProperty("receiveState"))
                object.receiveState = message.receiveState;
            return object;
        };

        /**
         * Converts this ActivityItemStateMsg to JSON.
         * @function toJSON
         * @memberof protocol.ActivityItemStateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityItemStateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityItemStateMsg;
    })();

    protocol.KeepLotteryListMsg = (function() {

        /**
         * Properties of a KeepLotteryListMsg.
         * @memberof protocol
         * @interface IKeepLotteryListMsg
         * @property {Array.<protocol.IKeepLotteryMsg>|null} [keepLotteryList] KeepLotteryListMsg keepLotteryList
         */

        /**
         * Constructs a new KeepLotteryListMsg.
         * @memberof protocol
         * @classdesc Represents a KeepLotteryListMsg.
         * @implements IKeepLotteryListMsg
         * @constructor
         * @param {protocol.IKeepLotteryListMsg=} [properties] Properties to set
         */
        function KeepLotteryListMsg(properties) {
            this.keepLotteryList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeepLotteryListMsg keepLotteryList.
         * @member {Array.<protocol.IKeepLotteryMsg>} keepLotteryList
         * @memberof protocol.KeepLotteryListMsg
         * @instance
         */
        KeepLotteryListMsg.prototype.keepLotteryList = $util.emptyArray;

        /**
         * Creates a new KeepLotteryListMsg instance using the specified properties.
         * @function create
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {protocol.IKeepLotteryListMsg=} [properties] Properties to set
         * @returns {protocol.KeepLotteryListMsg} KeepLotteryListMsg instance
         */
        KeepLotteryListMsg.create = function create(properties) {
            return new KeepLotteryListMsg(properties);
        };

        /**
         * Encodes the specified KeepLotteryListMsg message. Does not implicitly {@link protocol.KeepLotteryListMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {protocol.IKeepLotteryListMsg} message KeepLotteryListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepLotteryListMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keepLotteryList != null && message.keepLotteryList.length)
                for (var i = 0; i < message.keepLotteryList.length; ++i)
                    $root.protocol.KeepLotteryMsg.encode(message.keepLotteryList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KeepLotteryListMsg message, length delimited. Does not implicitly {@link protocol.KeepLotteryListMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {protocol.IKeepLotteryListMsg} message KeepLotteryListMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepLotteryListMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepLotteryListMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.KeepLotteryListMsg} KeepLotteryListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepLotteryListMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.KeepLotteryListMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.keepLotteryList && message.keepLotteryList.length))
                        message.keepLotteryList = [];
                    message.keepLotteryList.push($root.protocol.KeepLotteryMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeepLotteryListMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.KeepLotteryListMsg} KeepLotteryListMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepLotteryListMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepLotteryListMsg message.
         * @function verify
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepLotteryListMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keepLotteryList != null && message.hasOwnProperty("keepLotteryList")) {
                if (!Array.isArray(message.keepLotteryList))
                    return "keepLotteryList: array expected";
                for (var i = 0; i < message.keepLotteryList.length; ++i) {
                    var error = $root.protocol.KeepLotteryMsg.verify(message.keepLotteryList[i]);
                    if (error)
                        return "keepLotteryList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a KeepLotteryListMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.KeepLotteryListMsg} KeepLotteryListMsg
         */
        KeepLotteryListMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.KeepLotteryListMsg)
                return object;
            var message = new $root.protocol.KeepLotteryListMsg();
            if (object.keepLotteryList) {
                if (!Array.isArray(object.keepLotteryList))
                    throw TypeError(".protocol.KeepLotteryListMsg.keepLotteryList: array expected");
                message.keepLotteryList = [];
                for (var i = 0; i < object.keepLotteryList.length; ++i) {
                    if (typeof object.keepLotteryList[i] !== "object")
                        throw TypeError(".protocol.KeepLotteryListMsg.keepLotteryList: object expected");
                    message.keepLotteryList[i] = $root.protocol.KeepLotteryMsg.fromObject(object.keepLotteryList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a KeepLotteryListMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.KeepLotteryListMsg
         * @static
         * @param {protocol.KeepLotteryListMsg} message KeepLotteryListMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepLotteryListMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.keepLotteryList = [];
            if (message.keepLotteryList && message.keepLotteryList.length) {
                object.keepLotteryList = [];
                for (var j = 0; j < message.keepLotteryList.length; ++j)
                    object.keepLotteryList[j] = $root.protocol.KeepLotteryMsg.toObject(message.keepLotteryList[j], options);
            }
            return object;
        };

        /**
         * Converts this KeepLotteryListMsg to JSON.
         * @function toJSON
         * @memberof protocol.KeepLotteryListMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepLotteryListMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepLotteryListMsg;
    })();

    protocol.KeepLotteryMsg = (function() {

        /**
         * Properties of a KeepLotteryMsg.
         * @memberof protocol
         * @interface IKeepLotteryMsg
         * @property {number} activityId KeepLotteryMsg activityId
         * @property {number} lotteryNum KeepLotteryMsg lotteryNum
         * @property {Array.<number>|null} [recievedList] KeepLotteryMsg recievedList
         */

        /**
         * Constructs a new KeepLotteryMsg.
         * @memberof protocol
         * @classdesc Represents a KeepLotteryMsg.
         * @implements IKeepLotteryMsg
         * @constructor
         * @param {protocol.IKeepLotteryMsg=} [properties] Properties to set
         */
        function KeepLotteryMsg(properties) {
            this.recievedList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeepLotteryMsg activityId.
         * @member {number} activityId
         * @memberof protocol.KeepLotteryMsg
         * @instance
         */
        KeepLotteryMsg.prototype.activityId = 0;

        /**
         * KeepLotteryMsg lotteryNum.
         * @member {number} lotteryNum
         * @memberof protocol.KeepLotteryMsg
         * @instance
         */
        KeepLotteryMsg.prototype.lotteryNum = 0;

        /**
         * KeepLotteryMsg recievedList.
         * @member {Array.<number>} recievedList
         * @memberof protocol.KeepLotteryMsg
         * @instance
         */
        KeepLotteryMsg.prototype.recievedList = $util.emptyArray;

        /**
         * Creates a new KeepLotteryMsg instance using the specified properties.
         * @function create
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {protocol.IKeepLotteryMsg=} [properties] Properties to set
         * @returns {protocol.KeepLotteryMsg} KeepLotteryMsg instance
         */
        KeepLotteryMsg.create = function create(properties) {
            return new KeepLotteryMsg(properties);
        };

        /**
         * Encodes the specified KeepLotteryMsg message. Does not implicitly {@link protocol.KeepLotteryMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {protocol.IKeepLotteryMsg} message KeepLotteryMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepLotteryMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.activityId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lotteryNum);
            if (message.recievedList != null && message.recievedList.length)
                for (var i = 0; i < message.recievedList.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.recievedList[i]);
            return writer;
        };

        /**
         * Encodes the specified KeepLotteryMsg message, length delimited. Does not implicitly {@link protocol.KeepLotteryMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {protocol.IKeepLotteryMsg} message KeepLotteryMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepLotteryMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepLotteryMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.KeepLotteryMsg} KeepLotteryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepLotteryMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.KeepLotteryMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.activityId = reader.int32();
                    break;
                case 2:
                    message.lotteryNum = reader.int32();
                    break;
                case 3:
                    if (!(message.recievedList && message.recievedList.length))
                        message.recievedList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.recievedList.push(reader.int32());
                    } else
                        message.recievedList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("activityId"))
                throw $util.ProtocolError("missing required 'activityId'", { instance: message });
            if (!message.hasOwnProperty("lotteryNum"))
                throw $util.ProtocolError("missing required 'lotteryNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a KeepLotteryMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.KeepLotteryMsg} KeepLotteryMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepLotteryMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepLotteryMsg message.
         * @function verify
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepLotteryMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.activityId))
                return "activityId: integer expected";
            if (!$util.isInteger(message.lotteryNum))
                return "lotteryNum: integer expected";
            if (message.recievedList != null && message.hasOwnProperty("recievedList")) {
                if (!Array.isArray(message.recievedList))
                    return "recievedList: array expected";
                for (var i = 0; i < message.recievedList.length; ++i)
                    if (!$util.isInteger(message.recievedList[i]))
                        return "recievedList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a KeepLotteryMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.KeepLotteryMsg} KeepLotteryMsg
         */
        KeepLotteryMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.KeepLotteryMsg)
                return object;
            var message = new $root.protocol.KeepLotteryMsg();
            if (object.activityId != null)
                message.activityId = object.activityId | 0;
            if (object.lotteryNum != null)
                message.lotteryNum = object.lotteryNum | 0;
            if (object.recievedList) {
                if (!Array.isArray(object.recievedList))
                    throw TypeError(".protocol.KeepLotteryMsg.recievedList: array expected");
                message.recievedList = [];
                for (var i = 0; i < object.recievedList.length; ++i)
                    message.recievedList[i] = object.recievedList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a KeepLotteryMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.KeepLotteryMsg
         * @static
         * @param {protocol.KeepLotteryMsg} message KeepLotteryMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepLotteryMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.recievedList = [];
            if (options.defaults) {
                object.activityId = 0;
                object.lotteryNum = 0;
            }
            if (message.activityId != null && message.hasOwnProperty("activityId"))
                object.activityId = message.activityId;
            if (message.lotteryNum != null && message.hasOwnProperty("lotteryNum"))
                object.lotteryNum = message.lotteryNum;
            if (message.recievedList && message.recievedList.length) {
                object.recievedList = [];
                for (var j = 0; j < message.recievedList.length; ++j)
                    object.recievedList[j] = message.recievedList[j];
            }
            return object;
        };

        /**
         * Converts this KeepLotteryMsg to JSON.
         * @function toJSON
         * @memberof protocol.KeepLotteryMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepLotteryMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepLotteryMsg;
    })();

    protocol.TaskUpdateMsg = (function() {

        /**
         * Properties of a TaskUpdateMsg.
         * @memberof protocol
         * @interface ITaskUpdateMsg
         * @property {Array.<protocol.ITaskDataMsg>|null} [taskDataList] TaskUpdateMsg taskDataList
         */

        /**
         * Constructs a new TaskUpdateMsg.
         * @memberof protocol
         * @classdesc Represents a TaskUpdateMsg.
         * @implements ITaskUpdateMsg
         * @constructor
         * @param {protocol.ITaskUpdateMsg=} [properties] Properties to set
         */
        function TaskUpdateMsg(properties) {
            this.taskDataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskUpdateMsg taskDataList.
         * @member {Array.<protocol.ITaskDataMsg>} taskDataList
         * @memberof protocol.TaskUpdateMsg
         * @instance
         */
        TaskUpdateMsg.prototype.taskDataList = $util.emptyArray;

        /**
         * Creates a new TaskUpdateMsg instance using the specified properties.
         * @function create
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg=} [properties] Properties to set
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg instance
         */
        TaskUpdateMsg.create = function create(properties) {
            return new TaskUpdateMsg(properties);
        };

        /**
         * Encodes the specified TaskUpdateMsg message. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg} message TaskUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskUpdateMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskDataList != null && message.taskDataList.length)
                for (var i = 0; i < message.taskDataList.length; ++i)
                    $root.protocol.TaskDataMsg.encode(message.taskDataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TaskUpdateMsg message, length delimited. Does not implicitly {@link protocol.TaskUpdateMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.ITaskUpdateMsg} message TaskUpdateMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskUpdateMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskUpdateMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TaskUpdateMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.taskDataList && message.taskDataList.length))
                        message.taskDataList = [];
                    message.taskDataList.push($root.protocol.TaskDataMsg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TaskUpdateMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskUpdateMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskUpdateMsg message.
         * @function verify
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskUpdateMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskDataList != null && message.hasOwnProperty("taskDataList")) {
                if (!Array.isArray(message.taskDataList))
                    return "taskDataList: array expected";
                for (var i = 0; i < message.taskDataList.length; ++i) {
                    var error = $root.protocol.TaskDataMsg.verify(message.taskDataList[i]);
                    if (error)
                        return "taskDataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TaskUpdateMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TaskUpdateMsg} TaskUpdateMsg
         */
        TaskUpdateMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TaskUpdateMsg)
                return object;
            var message = new $root.protocol.TaskUpdateMsg();
            if (object.taskDataList) {
                if (!Array.isArray(object.taskDataList))
                    throw TypeError(".protocol.TaskUpdateMsg.taskDataList: array expected");
                message.taskDataList = [];
                for (var i = 0; i < object.taskDataList.length; ++i) {
                    if (typeof object.taskDataList[i] !== "object")
                        throw TypeError(".protocol.TaskUpdateMsg.taskDataList: object expected");
                    message.taskDataList[i] = $root.protocol.TaskDataMsg.fromObject(object.taskDataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TaskUpdateMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TaskUpdateMsg
         * @static
         * @param {protocol.TaskUpdateMsg} message TaskUpdateMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskUpdateMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.taskDataList = [];
            if (message.taskDataList && message.taskDataList.length) {
                object.taskDataList = [];
                for (var j = 0; j < message.taskDataList.length; ++j)
                    object.taskDataList[j] = $root.protocol.TaskDataMsg.toObject(message.taskDataList[j], options);
            }
            return object;
        };

        /**
         * Converts this TaskUpdateMsg to JSON.
         * @function toJSON
         * @memberof protocol.TaskUpdateMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskUpdateMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskUpdateMsg;
    })();

    protocol.TaskDataMsg = (function() {

        /**
         * Properties of a TaskDataMsg.
         * @memberof protocol
         * @interface ITaskDataMsg
         * @property {number} taskId TaskDataMsg taskId
         * @property {boolean} isComplete TaskDataMsg isComplete
         * @property {string} process TaskDataMsg process
         */

        /**
         * Constructs a new TaskDataMsg.
         * @memberof protocol
         * @classdesc Represents a TaskDataMsg.
         * @implements ITaskDataMsg
         * @constructor
         * @param {protocol.ITaskDataMsg=} [properties] Properties to set
         */
        function TaskDataMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskDataMsg taskId.
         * @member {number} taskId
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.taskId = 0;

        /**
         * TaskDataMsg isComplete.
         * @member {boolean} isComplete
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.isComplete = false;

        /**
         * TaskDataMsg process.
         * @member {string} process
         * @memberof protocol.TaskDataMsg
         * @instance
         */
        TaskDataMsg.prototype.process = "";

        /**
         * Creates a new TaskDataMsg instance using the specified properties.
         * @function create
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg=} [properties] Properties to set
         * @returns {protocol.TaskDataMsg} TaskDataMsg instance
         */
        TaskDataMsg.create = function create(properties) {
            return new TaskDataMsg(properties);
        };

        /**
         * Encodes the specified TaskDataMsg message. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg} message TaskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskDataMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isComplete);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.process);
            return writer;
        };

        /**
         * Encodes the specified TaskDataMsg message, length delimited. Does not implicitly {@link protocol.TaskDataMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.ITaskDataMsg} message TaskDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskDataMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskDataMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TaskDataMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.taskId = reader.int32();
                    break;
                case 2:
                    message.isComplete = reader.bool();
                    break;
                case 3:
                    message.process = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("taskId"))
                throw $util.ProtocolError("missing required 'taskId'", { instance: message });
            if (!message.hasOwnProperty("isComplete"))
                throw $util.ProtocolError("missing required 'isComplete'", { instance: message });
            if (!message.hasOwnProperty("process"))
                throw $util.ProtocolError("missing required 'process'", { instance: message });
            return message;
        };

        /**
         * Decodes a TaskDataMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskDataMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskDataMsg message.
         * @function verify
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskDataMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.taskId))
                return "taskId: integer expected";
            if (typeof message.isComplete !== "boolean")
                return "isComplete: boolean expected";
            if (!$util.isString(message.process))
                return "process: string expected";
            return null;
        };

        /**
         * Creates a TaskDataMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TaskDataMsg} TaskDataMsg
         */
        TaskDataMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TaskDataMsg)
                return object;
            var message = new $root.protocol.TaskDataMsg();
            if (object.taskId != null)
                message.taskId = object.taskId | 0;
            if (object.isComplete != null)
                message.isComplete = Boolean(object.isComplete);
            if (object.process != null)
                message.process = String(object.process);
            return message;
        };

        /**
         * Creates a plain object from a TaskDataMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TaskDataMsg
         * @static
         * @param {protocol.TaskDataMsg} message TaskDataMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskDataMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.taskId = 0;
                object.isComplete = false;
                object.process = "";
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                object.taskId = message.taskId;
            if (message.isComplete != null && message.hasOwnProperty("isComplete"))
                object.isComplete = message.isComplete;
            if (message.process != null && message.hasOwnProperty("process"))
                object.process = message.process;
            return object;
        };

        /**
         * Converts this TaskDataMsg to JSON.
         * @function toJSON
         * @memberof protocol.TaskDataMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskDataMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskDataMsg;
    })();

    return protocol;
})();