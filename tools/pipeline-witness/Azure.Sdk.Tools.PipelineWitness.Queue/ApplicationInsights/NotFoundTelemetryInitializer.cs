using System;

using Microsoft.ApplicationInsights.Channel;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.ApplicationInsights.Extensibility;

namespace Azure.Sdk.Tools.PipelineWitness.Queue.ApplicationInsights
{
    public class NotFoundTelemetryInitializer : ITelemetryInitializer
    {
        public void Initialize(ITelemetry telemetry)
        {
            var requestTelemetry = telemetry as RequestTelemetry;

            // Is this a TrackRequest() ?
            if (requestTelemetry == null) return;

            bool parsed = Int32.TryParse(requestTelemetry.ResponseCode, out var code);
            if (!parsed) return;

            if (code == 404 )
            {
                // If we set the Success property, the SDK won't change it:
                requestTelemetry.Success = true;
            }
        }
    }
}
