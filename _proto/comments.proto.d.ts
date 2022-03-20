import * as $protobuf from "protobufjs";
/** Namespace comments. */
export namespace comments {

    /** Properties of a Comment. */
    interface IComment {

        /** Comment id */
        id?: (string|null);

        /** Comment organization */
        organization?: (string|null);

        /** Comment comment */
        comment?: (string|null);

        /** Comment createdAt */
        createdAt?: (string|null);

        /** Comment updatedAt */
        updatedAt?: (string|null);
    }

    /** Represents a Comment. */
    class Comment implements IComment {

        /**
         * Constructs a new Comment.
         * @param [properties] Properties to set
         */
        constructor(properties?: comments.IComment);

        /** Comment id. */
        public id: string;

        /** Comment organization. */
        public organization: string;

        /** Comment comment. */
        public comment: string;

        /** Comment createdAt. */
        public createdAt: string;

        /** Comment updatedAt. */
        public updatedAt: string;

        /**
         * Creates a new Comment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Comment instance
         */
        public static create(properties?: comments.IComment): comments.Comment;

        /**
         * Encodes the specified Comment message. Does not implicitly {@link comments.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comments.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link comments.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comments.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comments.Comment;

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comments.Comment;

        /**
         * Verifies a Comment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Comment
         */
        public static fromObject(object: { [k: string]: any }): comments.Comment;

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @param message Comment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comments.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Comment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateCommentRequest. */
    interface ICreateCommentRequest {

        /** CreateCommentRequest organization */
        organization?: (string|null);

        /** CreateCommentRequest comment */
        comment?: (string|null);
    }

    /** Represents a CreateCommentRequest. */
    class CreateCommentRequest implements ICreateCommentRequest {

        /**
         * Constructs a new CreateCommentRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: comments.ICreateCommentRequest);

        /** CreateCommentRequest organization. */
        public organization: string;

        /** CreateCommentRequest comment. */
        public comment: string;

        /**
         * Creates a new CreateCommentRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateCommentRequest instance
         */
        public static create(properties?: comments.ICreateCommentRequest): comments.CreateCommentRequest;

        /**
         * Encodes the specified CreateCommentRequest message. Does not implicitly {@link comments.CreateCommentRequest.verify|verify} messages.
         * @param message CreateCommentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comments.ICreateCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateCommentRequest message, length delimited. Does not implicitly {@link comments.CreateCommentRequest.verify|verify} messages.
         * @param message CreateCommentRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comments.ICreateCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateCommentRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateCommentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comments.CreateCommentRequest;

        /**
         * Decodes a CreateCommentRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateCommentRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comments.CreateCommentRequest;

        /**
         * Verifies a CreateCommentRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateCommentRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateCommentRequest
         */
        public static fromObject(object: { [k: string]: any }): comments.CreateCommentRequest;

        /**
         * Creates a plain object from a CreateCommentRequest message. Also converts values to other types if specified.
         * @param message CreateCommentRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comments.CreateCommentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateCommentRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommentList. */
    interface ICommentList {

        /** CommentList data */
        data?: (comments.IComment[]|null);
    }

    /** Represents a CommentList. */
    class CommentList implements ICommentList {

        /**
         * Constructs a new CommentList.
         * @param [properties] Properties to set
         */
        constructor(properties?: comments.ICommentList);

        /** CommentList data. */
        public data: comments.IComment[];

        /**
         * Creates a new CommentList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommentList instance
         */
        public static create(properties?: comments.ICommentList): comments.CommentList;

        /**
         * Encodes the specified CommentList message. Does not implicitly {@link comments.CommentList.verify|verify} messages.
         * @param message CommentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: comments.ICommentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommentList message, length delimited. Does not implicitly {@link comments.CommentList.verify|verify} messages.
         * @param message CommentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: comments.ICommentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommentList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): comments.CommentList;

        /**
         * Decodes a CommentList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): comments.CommentList;

        /**
         * Verifies a CommentList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommentList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommentList
         */
        public static fromObject(object: { [k: string]: any }): comments.CommentList;

        /**
         * Creates a plain object from a CommentList message. Also converts values to other types if specified.
         * @param message CommentList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: comments.CommentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommentList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a CommentsService */
    class CommentsService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CommentsService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CommentsService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CommentsService;

        /**
         * Calls findAll.
         * @param request Query message or plain object
         * @param callback Node-style callback called with the error, if any, and CommentList
         */
        public findAll(request: common.IQuery, callback: comments.CommentsService.findAllCallback): void;

        /**
         * Calls findAll.
         * @param request Query message or plain object
         * @returns Promise
         */
        public findAll(request: common.IQuery): Promise<comments.CommentList>;

        /**
         * Calls count.
         * @param request Query message or plain object
         * @param callback Node-style callback called with the error, if any, and Count
         */
        public count(request: common.IQuery, callback: comments.CommentsService.countCallback): void;

        /**
         * Calls count.
         * @param request Query message or plain object
         * @returns Promise
         */
        public count(request: common.IQuery): Promise<common.Count>;

        /**
         * Calls create.
         * @param request CreateCommentRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Comment
         */
        public create(request: comments.ICreateCommentRequest, callback: comments.CommentsService.createCallback): void;

