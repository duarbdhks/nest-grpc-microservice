/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.comments = (function() {

    /**
     * Namespace comments.
     * @exports comments
     * @namespace
     */
    var comments = {};

    comments.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof comments
         * @interface IComment
         * @property {string|null} [id] Comment id
         * @property {string|null} [organization] Comment organization
         * @property {string|null} [comment] Comment comment
         * @property {string|null} [createdAt] Comment createdAt
         * @property {string|null} [updatedAt] Comment updatedAt
         */

        /**
         * Constructs a new Comment.
         * @memberof comments
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {comments.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment id.
         * @member {string} id
         * @memberof comments.Comment
         * @instance
         */
        Comment.prototype.id = "";

        /**
         * Comment organization.
         * @member {string} organization
         * @memberof comments.Comment
         * @instance
         */
        Comment.prototype.organization = "";

        /**
         * Comment comment.
         * @member {string} comment
         * @memberof comments.Comment
         * @instance
         */
        Comment.prototype.comment = "";

        /**
         * Comment createdAt.
         * @member {string} createdAt
         * @memberof comments.Comment
         * @instance
         */
        Comment.prototype.createdAt = "";

        /**
         * Comment updatedAt.
         * @member {string} updatedAt
         * @memberof comments.Comment
         * @instance
         */
        Comment.prototype.updatedAt = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof comments.Comment
         * @static
         * @param {comments.IComment=} [properties] Properties to set
         * @returns {comments.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link comments.Comment.verify|verify} messages.
         * @function encode
         * @memberof comments.Comment
         * @static
         * @param {comments.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.organization);
            if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.comment);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link comments.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof comments.Comment
         * @static
         * @param {comments.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof comments.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {comments.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comments.Comment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organization = reader.string();
                    break;
                case 3:
                    message.comment = reader.string();
                    break;
                case 4:
                    message.createdAt = reader.string();
                    break;
                case 5:
                    message.updatedAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof comments.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {comments.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof comments.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.organization != null && message.hasOwnProperty("organization"))
                if (!$util.isString(message.organization))
                    return "organization: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof comments.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {comments.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.comments.Comment)
                return object;
            var message = new $root.comments.Comment();
            if (object.id != null)
                message.id = String(object.id);
            if (object.organization != null)
                message.organization = String(object.organization);
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof comments.Comment
         * @static
         * @param {comments.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.organization = "";
                object.comment = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.organization != null && message.hasOwnProperty("organization"))
                object.organization = message.organization;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof comments.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Comment;
    })();

    comments.CreateCommentRequest = (function() {

        /**
         * Properties of a CreateCommentRequest.
         * @memberof comments
         * @interface ICreateCommentRequest
         * @property {string|null} [organization] CreateCommentRequest organization
         * @property {string|null} [comment] CreateCommentRequest comment
         */

        /**
         * Constructs a new CreateCommentRequest.
         * @memberof comments
         * @classdesc Represents a CreateCommentRequest.
         * @implements ICreateCommentRequest
         * @constructor
         * @param {comments.ICreateCommentRequest=} [properties] Properties to set
         */
        function CreateCommentRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateCommentRequest organization.
         * @member {string} organization
         * @memberof comments.CreateCommentRequest
         * @instance
         */
        CreateCommentRequest.prototype.organization = "";

        /**
         * CreateCommentRequest comment.
         * @member {string} comment
         * @memberof comments.CreateCommentRequest
         * @instance
         */
        CreateCommentRequest.prototype.comment = "";

        /**
         * Creates a new CreateCommentRequest instance using the specified properties.
         * @function create
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {comments.ICreateCommentRequest=} [properties] Properties to set
         * @returns {comments.CreateCommentRequest} CreateCommentRequest instance
         */
        CreateCommentRequest.create = function create(properties) {
            return new CreateCommentRequest(properties);
        };

        /**
         * Encodes the specified CreateCommentRequest message. Does not implicitly {@link comments.CreateCommentRequest.verify|verify} messages.
         * @function encode
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {comments.ICreateCommentRequest} message CreateCommentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCommentRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.organization);
            if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.comment);
            return writer;
        };

        /**
         * Encodes the specified CreateCommentRequest message, length delimited. Does not implicitly {@link comments.CreateCommentRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {comments.ICreateCommentRequest} message CreateCommentRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateCommentRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateCommentRequest message from the specified reader or buffer.
         * @function decode
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {comments.CreateCommentRequest} CreateCommentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCommentRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comments.CreateCommentRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.organization = reader.string();
                    break;
                case 2:
                    message.comment = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateCommentRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {comments.CreateCommentRequest} CreateCommentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateCommentRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateCommentRequest message.
         * @function verify
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateCommentRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.organization != null && message.hasOwnProperty("organization"))
                if (!$util.isString(message.organization))
                    return "organization: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            return null;
        };

        /**
         * Creates a CreateCommentRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {comments.CreateCommentRequest} CreateCommentRequest
         */
        CreateCommentRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.comments.CreateCommentRequest)
                return object;
            var message = new $root.comments.CreateCommentRequest();
            if (object.organization != null)
                message.organization = String(object.organization);
            if (object.comment != null)
                message.comment = String(object.comment);
            return message;
        };

        /**
         * Creates a plain object from a CreateCommentRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof comments.CreateCommentRequest
         * @static
         * @param {comments.CreateCommentRequest} message CreateCommentRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateCommentRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.organization = "";
                object.comment = "";
            }
            if (message.organization != null && message.hasOwnProperty("organization"))
                object.organization = message.organization;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            return object;
        };

        /**
         * Converts this CreateCommentRequest to JSON.
         * @function toJSON
         * @memberof comments.CreateCommentRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateCommentRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateCommentRequest;
    })();

    comments.CommentList = (function() {

        /**
         * Properties of a CommentList.
         * @memberof comments
         * @interface ICommentList
         * @property {Array.<comments.IComment>|null} [data] CommentList data
         */

        /**
         * Constructs a new CommentList.
         * @memberof comments
         * @classdesc Represents a CommentList.
         * @implements ICommentList
         * @constructor
         * @param {comments.ICommentList=} [properties] Properties to set
         */
        function CommentList(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommentList data.
         * @member {Array.<comments.IComment>} data
         * @memberof comments.CommentList
         * @instance
         */
        CommentList.prototype.data = $util.emptyArray;

        /**
         * Creates a new CommentList instance using the specified properties.
         * @function create
         * @memberof comments.CommentList
         * @static
         * @param {comments.ICommentList=} [properties] Properties to set
         * @returns {comments.CommentList} CommentList instance
         */
        CommentList.create = function create(properties) {
            return new CommentList(properties);
        };

        /**
         * Encodes the specified CommentList message. Does not implicitly {@link comments.CommentList.verify|verify} messages.
         * @function encode
         * @memberof comments.CommentList
         * @static
         * @param {comments.ICommentList} message CommentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommentList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.comments.Comment.encode(message.data[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommentList message, length delimited. Does not implicitly {@link comments.CommentList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof comments.CommentList
         * @static
         * @param {comments.ICommentList} message CommentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommentList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommentList message from the specified reader or buffer.
         * @function decode
         * @memberof comments.CommentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {comments.CommentList} CommentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommentList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.comments.CommentList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.comments.Comment.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommentList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof comments.CommentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {comments.CommentList} CommentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommentList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommentList message.
         * @function verify
         * @memberof comments.CommentList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommentList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.comments.Comment.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommentList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof comments.CommentList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {comments.CommentList} CommentList
         */
        CommentList.fromObject = function fromObject(object) {
            if (object instanceof $root.comments.CommentList)
                return object;
            var message = new $root.comments.CommentList();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".comments.CommentList.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".comments.CommentList.data: object expected");
                    message.data[i] = $root.comments.Comment.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CommentList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof comments.CommentList
         * @static
         * @param {comments.CommentList} message CommentList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommentList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.comments.Comment.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this CommentList to JSON.
         * @function toJSON
         * @memberof comments.CommentList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommentList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommentList;
    })();

    comments.CommentsService = (function() {

        /**
         * Constructs a new CommentsService service.
         * @memberof comments
         * @classdesc Represents a CommentsService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CommentsService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CommentsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CommentsService;

        /**
         * Creates new CommentsService service using the specified rpc implementation.
         * @function create
         * @memberof comments.CommentsService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CommentsService} RPC service. Useful where requests and/or responses are streamed.
         */
        CommentsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link comments.CommentsService#findAll}.
         * @memberof comments.CommentsService
         * @typedef findAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {comments.CommentList} [response] CommentList
         */

        /**
         * Calls findAll.
         * @function findAll
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @param {comments.CommentsService.findAllCallback} callback Node-style callback called with the error, if any, and CommentList
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CommentsService.prototype.findAll = function findAll(request, callback) {
            return this.rpcCall(findAll, $root.common.Query, $root.comments.CommentList, request, callback);
        }, "name", { value: "findAll" });

        /**
         * Calls findAll.
         * @function findAll
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @returns {Promise<comments.CommentList>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link comments.CommentsService#count}.
         * @memberof comments.CommentsService
         * @typedef countCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Count} [response] Count
         */

        /**
         * Calls count.
         * @function count
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @param {comments.CommentsService.countCallback} callback Node-style callback called with the error, if any, and Count
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CommentsService.prototype.count = function count(request, callback) {
            return this.rpcCall(count, $root.common.Query, $root.common.Count, request, callback);
        }, "name", { value: "count" });

        /**
         * Calls count.
         * @function count
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @returns {Promise<common.Count>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link comments.CommentsService#create}.
         * @memberof comments.CommentsService
         * @typedef createCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {comments.Comment} [response] Comment
         */

        /**
         * Calls create.
         * @function create
         * @memberof comments.CommentsService
         * @instance
         * @param {comments.ICreateCommentRequest} request CreateCommentRequest message or plain object
         * @param {comments.CommentsService.createCallback} callback Node-style callback called with the error, if any, and Comment
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CommentsService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.comments.CreateCommentRequest, $root.comments.Comment, request, callback);
        }, "name", { value: "create" });

        /**
         * Calls create.
         * @function create
         * @memberof comments.CommentsService
         * @instance
         * @param {comments.ICreateCommentRequest} request CreateCommentRequest message or plain object
         * @returns {Promise<comments.Comment>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link comments.CommentsService#destroy}.
         * @memberof comments.CommentsService
         * @typedef destroyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Count} [response] Count
         */

        /**
         * Calls destroy.
         * @function destroy
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @param {comments.CommentsService.destroyCallback} callback Node-style callback called with the error, if any, and Count
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CommentsService.prototype.destroy = function destroy(request, callback) {
            return this.rpcCall(destroy, $root.common.Query, $root.common.Count, request, callback);
        }, "name", { value: "destroy" });

        /**
         * Calls destroy.
         * @function destroy
         * @memberof comments.CommentsService
         * @instance
         * @param {common.IQuery} request Query message or plain object
         * @returns {Promise<common.Count>} Promise
         * @variation 2
         */

        return CommentsService;
    })();

    return comments;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Id = (function() {

        /**
         * Properties of an Id.
         * @memberof common
         * @interface IId
         * @property {string|null} [id] Id id
         */

        /**
         * Constructs a new Id.
         * @memberof common
         * @classdesc Represents an Id.
         * @implements IId
         * @constructor
         * @param {common.IId=} [properties] Properties to set
         */
        function Id(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Id id.
         * @member {string} id
         * @memberof common.Id
         * @instance
         */
        Id.prototype.id = "";

        /**
         * Creates a new Id instance using the specified properties.
         * @function create
         * @memberof common.Id
         * @static
         * @param {common.IId=} [properties] Properties to set
         * @returns {common.Id} Id instance
         */
        Id.create = function create(properties) {
            return new Id(properties);
        };

        /**
         * Encodes the specified Id message. Does not implicitly {@link common.Id.verify|verify} messages.
         * @function encode
         * @memberof common.Id
         * @static
         * @param {common.IId} message Id message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Id.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified Id message, length delimited. Does not implicitly {@link common.Id.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Id
         * @static
         * @param {common.IId} message Id message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Id.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Id message from the specified reader or buffer.
         * @function decode
         * @memberof common.Id
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Id} Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Id.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Id();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Id message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Id
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Id} Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Id.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Id message.
         * @function verify
         * @memberof common.Id
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Id.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates an Id message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Id
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Id} Id
         */
        Id.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Id)
                return object;
            var message = new $root.common.Id();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from an Id message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Id
         * @static
         * @param {common.Id} message Id
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Id.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Id to JSON.
         * @function toJSON
         * @memberof common.Id
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Id.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Id;
    })();

    common.Name = (function() {

        /**
         * Properties of a Name.
         * @memberof common
         * @interface IName
         * @property {string|null} [name] Name name
         */

        /**
         * Constructs a new Name.
         * @memberof common
         * @classdesc Represents a Name.
         * @implements IName
         * @constructor
         * @param {common.IName=} [properties] Properties to set
         */
        function Name(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Name name.
         * @member {string} name
         * @memberof common.Name
         * @instance
         */
        Name.prototype.name = "";

        /**
         * Creates a new Name instance using the specified properties.
         * @function create
         * @memberof common.Name
         * @static
         * @param {common.IName=} [properties] Properties to set
         * @returns {common.Name} Name instance
         */
        Name.create = function create(properties) {
            return new Name(properties);
        };

        /**
         * Encodes the specified Name message. Does not implicitly {@link common.Name.verify|verify} messages.
         * @function encode
         * @memberof common.Name
         * @static
         * @param {common.IName} message Name message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Name.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Name message, length delimited. Does not implicitly {@link common.Name.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Name
         * @static
         * @param {common.IName} message Name message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Name.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Name message from the specified reader or buffer.
         * @function decode
         * @memberof common.Name
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Name} Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Name.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Name();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Name message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Name
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Name} Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Name.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Name message.
         * @function verify
         * @memberof common.Name
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Name.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Name
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Name} Name
         */
        Name.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Name)
                return object;
            var message = new $root.common.Name();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Name
         * @static
         * @param {common.Name} message Name
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Name.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Name to JSON.
         * @function toJSON
         * @memberof common.Name
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Name.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Name;
    })();

    common.Query = (function() {

        /**
         * Properties of a Query.
         * @memberof common
         * @interface IQuery
         * @property {Array.<string>|null} [attributes] Query attributes
         * @property {string|null} [where] Query where
         * @property {string|null} [order] Query order
         * @property {number|null} [offset] Query offset
         * @property {number|null} [limit] Query limit
         */

        /**
         * Constructs a new Query.
         * @memberof common
         * @classdesc Represents a Query.
         * @implements IQuery
         * @constructor
         * @param {common.IQuery=} [properties] Properties to set
         */
        function Query(properties) {
            this.attributes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Query attributes.
         * @member {Array.<string>} attributes
         * @memberof common.Query
         * @instance
         */
        Query.prototype.attributes = $util.emptyArray;

        /**
         * Query where.
         * @member {string} where
         * @memberof common.Query
         * @instance
         */
        Query.prototype.where = "";

        /**
         * Query order.
         * @member {string} order
         * @memberof common.Query
         * @instance
         */
        Query.prototype.order = "";

        /**
         * Query offset.
         * @member {number} offset
         * @memberof common.Query
         * @instance
         */
        Query.prototype.offset = 0;

        /**
         * Query limit.
         * @member {number} limit
         * @memberof common.Query
         * @instance
         */
        Query.prototype.limit = 0;

        /**
         * Creates a new Query instance using the specified properties.
         * @function create
         * @memberof common.Query
         * @static
         * @param {common.IQuery=} [properties] Properties to set
         * @returns {common.Query} Query instance
         */
        Query.create = function create(properties) {
            return new Query(properties);
        };

        /**
         * Encodes the specified Query message. Does not implicitly {@link common.Query.verify|verify} messages.
         * @function encode
         * @memberof common.Query
         * @static
         * @param {common.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attributes != null && message.attributes.length)
                for (var i = 0; i < message.attributes.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.attributes[i]);
            if (message.where != null && Object.hasOwnProperty.call(message, "where"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.where);
            if (message.order != null && Object.hasOwnProperty.call(message, "order"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.order);
            if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.offset);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified Query message, length delimited. Does not implicitly {@link common.Query.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Query
         * @static
         * @param {common.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @function decode
         * @memberof common.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Query();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                    message.attributes.push(reader.string());
                    break;
                case 2:
                    message.where = reader.string();
                    break;
                case 3:
                    message.order = reader.string();
                    break;
                case 4:
                    message.offset = reader.int32();
                    break;
                case 5:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Query message.
         * @function verify
         * @memberof common.Query
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Query.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attributes != null && message.hasOwnProperty("attributes")) {
                if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                for (var i = 0; i < message.attributes.length; ++i)
                    if (!$util.isString(message.attributes[i]))
                        return "attributes: string[] expected";
            }
            if (message.where != null && message.hasOwnProperty("where"))
                if (!$util.isString(message.where))
                    return "where: string expected";
            if (message.order != null && message.hasOwnProperty("order"))
                if (!$util.isString(message.order))
                    return "order: string expected";
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Query
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Query} Query
         */
        Query.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Query)
                return object;
            var message = new $root.common.Query();
            if (object.attributes) {
                if (!Array.isArray(object.attributes))
                    throw TypeError(".common.Query.attributes: array expected");
                message.attributes = [];
                for (var i = 0; i < object.attributes.length; ++i)
                    message.attributes[i] = String(object.attributes[i]);
            }
            if (object.where != null)
                message.where = String(object.where);
            if (object.order != null)
                message.order = String(object.order);
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Query
         * @static
         * @param {common.Query} message Query
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Query.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.attributes = [];
            if (options.defaults) {
                object.where = "";
                object.order = "";
                object.offset = 0;
                object.limit = 0;
            }
            if (message.attributes && message.attributes.length) {
                object.attributes = [];
                for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = message.attributes[j];
            }
            if (message.where != null && message.hasOwnProperty("where"))
                object.where = message.where;
            if (message.order != null && message.hasOwnProperty("order"))
                object.order = message.order;
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this Query to JSON.
         * @function toJSON
         * @memberof common.Query
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Query.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Query;
    })();

    common.Count = (function() {

        /**
         * Properties of a Count.
         * @memberof common
         * @interface ICount
         * @property {number|null} [count] Count count
         */

        /**
         * Constructs a new Count.
         * @memberof common
         * @classdesc Represents a Count.
         * @implements ICount
         * @constructor
         * @param {common.ICount=} [properties] Properties to set
         */
        function Count(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Count count.
         * @member {number} count
         * @memberof common.Count
         * @instance
         */
        Count.prototype.count = 0;

        /**
         * Creates a new Count instance using the specified properties.
         * @function create
         * @memberof common.Count
         * @static
         * @param {common.ICount=} [properties] Properties to set
         * @returns {common.Count} Count instance
         */
        Count.create = function create(properties) {
            return new Count(properties);
        };

        /**
         * Encodes the specified Count message. Does not implicitly {@link common.Count.verify|verify} messages.
         * @function encode
         * @memberof common.Count
         * @static
         * @param {common.ICount} message Count message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Count.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified Count message, length delimited. Does not implicitly {@link common.Count.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Count
         * @static
         * @param {common.ICount} message Count message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Count.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Count message from the specified reader or buffer.
         * @function decode
         * @memberof common.Count
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Count} Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Count.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Count();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Count message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Count
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Count} Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Count.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Count message.
         * @function verify
         * @memberof common.Count
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Count.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a Count message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Count
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Count} Count
         */
        Count.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Count)
                return object;
            var message = new $root.common.Count();
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a Count message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Count
         * @static
         * @param {common.Count} message Count
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Count.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.count = 0;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this Count to JSON.
         * @function toJSON
         * @memberof common.Count
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Count.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Count;
    })();

    return common;
})();

module.exports = $root;
