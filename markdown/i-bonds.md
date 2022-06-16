# I-Bonds

&nbsp;

I-Bonds are a bond offering from the US Treasury. Effectively, it gives citizens the option to purchase government debt at a reduced interest rate that they’d otherwise have to pay. It’s a win win!

&nbsp;

## 2022 special announcement

&nbsp;

**If you're new to I-Bonds, I highly recommend reading below this section, then returning**

&nbsp;

It's been a wild year for investing, right? Hopefully things turn around.

&nbsp;

### Rate increase

&nbsp;

The Fed announced a 0.75% increase to the rate they lend money at to help stave off inflation yesterday (6/15/2022), which, on its own has impacts across the economy &amp; your investments... This change does, however, have a positive impact on I-bond interest rates. Any adjustment to this rate is reflected in the fixed rate portion of the I-Bond interest rate. Fixed rates have been at 0% for [16 of the last 28 periods](https://www.treasurydirect.gov/indiv/research/indepth/ibonds/res_ibonds_iratesandterms.htm), including all of the last 2 years.

&nbsp;

### What this means

&nbsp;

Given the CPI (inflation adjustment) is generally near 2%, a fixed rate increase from 0.00% to 0.75% would have a dramatic effect on the yield of the bond. The change of the fixed rate is announced twice annually, once in May, once in November. The rate increases occur throughout those periods, but do not apply to the fixed rate portion of the bond until it is set on those two dates. Thus, any bond purchase between January 1 and November 1 will be 0.00% fixed, but the rate is (presently on 6/16/2022) 0.75%. The Fed has made it clear inflation is needing to be controlled, and there are many more rate increases coming, up to potentially 3.5% by EOY 2022.

&nbsp;

### How do I take advantage

&nbsp;

Given the fixed rate portion of the bond is permanent, any increases are locked in for the full 30 years. Any increase to this rate impacts the compounding interest of the CPI adjustment. As a result, there are two actions to consider:

&nbsp;

* If you have not yet purchased your I-bonds this year _and plan to_: **Wait until November 1st, when the fixed rate has applied to new I-bonds**
* If you have not yet purchased your I-bonds this year, _and do not plan to_: **Consider exchanging any 0% bonds for new, higher fixed rate bonds**
  * This will incur a 3 month interest penalty if purchased within the last 5 years
  * You cannot exchange bonds held for less than 1 year
  * The opportunity cost of the 3 month interest penalty will be offset by the increased returns (depending on the rate change, the breakeven point will change)

&nbsp;

## Pros & cons of I-Bonds (tl;dr)

&nbsp;

### Pros

&nbsp;

- Automatically adjusted for inflation
- Tax deferred interest
- Fixed-rate is locked (this is a pro in a decreasing rate environment)
- Government backed
- Free of state & local taxes
- Can use the proceeds to pay for qualified educational expenses tax free
- **insert “I’m doing my part” meme** Helping the government save money on their debt

&nbsp;

### Cons

&nbsp;

- Limited annual purchase amount ($10k/year/person)
- Account management is a nuisance
- Fixed-rate is locked (this is a con in a rising rates environment)
- Forfeiture of 3 months interest if exchanged prior to 5 years of ownership
- Cannot exchange within a year


&nbsp;

## I-Bond Rates

&nbsp;

The way I-Bond rates are determined is two-fold: a fixed rate (currently 0.00%) and an inflation adjustment. The inflation adjustment accounts for changes to the CPI. **This is the benefit of an I-Bond!**

&nbsp;

As a result of the combination of the two rates, you are able to hedge against inflation, while also (generally) earning additional interest. These bonds adjust every 6 months, so over the 30 year lifespan of the bond, you are unlikely to be outpaced by inflation. This makes for a great emergency fund account, as the cost of your day-to-day expenses are likely increasing with inflation.

&nbsp;

## Buying I-Bonds

&nbsp;

The process of purchasing an I-Bond is a bit of a hassle, since you need to have your identity verified after opening a treasurydirect.gov account, which involves documents being verified by a medallion signatory. However, once you’ve done so, you can purchase up to ***$10,000 per year per individual.**

&nbsp; 

You can also, technically, if you really wanted to, overpay your taxes by up to **$5,000/yr/person** and get your refund in I-Bonds.

&nbsp; 

One thing to note, when you make an I-Bond purchase, you should be aware that you have to exchange the full value of the purchased bond. If you wanted to buy $10,000 you could buy one bond for $10,000, or 10 bonds for $1,000 each. The Treasury only cares about the dollar amount, not the number of bonds. Buying more bonds at a lower amount per bond gives you higher flexibility when it comes to cashing out your bonds.

&nbsp; 

## Interest accrual, exchange, and taxation

&nbsp; 

Interest is accrued every 6 months, but is compounded daily. This means your bond will be the same value from one month to the next, until the 6th month where the entire 6 months of interest is added to the value of the bond.

&nbsp; 

Bonds will earn the same fixed rate for 30 years, and are allowed to accrue without taxation for that entire time period. When you exchange an I-Bond, a 1099-INT is produced (sent at the end of the year) accounting for the interest earned from when it was purchased until its maturation/exchanging. Given that interest is added to the value of the bond, and not issued as cash, this defers the taxation until the exchange.

&nbsp;

If your I-Bond reaches full maturity, it is automatically converted into a non-yielding bond. You should re-invest/withdraw this money as it is not yielding any return.

&nbsp;  

Given the ability to exchange early, without penalty, past 5 years, it gives some level of control as to when you “realize” the interest earnings. This may help in tax optimization, as you can time your interest taxes with a low income year.

&nbsp;  

## Evan’s bookmarklet for not having to use the “Virtual Keyboard”

&nbsp;

If you don’t want to use the treasury’s security theater keyboard, you can use the following bookmarklet to enter your password into a browser alert, and it’ll submit that password on your behalf. This is the full script, so you can see I’m not stealing your information :)

```
javascript:(function() { const input = document.querySelector('.pwordinput'); input.readOnly = false; const pwd = prompt('Enter your password', ''); input.value = pwd; document.querySelector('[value="Submit"]').click(); })();
```
