import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom';

describe("Hero Component", () => {
    test("renders Hero component with correct text", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("heroImage");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test("renders Signup button", () => {
        render(<Hero />);
        const btn = screen.getByRole("button", { name: '/signup now/i' });
        expect(btn).toBeInTheDocument();
        // expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
})