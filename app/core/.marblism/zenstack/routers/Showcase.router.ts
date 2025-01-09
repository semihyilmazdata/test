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

        createMany: procedure.input($Schema.ShowcaseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.createMany(input as any))),

        create: procedure.input($Schema.ShowcaseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.create(input as any))),

        deleteMany: procedure.input($Schema.ShowcaseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.deleteMany(input as any))),

        delete: procedure.input($Schema.ShowcaseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.delete(input as any))),

        findFirst: procedure.input($Schema.ShowcaseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).showcase.findFirst(input as any))),

        findMany: procedure.input($Schema.ShowcaseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).showcase.findMany(input as any))),

        findUnique: procedure.input($Schema.ShowcaseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).showcase.findUnique(input as any))),

        updateMany: procedure.input($Schema.ShowcaseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.updateMany(input as any))),

        update: procedure.input($Schema.ShowcaseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).showcase.update(input as any))),

        count: procedure.input($Schema.ShowcaseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).showcase.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ShowcaseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ShowcaseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ShowcaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ShowcaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ShowcaseGetPayload<T>, Context>) => Promise<Prisma.ShowcaseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ShowcaseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ShowcaseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ShowcaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ShowcaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ShowcaseGetPayload<T>, Context>) => Promise<Prisma.ShowcaseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ShowcaseFindFirstArgs, TData = Prisma.ShowcaseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ShowcaseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ShowcaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ShowcaseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ShowcaseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ShowcaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ShowcaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ShowcaseFindManyArgs, TData = Array<Prisma.ShowcaseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ShowcaseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ShowcaseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ShowcaseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ShowcaseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ShowcaseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ShowcaseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ShowcaseFindUniqueArgs, TData = Prisma.ShowcaseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ShowcaseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ShowcaseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ShowcaseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ShowcaseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ShowcaseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ShowcaseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ShowcaseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ShowcaseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ShowcaseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ShowcaseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ShowcaseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ShowcaseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ShowcaseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ShowcaseGetPayload<T>, Context>) => Promise<Prisma.ShowcaseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ShowcaseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ShowcaseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ShowcaseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ShowcaseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ShowcaseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ShowcaseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ShowcaseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ShowcaseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
