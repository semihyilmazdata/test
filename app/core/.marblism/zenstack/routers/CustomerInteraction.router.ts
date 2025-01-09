/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.CustomerInteractionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.createMany(input as any))),

        create: procedure.input($Schema.CustomerInteractionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.create(input as any))),

        deleteMany: procedure.input($Schema.CustomerInteractionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.deleteMany(input as any))),

        delete: procedure.input($Schema.CustomerInteractionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.delete(input as any))),

        findFirst: procedure.input($Schema.CustomerInteractionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).customerInteraction.findFirst(input as any))),

        findMany: procedure.input($Schema.CustomerInteractionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).customerInteraction.findMany(input as any))),

        findUnique: procedure.input($Schema.CustomerInteractionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).customerInteraction.findUnique(input as any))),

        updateMany: procedure.input($Schema.CustomerInteractionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.updateMany(input as any))),

        update: procedure.input($Schema.CustomerInteractionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).customerInteraction.update(input as any))),

        count: procedure.input($Schema.CustomerInteractionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).customerInteraction.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CustomerInteractionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CustomerInteractionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerInteractionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerInteractionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerInteractionGetPayload<T>, Context>) => Promise<Prisma.CustomerInteractionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CustomerInteractionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CustomerInteractionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerInteractionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerInteractionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerInteractionGetPayload<T>, Context>) => Promise<Prisma.CustomerInteractionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CustomerInteractionFindFirstArgs, TData = Prisma.CustomerInteractionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.CustomerInteractionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomerInteractionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerInteractionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CustomerInteractionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomerInteractionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomerInteractionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CustomerInteractionFindManyArgs, TData = Array<Prisma.CustomerInteractionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.CustomerInteractionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CustomerInteractionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerInteractionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.CustomerInteractionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CustomerInteractionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CustomerInteractionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CustomerInteractionFindUniqueArgs, TData = Prisma.CustomerInteractionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CustomerInteractionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CustomerInteractionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CustomerInteractionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CustomerInteractionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CustomerInteractionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CustomerInteractionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CustomerInteractionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CustomerInteractionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CustomerInteractionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CustomerInteractionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CustomerInteractionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CustomerInteractionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CustomerInteractionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CustomerInteractionGetPayload<T>, Context>) => Promise<Prisma.CustomerInteractionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.CustomerInteractionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CustomerInteractionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.CustomerInteractionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CustomerInteractionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.CustomerInteractionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.CustomerInteractionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.CustomerInteractionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.CustomerInteractionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
