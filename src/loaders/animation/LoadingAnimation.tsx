// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { BarLoader } from "react-spinners";
import "../loader.css"
import { useTranslation } from "react-i18next";

export default function LoadingAnimation() {
    const { t } = useTranslation()

    return (
        <div className="loading fadein"  id="loading">
            <BarLoader
                height={8}
                cssOverride={{
                    borderRadius: "10px",
                    width: "100%"
                }}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="#2563eb"
            />
            <div className="box">
                <span>{t("Just one secound")}</span>
            </div>
        </div>
    );
}