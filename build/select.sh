#!/bin/bash

echo "选择要连接的mongo数据库?"
select var in mongobjsc102  mongobjsc115 mongozwt179 mongomaster;
do
    break
done

echo "You have selected $var"
