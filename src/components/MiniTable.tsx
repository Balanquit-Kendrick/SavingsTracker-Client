import React from "react";
import { Transaction, columns } from "../app/(main)/transaction/mini-columns";
import { DataTable } from "../app/(main)/transaction/mini-data-table";
import { Maximize2 } from "lucide-react";
import Link from "next/link";

const getData = async (): Promise<Transaction[]> => {
  return [
    {
      id: "728ed521",
      amount: 134,
      category: "Withdrawal",
      username: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124,
      category: "Deposit",
      username: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167,
      category: "Deposit",
      username: "Mike Galloway",
      email: "mikegalloway@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156,
      category: "Deposit",
      username: "Minerva Robinson",
      email: "minerbarobinson@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145,
      category: "Deposit",
      username: "Mable Clayton",
      email: "mableclayton@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189,
      category: "Withdrawal",
      username: "Nathan McDaniel",
      email: "nathanmcdaniel@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178,
      category: "Deposit",
      username: "Myrtie Lamb",
      email: "myrtielamb@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190,
      category: "Deposit",
      username: "Leona Bryant",
      email: "leonabryant@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134,
      category: "Deposit",
      username: "Aaron Willis",
      email: "aaronwillis@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543,
      category: "Deposit",
      username: "Joel Keller",
      email: "joelkeller@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234,
      category: "Withdrawal",
      username: "Daniel Ellis",
      email: "danielellis@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345,
      category: "Deposit",
      username: "Gordon Kennedy",
      email: "gordonkennedy@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335,
      category: "Deposit",
      username: "Emily Hoffman",
      email: "emilyhoffman@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664,
      category: "Withdrawal",
      username: "Jeffery Garrett",
      email: "jefferygarrett@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332,
      category: "Deposit",
      username: "Ralph Baker",
      email: "ralphbaker@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413,
      category: "Deposit",
      username: "Seth Fields",
      email: "sethfields@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345,
      category: "Withdrawal",
      username: "Julia Webb",
      email: "juliawebb@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754,
      category: "Deposit",
      username: "Gary Banks",
      email: "garybanks@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643,
      category: "Deposit",
      username: "Flora Chambers",
      email: "florachambers@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543,
      category: "Withdrawal",
      username: "Steve Hanson",
      email: "stevehanson@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324,
      category: "Deposit",
      username: "Lola Robinson",
      email: "lolarobinson@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123,
      category: "Withdrawal",
      username: "Ethel Waters",
      email: "ethelwaters@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422,
      category: "Deposit",
      username: "Grace Edwards",
      email: "graceedwards@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712,
      category: "Deposit",
      username: "Sallie Wong",
      email: "salliewong@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360,
      category: "Deposit",
      username: "Bryan Gutierrez",
      email: "bryangutierrez@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454,
      category: "Withdrawal",
      username: "Erik Rice",
      email: "erikrice@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382,
      category: "Deposit",
      username: "Jordan Atkins",
      email: "jordanatkins@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328,
      category: "Deposit",
      username: "Bill Brewer",
      email: "billbrewer@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250,
      category: "Deposit",
      username: "Edwin Morris",
      email: "edwinmorris@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658,
      category: "Deposit",
      username: "Harold Becker",
      email: "haroldbecker@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691,
      category: "Deposit",
      username: "Hannah Rodriguez",
      email: "hannahrodriguez@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969,
      category: "Deposit",
      username: "Zachary Beck",
      email: "zacharybeck@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617,
      category: "Deposit",
      username: "Frances Potter",
      email: "francespotter@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173,
      category: "Deposit",
      username: "Raymond Murray",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      category: "Deposit",
      username: "Adam Sherman",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      category: "Withdrawal",
      username: "Anne Cruz",
      email: "annecruz@gmail.com",
    },
  ];
};

const MiniTable = async () => {
  const data = await getData();
  return (
    <div>
      <div className="mb-4 p-2 rounded-md flex justify-between items-center">
        <h1 className="font-semibold">Recent Transactions</h1>
        <Link href="/transaction">
          <Maximize2 size={16}/>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MiniTable;
