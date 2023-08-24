function execute() {
    try {
        const searchFlightResponse = await this.searchFlightMsClient.searchFlights(
            searchFlightRequest,
            flightSearchQuery,
        );
        console.log('HOLI', searchFlightResponse);

        if ('error' in searchFlightResponse) throw new InternalServerErrorException({ ...searchFlightResponse.error });

        return {
            data: searchFlightResponse,
        };
    } catch (error) {
        this.logger.error(error);
        return {
            error: { ...error.response },
        };
    }
}