        /**
         * Calls create.
         * @param request CreateCommentRequest message or plain object
         * @returns Promise
         */
        public create(request: comments.ICreateCommentRequest): Promise<comments.Comment>;

        /**
         * Calls destroy.
         * @param request Query message or plain object
         * @param callback Node-style callback called with the error, if any, and Count
         */
        public destroy(request: common.IQuery, callback: comments.CommentsService.destroyCallback): void;

        /**
         * Calls destroy.
         * @param request Query message or plain object
         * @returns Promise
         */
        public destroy(request: common.IQuery): Promise<common.Count>;
    }

    namespace CommentsService {

        /**
         * Callback as used by {@link comments.CommentsService#findAll}.
         * @param error Error, if any
         * @param [response] CommentList
         */
        type findAllCallback = (error: (Error|null), response?: comments.CommentList) => void;

        /**
         * Callback as used by {@link comments.CommentsService#count}.
         * @param error Error, if any
         * @param [response] Count
         */
        type countCallback = (error: (Error|null), response?: common.Count) => void;

        /**
         * Callback as used by {@link comments.CommentsService#create}.
         * @param error Error, if any
         * @param [response] Comment
         */
        type createCallback = (error: (Error|null), response?: comments.Comment) => void;

        /**
         * Callback as used by {@link comments.CommentsService#destroy}.
         * @param error Error, if any
         * @param [response] Count
         */
        type destroyCallback = (error: (Error|null), response?: common.Count) => void;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Id. */
    interface IId {

        /** Id id */
        id?: (string|null);
    }

    /** Represents an Id. */
    class Id implements IId {

        /**
         * Constructs a new Id.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IId);

        /** Id id. */
        public id: string;

        /**
         * Creates a new Id instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Id instance
         */
        public static create(properties?: common.IId): common.Id;

        /**
         * Encodes the specified Id message. Does not implicitly {@link common.Id.verify|verify} messages.
         * @param message Id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Id message, length delimited. Does not implicitly {@link common.Id.verify|verify} messages.
         * @param message Id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Id message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Id;

        /**
         * Decodes an Id message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Id;

        /**
         * Verifies an Id message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Id message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Id
         */
        public static fromObject(object: { [k: string]: any }): common.Id;

        /**
         * Creates a plain object from an Id message. Also converts values to other types if specified.
         * @param message Id
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Id to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Name. */
    interface IName {

        /** Name name */
        name?: (string|null);
    }

    /** Represents a Name. */
    class Name implements IName {

        /**
         * Constructs a new Name.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IName);

        /** Name name. */
        public name: string;

        /**
         * Creates a new Name instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Name instance
         */
        public static create(properties?: common.IName): common.Name;

        /**
         * Encodes the specified Name message. Does not implicitly {@link common.Name.verify|verify} messages.
         * @param message Name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Name message, length delimited. Does not implicitly {@link common.Name.verify|verify} messages.
         * @param message Name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Name message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Name;

        /**
         * Decodes a Name message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Name;

        /**
         * Verifies a Name message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Name
         */
        public static fromObject(object: { [k: string]: any }): common.Name;

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @param message Name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Name, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Query. */
    interface IQuery {

        /** Query attributes */
        attributes?: (string[]|null);

        /** Query where */
        where?: (string|null);

        /** Query order */
        order?: (string|null);

        /** Query offset */
        offset?: (number|null);

        /** Query limit */
        limit?: (number|null);
    }

    /** Represents a Query. */
    class Query implements IQuery {

        /**
         * Constructs a new Query.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IQuery);

        /** Query attributes. */
        public attributes: string[];

        /** Query where. */
        public where: string;

        /** Query order. */
        public order: string;

        /** Query offset. */
        public offset: number;

        /** Query limit. */
        public limit: number;

        /**
         * Creates a new Query instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Query instance
         */
        public static create(properties?: common.IQuery): common.Query;

        /**
         * Encodes the specified Query message. Does not implicitly {@link common.Query.verify|verify} messages.
         * @param message Query message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Query message, length delimited. Does not implicitly {@link common.Query.verify|verify} messages.
         * @param message Query message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Query;

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Query;

        /**
         * Verifies a Query message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Query
         */
        public static fromObject(object: { [k: string]: any }): common.Query;

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @param message Query
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Query, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Query to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Count. */
    interface ICount {

        /** Count count */
        count?: (number|null);
    }

    /** Represents a Count. */
    class Count implements ICount {

        /**
         * Constructs a new Count.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICount);

        /** Count count. */
        public count: number;

        /**
         * Creates a new Count instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Count instance
         */
        public static create(properties?: common.ICount): common.Count;

        /**
         * Encodes the specified Count message. Does not implicitly {@link common.Count.verify|verify} messages.
         * @param message Count message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Count message, length delimited. Does not implicitly {@link common.Count.verify|verify} messages.
         * @param message Count message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Count message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Count;

        /**
         * Decodes a Count message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Count;

        /**
         * Verifies a Count message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Count message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Count
         */
        public static fromObject(object: { [k: string]: any }): common.Count;

        /**
         * Creates a plain object from a Count message. Also converts values to other types if specified.
         * @param message Count
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Count to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
