import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

import { shouldBehaveLikeAstaVerde } from "./AstaVerde.behavior";
import { deployAstaVerdeFixture } from "./AstaVerde.fixture";
import type { Signers } from "./types";

/*
Overall flow: each 'test function' is used to group tests sharing the same fixture.
*/

describe("All tests", function () {
  before(async function () {
    const signers = await ethers.getSigners();
    this.signers = {
      admin: signers[0],
      // using last 2 signers as producers
      producers: signers.slice(-2),
    } as Signers;

    this.loadFixture = loadFixture;
  });

  describe("AstaVerde", function () {
    beforeEach(async function () {
      const { astaVerde, mockUSDC } = await this.loadFixture(deployAstaVerdeFixture);
      this.mockUSDC = mockUSDC;
      this.astaVerde = astaVerde;
    });

    shouldBehaveLikeAstaVerde();
  });
});
